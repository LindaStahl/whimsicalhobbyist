<?php
/**
 * Theme setup for The Little Baking Troll.
 *
 * This theme intentionally preserves the original static site's frontend:
 * the same CSS, JavaScript-rendered recipe lists, page shells, and image assets.
 */

if (!defined('ABSPATH')) {
    exit;
}

function whimsicalhobbyist_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
}
add_action('after_setup_theme', 'whimsicalhobbyist_setup');

function whimsicalhobbyist_page_url($slug) {
    if ($slug === 'home') {
        return home_url('/');
    }

    $page = get_page_by_path($slug);

    return $page ? get_permalink($page) : home_url('/' . $slug . '/');
}

function whimsicalhobbyist_category_pages() {
    return array(
        'cakes' => array(
            'title' => 'Cakes',
            'description' => 'Soft, beautiful vegan cakes for celebrations, cozy afternoons, and every sweet moment in between.',
        ),
        'cupcakes' => array(
            'title' => 'Cupcakes',
            'description' => 'Sweet vegan cupcakes and muffins with cozy flavors, pretty toppings, and bakery-style charm.',
        ),
        'cookies' => array(
            'title' => 'Cookies',
            'description' => 'Fudgy, chewy, chocolatey cookies made for sharing, gifting, and sneaking warm from the tray.',
        ),
        'bars' => array(
            'title' => 'Bars',
            'description' => 'Sliceable vegan bars, brownies, and traybakes for every chocolate craving and coffee break.',
        ),
        'creams' => array(
            'title' => 'Creams',
            'description' => 'Silky vegan creams, frostings, spreads, and basics to make your bakes extra special.',
        ),
        'no-bake' => array(
            'title' => 'No Bake',
            'description' => 'Easy vegan treats, chilled desserts, and sweet things you can make without turning on the oven.',
        ),
        'glutenfree' => array(
            'title' => 'Gluten-Free',
            'description' => 'Gluten-free vegan bakes and adaptable recipes with all the comfort and sweetness intact.',
        ),
    );
}

function whimsicalhobbyist_page_map() {
    $pages = array(
        'index' => whimsicalhobbyist_page_url('home'),
        'about' => whimsicalhobbyist_page_url('about'),
        'popular-recipes' => whimsicalhobbyist_page_url('popular-recipes'),
        'order-my-ebook' => whimsicalhobbyist_page_url('order-my-ebook'),
        'sign-up' => whimsicalhobbyist_page_url('sign-up'),
        'recipe' => whimsicalhobbyist_page_url('recipe'),
    );

    foreach (array_keys(whimsicalhobbyist_category_pages()) as $slug) {
        $pages[$slug] = whimsicalhobbyist_page_url($slug);
    }

    return $pages;
}

function whimsicalhobbyist_enqueue_assets() {
    $theme_version = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'whimsicalhobbyist-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Quicksand:wght@400;500;600;700&family=Sacramento&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'whimsicalhobbyist-style',
        get_stylesheet_uri(),
        array('whimsicalhobbyist-fonts'),
        $theme_version
    );

    wp_enqueue_script(
        'whimsicalhobbyist-recipes',
        get_template_directory_uri() . '/assets/js/recipes.js',
        array(),
        $theme_version,
        true
    );

    wp_add_inline_script(
        'whimsicalhobbyist-recipes',
        'window.whimsicalTheme = ' . wp_json_encode(array(
            'homeUrl' => home_url('/'),
            'assetsUrl' => trailingslashit(get_template_directory_uri()) . 'assets/images/',
            'pages' => whimsicalhobbyist_page_map(),
        )) . ';',
        'before'
    );

    if (is_front_page()) {
        $script = 'index';
    } elseif (is_page_template('page-templates/recipe.php')) {
        $script = 'recipe';
    } else {
        $script = 'landing';
    }

    wp_enqueue_script(
        'whimsicalhobbyist-' . $script,
        get_template_directory_uri() . '/assets/js/' . $script . '.js',
        array('whimsicalhobbyist-recipes'),
        $theme_version,
        true
    );
}
add_action('wp_enqueue_scripts', 'whimsicalhobbyist_enqueue_assets');

function whimsicalhobbyist_favicon() {
    echo '<link rel="icon" type="image/png" href="' . esc_url(get_template_directory_uri() . '/assets/images/logo-mascot.png') . '" />' . "\n";
}
add_action('wp_head', 'whimsicalhobbyist_favicon');

function whimsicalhobbyist_create_page($title, $slug, $template = '') {
    $existing = get_page_by_path($slug);

    if ($existing) {
        if ($template) {
            update_post_meta($existing->ID, '_wp_page_template', $template);
        }

        return $existing->ID;
    }

    $page_id = wp_insert_post(array(
        'post_title' => $title,
        'post_name' => $slug,
        'post_type' => 'page',
        'post_status' => 'publish',
    ));

    if (!is_wp_error($page_id) && $template) {
        update_post_meta($page_id, '_wp_page_template', $template);
    }

    return $page_id;
}

function whimsicalhobbyist_activate_theme() {
    $home_id = whimsicalhobbyist_create_page('Home', 'home', 'front-page.php');
    whimsicalhobbyist_create_page('About', 'about', 'page-templates/about.php');
    whimsicalhobbyist_create_page('Popular Recipes', 'popular-recipes', 'page-templates/popular-recipes.php');
    whimsicalhobbyist_create_page('Order my Ebook', 'order-my-ebook', 'page-templates/order-my-ebook.php');
    whimsicalhobbyist_create_page('Sign up', 'sign-up', 'page-templates/sign-up.php');
    whimsicalhobbyist_create_page('Recipe', 'recipe', 'page-templates/recipe.php');

    foreach (whimsicalhobbyist_category_pages() as $slug => $page) {
        whimsicalhobbyist_create_page($page['title'], $slug, 'page-templates/category.php');
    }

    if (!is_wp_error($home_id)) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $home_id);
    }

    flush_rewrite_rules();
}
add_action('after_switch_theme', 'whimsicalhobbyist_activate_theme');

function whimsicalhobbyist_body_data_attributes() {
    if (is_page_template('page-templates/popular-recipes.php')) {
        echo ' data-page-type="popular"';
        return;
    }

    if (is_page_template('page-templates/category.php')) {
        $slug = get_post_field('post_name', get_queried_object_id());
        echo ' data-page-type="category" data-category="' . esc_attr($slug) . '"';
    }
}
