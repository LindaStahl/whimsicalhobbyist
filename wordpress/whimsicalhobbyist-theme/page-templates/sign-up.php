<?php
/**
 * Template Name: Little Baking Troll Sign Up
 */

get_header();
?>

    <main class="landing-page">
      <section class="landing-hero">
        <h1>Sign up</h1>
        <p>Get new recipes and pastel kitchen notes in your inbox.</p>
      </section>
      <section class="landing-panel">
        <form class="newsletter-form" id="newsletter-form">
          <label for="email">Email address</label>
          <input type="email" id="email" placeholder="you@example.com" required />
          <button type="submit">Subscribe</button>
          <p class="form-message" id="form-message" aria-live="polite"></p>
        </form>
      </section>
    </main>

<?php
get_footer();
