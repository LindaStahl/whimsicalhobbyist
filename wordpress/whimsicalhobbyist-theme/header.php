<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?><?php whimsicalhobbyist_body_data_attributes(); ?>>
    <?php wp_body_open(); ?>
    <header class="site-header">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="brand" aria-label="The Little Baking Troll home">
        <img
          src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo-mascot.png'); ?>"
          alt="The Little Baking Troll logo"
          class="brand-logo"
        />
        <span class="brand-name">The Little Baking Troll</span>
        <span class="brand-tagline">Bake | Read | Create | Little Kitchen Magic</span>
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        <a href="<?php echo esc_url(whimsicalhobbyist_page_url('about')); ?>">About</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown-button" type="button">Recipes</button>
          <div class="nav-dropdown-menu" id="category-menu" aria-label="Recipe categories"></div>
        </div>
        <a href="<?php echo esc_url(whimsicalhobbyist_page_url('popular-recipes')); ?>">Popular Recipes</a>
        <a href="<?php echo esc_url(whimsicalhobbyist_page_url('order-my-ebook')); ?>">Order my Ebook</a>
        <a href="<?php echo esc_url(whimsicalhobbyist_page_url('sign-up')); ?>">Sign up</a>
        <form class="mini-search" id="mini-search">
          <input
            id="site-search"
            type="search"
            placeholder="Search bakes"
            aria-label="Search recipes"
          />
        </form>
      </nav>
    </header>
