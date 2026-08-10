const recipePageElement = document.querySelector("#recipe-page");
const categoryMenuElement = document.querySelector("#category-menu");
const miniSearch = document.querySelector("#mini-search");
const searchInput = document.querySelector("#site-search");
const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownButton = document.querySelector(".nav-dropdown-button");
const menuCategories = [
  { slug: "cakes", label: "Cakes", href: "cakes.html" },
  { slug: "cupcakes", label: "Cupcakes", href: "cupcakes.html" },
  { slug: "cookies", label: "Cookies", href: "cookies.html" },
  { slug: "bars", label: "Bars", href: "bars.html" },
  { slug: "creams", label: "Creams", href: "creams.html" },
  { slug: "no-bake", label: "No Bake", href: "no-bake.html" },
  { slug: "glutenfree", label: "Gluten-Free", href: "glutenfree.html" }
];

function getRecipeUrl(recipe) {
  return `recipe.html?recipe=${recipe.slug}`;
}

function formatDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);

  return date.toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function getCategories() {
  return menuCategories;
}

function renderCategoryMenu() {
  categoryMenuElement.innerHTML = getCategories()
    .map(
      (category) => `
        <a href="${category.href}" data-category-filter="${category.slug}">
          ${category.label}
        </a>
      `
    )
    .join("");
}

function renderRecipeNotFound() {
  recipePageElement.innerHTML = `
    <section class="recipe-detail recipe-not-found">
      <p class="eyebrow">Recipe not found</p>
      <h1>This bake wandered off</h1>
      <p>Head back to the recipe box and choose another sweet thing.</p>
      <a class="read-more" href="index.html#recipes">Back to recipes</a>
    </section>
  `;
}

function parseIngredientAmount(amount) {
  if (amount.includes(" ")) {
    const [whole, fraction] = amount.split(" ");
    const [numerator, denominator] = fraction.split("/");

    return Number(whole) + Number(numerator) / Number(denominator);
  }

  if (amount.includes("/")) {
    const [numerator, denominator] = amount.split("/");

    return Number(numerator) / Number(denominator);
  }

  return Number(amount);
}

function formatScaledAmount(amount) {
  const rounded = Math.round(amount * 100) / 100;

  if (Number.isInteger(rounded)) {
    return String(rounded);
  }

  return String(rounded).replace(/\.0+$/, "");
}

function scaleIngredient(ingredient, scale) {
  const match = ingredient.match(/^(\d+(?:\.\d+)?(?:\s+\d+\/\d+)?|\d+\/\d+)(.*)$/);

  if (!match) {
    return ingredient;
  }

  const amount = parseIngredientAmount(match[1]);

  if (!Number.isFinite(amount)) {
    return ingredient;
  }

  return `${formatScaledAmount(amount * scale)}${match[2]}`;
}

function renderIngredients(recipe, scale = 1) {
  const ingredientHeadings = [
    "cupcake batter",
    "frosting",
    "decoration",
    "apple filling",
    "crumble topping",
    "homemade vanilla custard",
    "chocolate hazelnut filling",
    "cookie dough"
  ];

  return recipe.ingredients
    .map((ingredient) => {
      const normalizedIngredient = ingredient.toLowerCase();
      const isHeading =
        normalizedIngredient.startsWith("for ") ||
        ingredientHeadings.includes(normalizedIngredient);
      const scaledIngredient = scaleIngredient(ingredient, scale);

      return `<li class="${isHeading ? "ingredient-heading" : ""}">${scaledIngredient}</li>`;
    })
    .join("");
}

function renderMethodStep(step) {
  const methodHeadings = [
    "prepare the apple filling",
    "make the crumble",
    "assemble",
    "make the vanilla custard"
  ];
  const isHeading = methodHeadings.includes(step.toLowerCase());

  return `<li class="${isHeading ? "method-heading ingredient-heading" : ""}">${step}</li>`;
}

function renderMethodSteps(method) {
  let shouldResetCounter = true;

  return method
    .map((step) => {
      const renderedStep = renderMethodStep(step);
      const isHeading = renderedStep.includes("method-heading");
      const resetAttribute = shouldResetCounter && !isHeading ? ' value="1"' : "";

      shouldResetCounter = isHeading;

      return renderedStep.replace("<li", `<li${resetAttribute}`);
    })
    .join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });
}

function getCommentStorageKey(recipe) {
  return `whimsicalRecipeComments:${recipe.slug}`;
}

