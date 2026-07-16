const categoryMenuElement = document.querySelector("#category-menu");
const miniSearch = document.querySelector("#mini-search");
const searchInput = document.querySelector("#site-search");
const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownButton = document.querySelector(".nav-dropdown-button");
const recipeListElement = document.querySelector("#landing-recipe-list");
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

const menuCategories = [
  { slug: "cakes", label: "Cakes", href: "cakes.html", categories: ["cakes"] },
  { slug: "cupcakes", label: "Cupcakes", href: "cupcakes.html", categories: ["cupcakes"] },
  { slug: "cookies", label: "Cookies", href: "cookies.html", categories: ["cookies"] },
  { slug: "bars", label: "Bars", href: "bars.html", categories: ["bars"] },
  { slug: "creams", label: "Creams", href: "creams.html", categories: ["basics", "creams"] },
  { slug: "no-bake", label: "No Bake", href: "no-bake.html", categories: ["no-bake"] },
  { slug: "glutenfree", label: "Gluten-Free", href: "glutenfree.html", categories: ["glutenfree"] }
];

function getRecipeUrl(recipe) {
  return `recipe.html?recipe=${recipe.slug}`;
}

function getRecipeCategories(recipe) {
  return recipe.categories || [recipe.category];
}

function formatDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en", { month: "short" });
  const year = date.getFullYear();

  return { day, label: `${month} ${year}` };
}

function renderCategoryMenu() {
  categoryMenuElement.innerHTML = menuCategories
    .map(
      (category) => `
        <a href="${category.href}" data-category-filter="${category.slug}">
          ${category.label}
        </a>
      `
    )
    .join("");
}

function renderRecipeCards(recipeSet) {
  if (!recipeListElement) {
    return;
  }

  if (!recipeSet.length) {
    recipeListElement.innerHTML = `
      <section class="recipe-not-found">
        <h2>Recipes coming soon</h2>
        <p>This section is waiting for its first Whimsicalhobbyist bake.</p>
      </section>
    `;
    return;
  }

  recipeListElement.innerHTML = recipeSet
    .map((recipe) => {
      const date = formatDate(recipe.date);
      const cardText = recipe.cardText || recipe.excerpt;

      return `
        <article class="blog-post" data-category="${recipe.category}" data-categories="${getRecipeCategories(recipe).join(" ")}">
          <a href="${getRecipeUrl(recipe)}" class="post-image">
            <img src="${recipe.image}" alt="${recipe.alt}" />
          </a>
          <div class="post-content">
            <time datetime="${recipe.date}">
              <span>${date.day}</span>
              ${date.label}
            </time>
            <p class="eyebrow">${recipe.categoryLabel}</p>
            <h2>${recipe.title}</h2>
            <div class="post-excerpt">
              ${cardText
                .split("\n\n")
                .map((paragraph) => `<p>${paragraph}</p>`)
                .join("")}
            </div>
            <a class="read-more" href="${getRecipeUrl(recipe)}">View post</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderLandingRecipes() {
  if (!recipeListElement) {
    return;
  }

  const pageType = document.body.dataset.pageType;
  const categorySlug = document.body.dataset.category;

  if (pageType === "popular") {
    renderRecipeCards(recipes.filter((recipe) => recipe.popular));
    return;
  }

  const category = menuCategories.find((item) => item.slug === categorySlug);
  const categoryRecipes = category
    ? recipes.filter((recipe) =>
        category.categories.some((categoryName) =>
          getRecipeCategories(recipe).includes(categoryName)
        )
      )
    : recipes;

  renderRecipeCards(categoryRecipes);
}

renderCategoryMenu();
renderLandingRecipes();

navDropdownButton.addEventListener("click", () => {
  navDropdown.classList.toggle("open");
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

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = document.querySelector("#email");

    formMessage.textContent = "Sweet! Whimsicalhobbyist recipes are on the way.";
    emailInput.value = "";
  });
}
