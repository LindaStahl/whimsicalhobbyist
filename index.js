// Edit recipes here. Add, remove, or update these objects to change the site.
const recipes = [
  {
    title: "Confetti cloud cake",
    category: "cakes",
    categoryLabel: "Cakes",
    badge: "TikTok favorite",
    date: "2026-07-03",
    excerpt:
      "A soft vanilla layer cake with rainbow sprinkles folded into the batter, covered in whipped pastel frosting and finished with a playful sprinkle shower.",
    featuredText: "Vanilla layers, pastel sprinkles, and soft whipped frosting.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80",
    alt: "Pastel layered cake with sprinkles",
    featured: true,
    popular: false
  },
  {
    title: "Blueberry cream cupcakes",
    category: "cupcakes",
    categoryLabel: "Cupcakes",
    badge: "Cupcakes",
    date: "2026-07-01",
    excerpt:
      "Fluffy little cakes crowned with pale blue berry buttercream swirls and a soft vanilla crumb.",
    featuredText: "Fluffy cakes crowned with pale blue berry buttercream.",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=400&q=80",
    alt: "Cupcakes with pastel frosting",
    featured: true,
    popular: true
  },
  {
    title: "Brown butter bakery cookies",
    category: "cookies",
    categoryLabel: "Cookies",
    badge: "Cookies",
    date: "2026-06-29",
    excerpt:
      "Deeply golden, chewy cookies with crisp edges, a nutty brown butter base, and pools of chocolate tucked into every bite.",
    featuredText: "Chewy centers, crisp edges, and dreamy chocolate pools.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
    alt: "Fresh chocolate chip cookies",
    featured: true,
    popular: false
  },
  {
    title: "Honey milk bread",
    category: "bread",
    categoryLabel: "Bread",
    badge: "Bread",
    date: "2026-06-24",
    excerpt:
      "A golden, soft loaf with a plush crumb and gentle honey flavor, perfect for toast, jam, or thick slices still warm from the oven.",
    featuredText: "Soft golden bread with honey, milk, and a plush crumb.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    alt: "Fresh bread loaves on a table",
    featured: false,
    popular: false
  },
  {
    title: "Strawberry cream dessert cups",
    category: "no-bake",
    categoryLabel: "No bake",
    badge: "No bake",
    date: "2026-06-18",
    excerpt:
      "Buttery biscuit crumbs, whipped vanilla cream, and glossy strawberry layers stacked into tiny pastel dessert cups.",
    featuredText: "Creamy berry dessert cups with buttery biscuit layers.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80",
    alt: "Berry dessert cups",
    featured: false,
    popular: false
  },
  {
    title: "Lemon crumb muffins",
    category: "cakes",
    categoryLabel: "Cakes",
    badge: "Cakes",
    date: "2026-06-14",
    excerpt:
      "Sunny lemon muffins with a tender crumb, buttery topping, and a glossy citrus drizzle.",
    featuredText: "Sunny lemon muffins with a buttery crumb topping.",
    image:
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=400&q=80",
    alt: "Lemon cake",
    featured: false,
    popular: true
  },
  {
    title: "Pastel buttercream guide",
    category: "basics",
    categoryLabel: "Basics",
    badge: "Basics",
    date: "2026-06-10",
    excerpt:
      "A simple guide to soft pastel buttercream colors, smooth texture, and pretty swirls for cakes and cupcakes.",
    featuredText: "Soft pastel colors, smooth texture, and pretty swirls.",
    image:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=400&q=80",
    alt: "Pink macarons",
    featured: false,
    popular: true
  }
];

const featuredRecipesElement = document.querySelector("#featured-recipes");
const categoryMenuElement = document.querySelector("#category-menu");
const filterBarElement = document.querySelector("#filter-bar");
const recipeListElement = document.querySelector("#recipe-list");
const popularPostsElement = document.querySelector("#popular-posts");
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
const miniSearch = document.querySelector("#mini-search");
const searchInput = document.querySelector("#site-search");

let activeFilter = "all";

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
  const categoryButtons = getCategories()
    .map(
      (category) => `
        <button type="button" data-category-filter="${category.slug}">
          ${category.label}
        </button>
      `
    )
    .join("");

  categoryMenuElement.innerHTML = categoryButtons;
  filterBarElement.innerHTML = getCategories()
    .map(
      (category) => `
        <button
          class="filter-button"
          type="button"
          data-filter="${category.slug}"
        >
          ${category.label}
        </button>
      `
    )
    .join("");
}

function renderFeaturedRecipes() {
  featuredRecipesElement.innerHTML = recipes
    .filter((recipe) => recipe.featured)
    .slice(0, 3)
    .map(
      (recipe) => `
        <article class="feature-card">
          <img src="${recipe.image}" alt="${recipe.alt}" />
          <div>
            <p class="eyebrow">${recipe.badge}</p>
            <h2>${recipe.title}</h2>
            <p>${recipe.featuredText}</p>
            <a href="#recipes">View post</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRecipePosts() {
  recipeListElement.innerHTML = recipes
    .map((recipe) => {
      const date = formatDate(recipe.date);

      return `
        <article class="blog-post" data-category="${recipe.category}">
          <a href="#" class="post-image">
            <img src="${recipe.image}" alt="${recipe.alt}" />
          </a>
          <div class="post-content">
            <time datetime="${recipe.date}">
              <span>${date.day}</span>
              ${date.label}
            </time>
            <p class="eyebrow">${recipe.categoryLabel}</p>
            <h2>${recipe.title}</h2>
            <p>${recipe.excerpt}</p>
            <a class="read-more" href="#">View post</a>
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
        <a class="mini-post" href="#">
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
  document.querySelectorAll(".filter-button").forEach((filterButton) => {
    filterButton.classList.toggle(
      "active",
      filterButton.dataset.filter === activeFilter
    );
  });

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

function bindCategoryFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.filter);
    });
  });

  document.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.categoryFilter);
      document.querySelector("#recipes").scrollIntoView({ behavior: "smooth" });
    });
  });
}

renderCategories();
renderFeaturedRecipes();
renderRecipePosts();
renderPopularPosts();
bindCategoryFilters();
setActiveFilter("all");

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
