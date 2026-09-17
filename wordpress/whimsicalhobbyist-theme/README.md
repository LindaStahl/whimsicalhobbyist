# The Little Baking Troll WordPress Theme

This is a custom WordPress theme converted from the original static The Little Baking Troll site.

## What It Preserves

- Same header, footer, homepage, recipe carousel, recipe cards, category pages, popular recipes page, about page, ebook page, signup page, and recipe detail page.
- Same `styles.css` design and bundled image assets.
- Same JavaScript recipe data from `recipes.js`.

## Install

1. In WordPress admin, go to Appearance > Themes > Add New > Upload Theme.
2. Upload `little-baking-troll-theme.zip`.
3. Activate the theme.
4. The theme creates the required pages automatically: Home, About, Cakes, Cupcakes, Cookies, Bars, Creams, No Bake, Gluten-Free, Popular Recipes, Order my Ebook, Sign up, and Recipe.
5. Go to Settings > Permalinks and click Save Changes once.

## Notes

- Recipes are currently bundled in `assets/js/recipes.js`, matching the static site exactly.
- To edit recipes after migration, update `assets/js/recipes.js` inside the theme and re-upload the theme, or later convert the recipe data into WordPress custom posts.
- The signup form keeps the same frontend behavior as the static site. Connect it to a mailing list plugin when you are ready to collect emails.
