const recipePageElement = document.querySelector("#recipe-page");
const categoryMenuElement = document.querySelector("#category-menu");
const miniSearch = document.querySelector("#mini-search");
const searchInput = document.querySelector("#site-search");

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
  const categories = recipes.map((recipe) => ({
    slug: recipe.category,
    label: recipe.categoryLabel
  }));
  const uniqueCategories = new Map(
    categories.map((category) => [category.slug, category])
  );

  return [{ slug: "all", label: "All recipes" }, ...uniqueCategories.values()];
}

function renderCategoryMenu() {
  categoryMenuElement.innerHTML = getCategories()
    .map(
      (category) => `
        <a href="index.html#recipes" data-category-filter="${category.slug}">
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
          <ul>
            ${recipe.ingredients
              .map((ingredient) => `<li>${ingredient}</li>`)
              .join("")}
          </ul>
        </section>

        <section class="recipe-card-panel">
          <h2>Method</h2>
          <ol>
            ${recipe.method.map((step) => `<li>${step}</li>`).join("")}
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

      <footer class="recipe-post-footer">
        <span>Posted ${formatDate(recipe.date)}</span>
        <a class="read-more" href="index.html#recipes">Browse more recipes</a>
      </footer>
    </article>
  `;
}

function getSelectedRecipe() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("recipe");

  return recipes.find((recipe) => recipe.slug === slug);
}

renderCategoryMenu();

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
});

miniSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  sessionStorage.setItem("whimsicalSearch", searchInput.value.trim());
  window.location.href = "index.html#recipes";
});