function getStoredComments(recipe) {
  try {
    return JSON.parse(localStorage.getItem(getCommentStorageKey(recipe))) || [];
  } catch {
    return [];
  }
}

function saveStoredComments(recipe, comments) {
  localStorage.setItem(getCommentStorageKey(recipe), JSON.stringify(comments));
}

function formatCommentDate(dateValue) {
  return new Date(dateValue).toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function renderCommentList(recipe) {
  const comments = getStoredComments(recipe);
  const commentCountElement = document.querySelector("#comment-count");
  const commentListElement = document.querySelector("#comment-list");
  const commentLabel = comments.length === 1 ? "1 Comment" : `${comments.length} Comments`;

  commentCountElement.textContent = commentLabel;

  if (!comments.length) {
    commentListElement.innerHTML = `
      <p class="no-comments">No comments yet. Be the first to leave one.</p>
    `;
    return;
  }

  commentListElement.innerHTML = comments
    .map(
      (comment) => `
        <article class="recipe-comment">
          <div class="comment-avatar" aria-hidden="true">${escapeHtml(comment.name.charAt(0).toUpperCase())}</div>
          <div>
            <div class="comment-meta">
              <strong>${escapeHtml(comment.name)}</strong>
              <span>${formatCommentDate(comment.createdAt)}</span>
            </div>
            <p class="comment-rating" aria-label="${comment.rating} out of 5 stars">
              ${"★".repeat(comment.rating)}${"☆".repeat(5 - comment.rating)}
            </p>
            <p>${escapeHtml(comment.comment)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function bindRecipeComments(recipe) {
  const commentForm = document.querySelector("#comment-form");
  const commentMessage = document.querySelector("#comment-message");
  const ratingOptions = document.querySelector("#rating-options");

  renderCommentList(recipe);

  ratingOptions.addEventListener("change", (event) => {
    if (event.target.name === "rating") {
      ratingOptions.dataset.selectedRating = event.target.value;
    }
  });

  ratingOptions.addEventListener("mouseover", (event) => {
    const ratingLabel = event.target.closest("[data-rating-value]");

    if (ratingLabel) {
      ratingOptions.dataset.hoverRating = ratingLabel.dataset.ratingValue;
    }
  });

  ratingOptions.addEventListener("mouseleave", () => {
    delete ratingOptions.dataset.hoverRating;
  });

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(commentForm);
    const comments = getStoredComments(recipe);
    const comment = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      comment: formData.get("comment").trim(),
      rating: Number(formData.get("rating")),
      notifyComments: formData.get("notify-comments") === "on",
      notifyPosts: formData.get("notify-posts") === "on",
      createdAt: new Date().toISOString()
    };

    if (!comment.name || !comment.email || !comment.comment || !comment.rating) {
      commentMessage.textContent = "Please complete the required fields before posting.";
      return;
    }

    saveStoredComments(recipe, [comment, ...comments]);
    commentForm.reset();
    delete ratingOptions.dataset.selectedRating;
    delete ratingOptions.dataset.hoverRating;
    commentMessage.textContent = "Thank you! Your comment has been added on this device.";
    renderCommentList(recipe);
  });
}

function bindIngredientScaler(recipe) {
  const ingredientsList = document.querySelector("#ingredients-list");

  document.querySelectorAll("[data-recipe-scale]").forEach((button) => {
    button.addEventListener("click", () => {
      const scale = Number(button.dataset.recipeScale);

      document.querySelectorAll("[data-recipe-scale]").forEach((scaleButton) => {
        scaleButton.classList.toggle("active", scaleButton === button);
      });

      ingredientsList.innerHTML = renderIngredients(recipe, scale);
    });
  });
}

function renderRecipe(recipe) {
  document.title = `${recipe.title} | Whimsicalhobbyist`;
  const extraSections = recipe.extraSections || [];

  recipePageElement.innerHTML = `
    <article class="recipe-detail">
      <a class="back-link" href="index.html#recipes">Back to recipes</a>
      <div class="recipe-detail-hero">
        <div class="recipe-detail-copy">
          <p class="eyebrow">${recipe.categoryLabel}</p>
          <h1>${recipe.title}</h1>
          <p>${recipe.excerpt}</p>
          <div class="recipe-stats" aria-label="Recipe details">
            <span>Prep: ${recipe.prepTime}</span>
            <span>Bake: ${recipe.bakeTime}</span>
            <span>Serves: ${recipe.servings}</span>
          </div>
        </div>
        <img src="${recipe.image}" alt="${recipe.alt}" />
      </div>

      <div class="recipe-detail-body">
        <section class="recipe-card-panel">
          <h2>Ingredients</h2>
          <div class="ingredient-scaler" aria-label="Scale recipe ingredients">
            <span>Batch size</span>
            <button type="button" data-recipe-scale="0.5">1/2x</button>
            <button class="active" type="button" data-recipe-scale="1">1x</button>
            <button type="button" data-recipe-scale="2">2x</button>
            <button type="button" data-recipe-scale="3">3x</button>
          </div>
          <ul id="ingredients-list">
            ${renderIngredients(recipe)}
          </ul>
        </section>

        <section class="recipe-card-panel">
          <h2>Method</h2>
          <ol>
            ${renderMethodSteps(recipe.method)}
          </ol>
        </section>
      </div>

      <section class="recipe-tip">
        <p class="eyebrow">Whimsical tip</p>
        <p>${recipe.tip}</p>
      </section>

      ${
        extraSections.length
          ? `
            <div class="recipe-extra-sections">
              ${extraSections
                .map(
                  (section) => `
                    <section class="recipe-card-panel">
                      <h2>${section.title}</h2>
                      <ul>
                        ${section.items.map((item) => `<li>${item}</li>`).join("")}
                      </ul>
                    </section>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }

      <section class="recipe-comments" id="comments">
        <h2 id="comment-count">0 Comments</h2>
        <div class="comment-list" id="comment-list"></div>

        <div class="comment-reply">
          <h2>Leave a Reply</h2>
          <p>Your email address will not be published. Required fields are marked *</p>
          <form class="comment-form" id="comment-form">
            <fieldset class="rating-fieldset">
              <legend>Recipe rating</legend>
              <div class="rating-options" id="rating-options">
                <label data-rating-value="1"><input type="radio" name="rating" value="1" required /><span>★</span></label>
                <label data-rating-value="2"><input type="radio" name="rating" value="2" /><span>★</span></label>
                <label data-rating-value="3"><input type="radio" name="rating" value="3" /><span>★</span></label>
                <label data-rating-value="4"><input type="radio" name="rating" value="4" /><span>★</span></label>
                <label data-rating-value="5"><input type="radio" name="rating" value="5" /><span>★</span></label>
              </div>
            </fieldset>

            <label for="comment">Comment *</label>
            <textarea id="comment" name="comment" rows="7" required></textarea>

            <label for="comment-name">
              Name *
              <input id="comment-name" name="name" type="text" required />
            </label>

            <label for="comment-email">
              Email *
              <input id="comment-email" name="email" type="email" required />
            </label>

            <label class="comment-checkbox">
              <input name="notify-comments" type="checkbox" />
              <span>Notify me of follow-up comments by email.</span>
            </label>

            <label class="comment-checkbox">
              <input name="notify-posts" type="checkbox" />
              <span>Notify me of new posts by email.</span>
            </label>

            <button type="submit">Post Comment</button>
            <p class="form-message" id="comment-message" aria-live="polite"></p>
          </form>
        </div>
      </section>

      <footer class="recipe-post-footer">
        <span>Posted ${formatDate(recipe.date)}</span>
        <a class="read-more" href="index.html#recipes">Browse more recipes</a>
      </footer>
    </article>
  `;

  bindIngredientScaler(recipe);
  bindRecipeComments(recipe);
}

function getSelectedRecipe() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("recipe");

  return recipes.find((recipe) => recipe.slug === slug);
}

renderCategoryMenu();

navDropdownButton.addEventListener("click", () => {
  navDropdown.classList.toggle("open");
});

const selectedRecipe = getSelectedRecipe();

if (selectedRecipe) {
  renderRecipe(selectedRecipe);
} else {
  renderRecipeNotFound();
}

categoryMenuElement.addEventListener("click", (event) => {
  const categoryLink = event.target.closest("[data-category-filter]");

  if (!categoryLink) {
    return;
  }

  sessionStorage.setItem("whimsicalCategory", categoryLink.dataset.categoryFilter);
  navDropdown.classList.remove("open");
});

document.addEventListener("click", (event) => {
  if (!navDropdown.contains(event.target)) {
    navDropdown.classList.remove("open");
  }
});

miniSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  sessionStorage.setItem("whimsicalSearch", searchInput.value.trim());
  window.location.href = "index.html#recipes";
});
