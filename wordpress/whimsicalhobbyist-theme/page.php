<?php
get_header();
?>

    <main class="landing-page">
      <section class="landing-hero">
        <h1><?php the_title(); ?></h1>
      </section>
      <section class="landing-panel">
        <?php
        while (have_posts()) {
            the_post();
            the_content();
        }
        ?>
      </section>
    </main>

<?php
get_footer();
