const recipePageElement = document.querySelector("#recipe-page");
const categoryMenuElement = document.querySelector("#category-menu");
const miniSearch = document.querySelector("#mini-search");
const searchInput = document.querySelector("#site-search");
const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownButton = document.querySelector(".nav-dropdown-button");
const menuCategories = [
  { slug: "cakes", label: "Cakes", href: "cakes.html" },
  { slug: "pastries-buns", label: "Pastries & Buns", href: "pastries-buns.html" },
  { slug: "cupcakes", label: "Cupcakes", href: "cupcakes.html" },
  { slug: "cookies", label: "Cookies", href: "cookies.html" },
  { slug: "bars", label: "Brownies & Bars", href: "bars.html" },
  { slug: "creams", label: "Creams & Fillings", href: "creams.html" },
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
    "cookie dough",
    "vanilla cream",
    "danish pastry dough",
    "almond filling",
    "brushing and decoration",
    "glaze"
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
    "make the vanilla custard",
    "make the vanilla cream",
    "make the almond filling",
    "make the pastry dough",
    "shape the pastries",
    "for square pastries",
    "for figure eight pastries",
    "rise and bake",
    "glaze"
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

const defaultRecipeReviews = {
  "vegan-apple-crumble": [
    {
      name: "Emma Lind",
      rating: 5,
      createdAt: "2026-07-15T10:00:00.000Z",
      comment: "This tasted like pure comfort. The apples turned soft and cozy, and the crumble stayed beautifully golden."
    },
    {
      name: "Sofia",
      rating: 5,
      createdAt: "2026-07-20T12:30:00.000Z",
      comment: "Such a lovely dessert for a slow weekend. The custard made it feel extra special."
    },
    {
      name: "Mia Berg",
      rating: 5,
      createdAt: "2026-07-25T16:45:00.000Z",
      comment: "I loved the cinnamon and cardamom together. It made the whole kitchen smell amazing."
    }
  ],
  "vegan-carrot-cake-muffins": [
    {
      name: "Olivia",
      rating: 5,
      createdAt: "2026-07-16T09:15:00.000Z",
      comment: "So soft and full of flavor. The frosting was light, creamy, and perfect with the spices."
    },
    {
      name: "Clara Holm",
      rating: 5,
      createdAt: "2026-07-21T14:20:00.000Z",
      comment: "These felt like little bakery cupcakes. Moist, cozy, and beautiful with the walnuts on top."
    },
    {
      name: "Nora",
      rating: 5,
      createdAt: "2026-07-26T11:10:00.000Z",
      comment: "A wonderful vegan carrot cake recipe. I would happily make these again for guests."
    }
  ],
  "vegan-chocolate-chip-banana-bread": [
    {
      name: "Ella Stone",
      rating: 5,
      createdAt: "2026-07-17T18:05:00.000Z",
      comment: "This banana bread came out so moist and chocolatey. It was even better the next day."
    },
    {
      name: "Freja",
      rating: 5,
      createdAt: "2026-07-22T08:40:00.000Z",
      comment: "The warm spices made it feel extra cozy. Perfect with coffee in the afternoon."
    },
    {
      name: "Isabelle Moore",
      rating: 5,
      createdAt: "2026-07-27T13:25:00.000Z",
      comment: "Easy to follow and absolutely delicious. The chocolate pockets were my favorite part."
    }
  ],
  "vegan-fudgy-walnut-brownies": [
    {
      name: "Lina",
      rating: 5,
      createdAt: "2026-07-18T17:50:00.000Z",
      comment: "These brownies were rich, fudgy, and so chocolatey. The walnuts gave the perfect crunch."
    },
    {
      name: "Amelia Rose",
      rating: 5,
      createdAt: "2026-07-23T19:00:00.000Z",
      comment: "Exactly how a brownie should be. Gooey in the middle with a beautiful crackly top."
    },
    {
      name: "Hanna",
      rating: 5,
      createdAt: "2026-07-28T15:15:00.000Z",
      comment: "I served these chilled and they sliced so neatly. Everyone asked for another piece."
    }
  ],
  "peanut-butter-stuffed-chocolate-cookies": [
    {
      name: "Alice Green",
      rating: 5,
      createdAt: "2026-07-19T15:35:00.000Z",
      comment: "The peanut butter center was such a dreamy surprise. These taste like bakery cookies."
    },
    {
      name: "Julia",
      rating: 5,
      createdAt: "2026-07-24T10:20:00.000Z",
      comment: "Freezing the filling made them so easy to shape. They baked up thick and delicious."
    },
    {
      name: "Maja Nilsson",
      rating: 5,
      createdAt: "2026-07-29T12:05:00.000Z",
      comment: "Chocolate and peanut butter perfection. I warmed one slightly and it was incredible."
    }
  ],
  "vegan-smores-stuffed-cookies": [
    {
      name: "Elise",
      rating: 5,
      createdAt: "2026-08-06T18:30:00.000Z",
      comment: "These were so fun to pull apart. Gooey chocolate, soft marshmallow, and crisp biscuit pieces in every bite."
    },
    {
      name: "Sara Bloom",
      rating: 5,
      createdAt: "2026-08-07T20:10:00.000Z",
      comment: "A proper showstopper cookie. They looked beautiful and tasted even better warm."
    },
    {
      name: "Thea",
      rating: 5,
      createdAt: "2026-08-08T16:45:00.000Z",
      comment: "The frozen filling trick worked perfectly. Thick cookies with the dreamiest center."
    }
  ],
  "vegan-lemon-poppy-seed-bundt-cake": [
    {
      name: "Matilda West",
      rating: 5,
      createdAt: "2026-07-30T11:30:00.000Z",
      comment: "Bright, soft, and so pretty on the table. The lemon glaze gave it such a fresh finish."
    },
    {
      name: "Grace",
      rating: 5,
      createdAt: "2026-07-31T16:05:00.000Z",
      comment: "This cake tasted like sunshine. The texture was tender and the poppy seeds were lovely."
    },
    {
      name: "Alva Dahl",
      rating: 5,
      createdAt: "2026-08-01T09:55:00.000Z",
      comment: "Beautiful flavor and easy instructions. It made a simple coffee break feel special."
    }
  ],
  "vegan-danish-pastries-vanilla-almond": [
    {
      name: "Linnea",
      rating: 5,
      createdAt: "2026-08-09T08:20:00.000Z",
      comment: "These pastries looked straight from a bakery. The almond filling and vanilla cream were beautiful together."
    },
    {
      name: "Astrid Bergman",
      rating: 5,
      createdAt: "2026-08-10T11:40:00.000Z",
      comment: "The layers turned out flaky and golden. The cardamom made them taste wonderfully Scandinavian."
    },
    {
      name: "Elsa",
      rating: 5,
      createdAt: "2026-08-11T15:10:00.000Z",
      comment: "Worth every chill and fold. They were crisp, creamy, and absolutely gorgeous with the glaze."
    }
  ],
  "homemade-vegan-nutella": [
    {
      name: "Ida Larsson",
      rating: 5,
      createdAt: "2026-08-02T09:25:00.000Z",
      comment: "So smooth and chocolatey. I loved knowing exactly what went into it."
    },
    {
      name: "Leah",
      rating: 5,
      createdAt: "2026-08-03T14:50:00.000Z",
      comment: "This was amazing on toast and pancakes. The roasted hazelnut flavor really shines."
    },
    {
      name: "Victoria Lane",
      rating: 5,
      createdAt: "2026-08-04T17:15:00.000Z",
      comment: "Creamy, rich, and so much better than store-bought. I kept sneaking spoonfuls."
    }
  ]
};

function getDefaultReviews(recipe) {
  return defaultRecipeReviews[recipe.slug] || [];
}

function renderCommentList(recipe) {
  const comments = [...getStoredComments(recipe), ...getDefaultReviews(recipe)];
  const commentCountElement = document.querySelector("#comment-count");
  const commentListElement = document.querySelector("#comment-list");
  const commentLabel = comments.length === 1 ? "1 Review" : `${comments.length} Reviews`;

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
