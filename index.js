const filterButtons = document.querySelectorAll(".filter-button");
const navCategoryButtons = document.querySelectorAll("[data-category-filter]");
const recipePosts = document.querySelectorAll(".blog-post");
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
const miniSearch = document.querySelector("#mini-search");
const searchInput = document.querySelector("#site-search");

let activeFilter = "all";

function syncFilterControls() {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.toggle(
      "active",
      filterButton.dataset.filter === activeFilter
    );
  });

  navCategoryButtons.forEach((categoryButton) => {
    categoryButton.classList.toggle(
      "active",
      categoryButton.dataset.categoryFilter === activeFilter
    );
  });
}

function updateVisiblePosts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  recipePosts.forEach((post) => {
    const matchesFilter =
      activeFilter === "all" || post.dataset.category === activeFilter;
    const matchesSearch = post.textContent.toLowerCase().includes(searchTerm);

    post.classList.toggle("hidden", !matchesFilter || !matchesSearch);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    syncFilterControls();
    updateVisiblePosts();
  });
});

navCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.categoryFilter;
    syncFilterControls();
    updateVisiblePosts();
    document.querySelector("#recipes").scrollIntoView({ behavior: "smooth" });
  });
});

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
