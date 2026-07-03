const categoryMenuElement = document.querySelector("#category-menu");
const recipeListElement = document.querySelector("#recipe-list");
const popularPostsElement = document.querySelector("#popular-posts");
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
const miniSearch = document.querySelector("#mini-search");
const searchInput = document.querySelector("#site-search");
const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownButton = document.querySelector(".nav-dropdown-button");

let activeFilter = "all";

function getRecipeUrl(recipe) {
  return `recipe.html?recipe=${recipe.slug}`;
}

function formatDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en", { month: "short" });
  const year = date.getFullYear();

  return { day, label: `${month} ${year}` };
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

function renderCategories() {
  categoryMenuElement.innerHTML = getCategories()
    .map(
      (category) => `
        <button type="button" data-category-filter="${category.slug}">
          ${category.label}
        </button>
      `
    )
    .join("");
}

function renderRecipePosts() {
  recipeListElement.innerHTML = recipes
    .map((recipe) => {
      const date = formatDate(recipe.date);
      const cardText = recipe.cardText || recipe.excerpt;

      return `
        <article class="blog-post" data-category="${recipe.category}">
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

function renderPopularPosts() {
  popularPostsElement.innerHTML = recipes
    .filter((recipe) => recipe.popular)
    .slice(0, 3)
    .map(
      (recipe) => `
        <a class="mini-post" href="${getRecipeUrl(recipe)}">
          <img src="${recipe.thumbnail}" alt="${recipe.alt}" />
          <span>
            <small>${recipe.categoryLabel}</small>
            ${recipe.title}
          </span>
        </a>
      `
    )
    .join("");
}

function syncFilterControls() {
  document.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.categoryFilter === activeFilter
    );
  });
}

function updateVisiblePosts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  document.querySelectorAll(".blog-post").forEach((post) => {
    const matchesFilter =
      activeFilter === "all" || post.dataset.category === activeFilter;
    const matchesSearch = post.textContent.toLowerCase().includes(searchTerm);

    post.classList.toggle("hidden", !matchesFilter || !matchesSearch);
  });
}

function setActiveFilter(filter) {
  activeFilter = filter;
  syncFilterControls();
  updateVisiblePosts();
}

function applyStoredRecipeFilters() {
  const storedCategory = sessionStorage.getItem("whimsicalCategory");
  const storedSearch = sessionStorage.getItem("whimsicalSearch");

  if (storedSearch) {
    searchInput.value = storedSearch;
    sessionStorage.removeItem("whimsicalSearch");
  }

  if (storedCategory) {
    activeFilter = storedCategory;
    sessionStorage.removeItem("whimsicalCategory");
  }
}

function bindCategoryFilters() {
  navDropdownButton.addEventListener("click", () => {
    navDropdown.classList.toggle("open");
  });

  document.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.categoryFilter);
      navDropdown.classList.remove("open");
      document.querySelector("#recipes").scrollIntoView({ behavior: "smooth" });
    });
  });
}

document.addEventListener("click", (event) => {
  if (!navDropdown.contains(event.target)) {
    navDropdown.classList.remove("open");
  }
});

renderCategories();
renderRecipePosts();
renderPopularPosts();
bindCategoryFilters();
applyStoredRecipeFilters();
setActiveFilter(activeFilter);

miniSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  updateVisiblePosts();
  document.querySelector("#recipes").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", updateVisiblePosts);

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.querySelector("#email");

  formMessage.textContent = "Sweet! Whimsicalhobbyist recipes are on the way.";
  emailInput.value = "";
});
