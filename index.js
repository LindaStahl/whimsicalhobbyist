const categoryMenuElement = document.querySelector("#category-menu");
const recipeCarouselElement = document.querySelector("#recipe-carousel");
const carouselPrevButton = document.querySelector("#carousel-prev");
const carouselNextButton = document.querySelector("#carousel-next");
const recipeListElement = document.querySelector("#recipe-list");
const popularPostsElement = document.querySelector("#popular-posts");
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
const miniSearch = document.querySelector("#mini-search");
const searchInput = document.querySelector("#site-search");
const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownButton = document.querySelector(".nav-dropdown-button");

let activeFilter = "all";
const menuCategories = [
  { slug: "cakes", label: "Cakes", categories: ["cakes"] },
  { slug: "cupcakes", label: "Cupcakes", categories: ["cupcakes"] },
  { slug: "cookies", label: "Cookies", categories: ["cookies"] },
  { slug: "bars", label: "Bars", categories: ["bars"] },
  { slug: "creams", label: "Creams", categories: ["basics", "creams"] },
  { slug: "no-bake", label: "No Bake", categories: ["no-bake"] }
];

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
  return menuCategories;
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

function renderRecipeCarousel() {
  recipeCarouselElement.innerHTML = recipes
    .slice(0, 6)
    .map(
      (recipe) => `
        <a class="carousel-card" href="${getRecipeUrl(recipe)}">
          <img src="${recipe.image}" alt="${recipe.alt}" />
          <span>
            <small>${recipe.categoryLabel}</small>
            ${recipe.title}
          </span>
        </a>
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

function bindRecipeCarousel() {
  const scrollCarousel = (direction) => {
    const card = recipeCarouselElement.querySelector(".carousel-card");
    const cardWidth = card ? card.offsetWidth : 280;

    recipeCarouselElement.scrollBy({
      left: direction * (cardWidth + 18),
      behavior: "smooth"
    });
  };

  carouselPrevButton.addEventListener("click", () => scrollCarousel(-1));
  carouselNextButton.addEventListener("click", () => scrollCarousel(1));
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
  const activeCategory = getCategories().find(
    (category) => category.slug === activeFilter
  );

  document.querySelectorAll(".blog-post").forEach((post) => {
    const matchesFilter =
      activeFilter === "all" ||
      activeCategory?.categories.includes(post.dataset.category);
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
renderRecipeCarousel();
renderRecipePosts();
renderPopularPosts();
bindCategoryFilters();
bindRecipeCarousel();
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
