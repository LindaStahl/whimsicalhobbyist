<?php
get_header();
?>

    <main>
      <section class="recipe-carousel" aria-label="Featured recipe carousel">
        <button
          class="carousel-button carousel-button-prev"
          type="button"
          aria-label="Previous recipes"
          id="carousel-prev"
        >
          &lsaquo;
        </button>
        <div class="carousel-track" id="recipe-carousel"></div>
        <button
          class="carousel-button carousel-button-next"
          type="button"
          aria-label="Next recipes"
          id="carousel-next"
        >
          &rsaquo;
        </button>
      </section>

      <section class="page-shell">
        <section class="post-feed" id="recipes" aria-label="Latest recipes">
          <div class="section-heading">
            <h1>Latest Recipes</h1>
          </div>

          <div id="recipe-list"></div>
        </section>

        <aside class="sidebar" aria-label="Blog sidebar">
          <section class="sidebar-panel" id="popular">
            <h2>Popular posts</h2>
            <div id="popular-posts"></div>
          </section>

          <section class="sidebar-panel about-panel" id="about">
            <h2>About The Little Baking Troll</h2>
            <img
              src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/About.png'); ?>"
              alt="Linda, the baker behind The Little Baking Troll"
            />
            <p>
              Welcome to The Little Baking Troll! I'm Linda, a passionate home
              baker and recipe creator sharing easy, delicious vegan baking
              recipes inspired by cozy moments, childhood memories, and the joy
              of homemade desserts.
            </p>
            <p>
              Here you'll find tried-and-tested plant-based recipes for cookies,
              cakes, brownies, muffins, breads, and other sweet treats made with
              simple ingredients and plenty of love. Whether you're a lifelong
              vegan, baking for someone with dietary preferences, or simply
              looking for incredible desserts that everyone will enjoy, my goal
              is to help you bake with confidence.
            </p>
            <p>
              When I'm not in the kitchen, you'll usually find me reading a good
              book, gardening, or spending time with horses - hobbies that
              inspire the cozy, playful feeling behind every recipe I create.
            </p>
            <p>
              So put on your apron, preheat the oven, and let's fill your
              kitchen with the comforting aroma of freshly baked treats. I'm so
              happy you're here, and I can't wait to bake something wonderful
              together.
            </p>
          </section>

          <section class="sidebar-panel tiktok-panel">
            <h2>Follow on TikTok</h2>
            <a
              class="tiktok-card"
              href="https://www.tiktok.com/@littlebakingtroll"
              target="_blank"
              rel="noreferrer"
            >
              <span>TikTok</span>
              @littlebakingtroll
            </a>
            <a
              class="tiktok-card"
              href="https://www.instagram.com/littlebakingtroll"
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
              @littlebakingtroll
            </a>
          </section>

          <section class="sidebar-panel ebook-panel" id="ebook">
            <h2>Order my Ebook</h2>
            <p>Sweet Little Baking Troll bakes gathered into one cozy collection.</p>
            <a class="read-more" href="<?php echo esc_url(whimsicalhobbyist_page_url('sign-up')); ?>">Join the list</a>
          </section>

          <section class="sidebar-panel newsletter-panel" id="newsletter">
            <h2>Sign up</h2>
            <p>Get new recipes and pastel kitchen notes in your inbox.</p>
            <form class="newsletter-form" id="newsletter-form">
              <label for="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
              <button type="submit">Subscribe</button>
              <p class="form-message" id="form-message" aria-live="polite"></p>
            </form>
          </section>
        </aside>
      </section>
    </main>

<?php
get_footer();
