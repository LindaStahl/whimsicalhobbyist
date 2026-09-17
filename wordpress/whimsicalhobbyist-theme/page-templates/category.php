<?php
/**
 * Template Name: Little Baking Troll Recipe Category
 */

$slug = get_post_field('post_name', get_queried_object_id());
$category_pages = whimsicalhobbyist_category_pages();
$category = isset($category_pages[$slug]) ? $category_pages[$slug] : array(
    'title' => get_the_title(),
    'description' => '',
);

get_header();
?>

    <main class="landing-page">
      <section class="landing-hero">
        <h1><?php echo esc_html($category['title']); ?></h1>
        <?php if (!empty($category['description'])) : ?>
          <p><?php echo esc_html($category['description']); ?></p>
        <?php endif; ?>
      </section>
      <div id="landing-recipe-list"></div>
    </main>

<?php
get_footer();
