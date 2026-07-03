// Edit recipes here. Add, remove, or update these objects to change the site.
const recipes = [
  {
    slug: "confetti-cloud-cake",
    title: "Confetti cloud cake",
    category: "cakes",
    categoryLabel: "Cakes",
    badge: "TikTok favorite",
    date: "2026-07-03",
    prepTime: "35 min",
    bakeTime: "25 min",
    servings: "10 slices",
    excerpt:
      "A soft vanilla layer cake with rainbow sprinkles folded into the batter, covered in whipped pastel frosting and finished with a playful sprinkle shower.",
    featuredText: "Vanilla layers, pastel sprinkles, and soft whipped frosting.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80",
    alt: "Pastel layered cake with sprinkles",
    ingredients: [
      "2 1/2 cups plain flour",
      "2 teaspoons baking powder",
      "1 cup caster sugar",
      "3 large eggs",
      "1 cup milk",
      "1/2 cup soft butter",
      "1 tablespoon vanilla extract",
      "1/2 cup pastel sprinkles",
      "Whipped vanilla frosting"
    ],
    method: [
      "Heat the oven to 175C and line two round cake tins.",
      "Whisk flour, baking powder, and sugar in a large bowl.",
      "Beat in eggs, milk, butter, and vanilla until smooth and fluffy.",
      "Fold through the sprinkles gently so the colors stay bright.",
      "Bake until golden and a tester comes out clean, then cool completely.",
      "Layer with whipped frosting and finish with extra sprinkles."
    ],
    tip: "Fold sprinkles in at the very end to keep the batter soft and colorful.",
    featured: true,
    popular: false
  },
  {
    slug: "blueberry-cream-cupcakes",
    title: "Blueberry cream cupcakes",
    category: "cupcakes",
    categoryLabel: "Cupcakes",
    badge: "Cupcakes",
    date: "2026-07-01",
    prepTime: "25 min",
    bakeTime: "18 min",
    servings: "12 cupcakes",
    excerpt:
      "Fluffy little cakes crowned with pale blue berry buttercream swirls and a soft vanilla crumb.",
    featuredText: "Fluffy cakes crowned with pale blue berry buttercream.",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=400&q=80",
    alt: "Cupcakes with pastel frosting",
    ingredients: [
      "1 1/2 cups plain flour",
      "1 1/2 teaspoons baking powder",
      "3/4 cup caster sugar",
      "2 eggs",
      "1/2 cup milk",
      "1/2 cup melted butter",
      "1 teaspoon vanilla extract",
      "1/2 cup blueberry jam",
      "Blueberry buttercream"
    ],
    method: [
      "Heat the oven to 175C and line a cupcake tray.",
      "Mix flour, baking powder, and sugar together.",
      "Whisk in eggs, milk, melted butter, and vanilla.",
      "Divide between cases and bake until lightly golden.",
      "Cool, fill with a little blueberry jam, and pipe with buttercream."
    ],
    tip: "Use a tiny drop of blue food coloring for a soft pastel frosting shade.",
    featured: true,
    popular: true
  },
  {
    slug: "brown-butter-bakery-cookies",
    title: "Brown butter bakery cookies",
    category: "cookies",
    categoryLabel: "Cookies",
    badge: "Cookies",
    date: "2026-06-29",
    prepTime: "25 min",
    bakeTime: "12 min",
    servings: "14 cookies",
    excerpt:
      "Deeply golden, chewy cookies with crisp edges, a nutty brown butter base, and pools of chocolate tucked into every bite.",
    featuredText: "Chewy centers, crisp edges, and dreamy chocolate pools.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
    alt: "Fresh chocolate chip cookies",
    ingredients: [
      "3/4 cup butter",
      "1 cup brown sugar",
      "1/4 cup caster sugar",
      "1 egg",
      "1 teaspoon vanilla extract",
      "1 3/4 cups plain flour",
      "1/2 teaspoon baking soda",
      "1 cup chopped chocolate",
      "Flaky salt"
    ],
    method: [
      "Brown the butter until nutty and golden, then cool for 10 minutes.",
      "Mix butter with both sugars, then add egg and vanilla.",
      "Fold in flour, baking soda, and chopped chocolate.",
      "Chill the dough for at least 30 minutes.",
      "Bake scoops of dough at 180C until the edges are set.",
      "Finish warm cookies with flaky salt."
    ],
    tip: "Let the browned butter cool before adding the egg so the dough stays thick.",
    featured: true,
    popular: false
  },
  {
    slug: "honey-milk-bread",
    title: "Honey milk bread",
    category: "bread",
    categoryLabel: "Bread",
    badge: "Bread",
    date: "2026-06-24",
    prepTime: "30 min",
    bakeTime: "35 min",
    servings: "1 loaf",
    excerpt:
      "A golden, soft loaf with a plush crumb and gentle honey flavor, perfect for toast, jam, or thick slices still warm from the oven.",
    featuredText: "Soft golden bread with honey, milk, and a plush crumb.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    alt: "Fresh bread loaves on a table",
    ingredients: [
      "3 cups bread flour",
      "2 teaspoons instant yeast",
      "1 teaspoon salt",
      "1 cup warm milk",
      "3 tablespoons honey",
      "3 tablespoons soft butter"
    ],
    method: [
      "Mix flour, yeast, and salt in a large bowl.",
      "Add warm milk, honey, and butter, then knead until smooth.",
      "Cover and let rise until doubled.",
      "Shape into a loaf and place in a tin.",
      "Proof again, then bake at 180C until golden."
    ],
    tip: "The dough should feel soft and slightly tacky, not dry.",
    featured: false,
    popular: false
  },
  {
    slug: "strawberry-cream-dessert-cups",
    title: "Strawberry cream dessert cups",
    category: "no-bake",
    categoryLabel: "No bake",
    badge: "No bake",
    date: "2026-06-18",
    prepTime: "20 min",
    bakeTime: "No bake",
    servings: "6 cups",
    excerpt:
      "Buttery biscuit crumbs, whipped vanilla cream, and glossy strawberry layers stacked into tiny pastel dessert cups.",
    featuredText: "Creamy berry dessert cups with buttery biscuit layers.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80",
    alt: "Berry dessert cups",
    ingredients: [
      "1 1/2 cups crushed biscuits",
      "3 tablespoons melted butter",
      "1 cup whipped cream",
      "1/2 cup cream cheese",
      "2 tablespoons icing sugar",
      "1 cup chopped strawberries",
      "1/2 cup strawberry jam"
    ],
    method: [
      "Mix biscuit crumbs with melted butter.",
      "Whip cream cheese, whipped cream, and icing sugar until smooth.",
      "Stir strawberries with jam for a glossy fruit layer.",
      "Layer crumbs, cream, and strawberries in small cups.",
      "Chill before serving."
    ],
    tip: "Use clear cups so the pastel layers show.",
    featured: false,
    popular: false
  },
  {
    slug: "lemon-crumb-muffins",
    title: "Lemon crumb muffins",
    category: "cakes",
    categoryLabel: "Cakes",
    badge: "Cakes",
    date: "2026-06-14",
    prepTime: "20 min",
    bakeTime: "22 min",
    servings: "10 muffins",
    excerpt:
      "Sunny lemon muffins with a tender crumb, buttery topping, and a glossy citrus drizzle.",
    featuredText: "Sunny lemon muffins with a buttery crumb topping.",
    image:
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=400&q=80",
    alt: "Lemon cake",
    ingredients: [
      "2 cups plain flour",
      "2 teaspoons baking powder",
      "3/4 cup caster sugar",
      "2 eggs",
      "1/2 cup yogurt",
      "1/2 cup oil",
      "Zest and juice of 2 lemons",
      "Crumb topping"
    ],
    method: [
      "Heat the oven to 180C and line a muffin tin.",
      "Whisk dry ingredients in one bowl and wet ingredients in another.",
      "Fold together gently and spoon into cases.",
      "Sprinkle with crumb topping.",
      "Bake until golden and drizzle with lemon glaze."
    ],
    tip: "Stop mixing as soon as the flour disappears for softer muffins.",
    featured: false,
    popular: true
  },
  {
    slug: "pastel-buttercream-guide",
    title: "Pastel buttercream guide",
    category: "basics",
    categoryLabel: "Basics",
    badge: "Basics",
    date: "2026-06-10",
    prepTime: "15 min",
    bakeTime: "No bake",
    servings: "Enough for 12 cupcakes",
    excerpt:
      "A simple guide to soft pastel buttercream colors, smooth texture, and pretty swirls for cakes and cupcakes.",
    featuredText: "Soft pastel colors, smooth texture, and pretty swirls.",
    image:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=400&q=80",
    alt: "Pink macarons",
    ingredients: [
      "1 cup soft butter",
      "3 cups icing sugar",
      "2 tablespoons milk",
      "1 teaspoon vanilla extract",
      "Gel food coloring"
    ],
    method: [
      "Beat butter until pale and fluffy.",
      "Add icing sugar gradually, then mix in milk and vanilla.",
      "Divide into bowls and tint with tiny amounts of gel color.",
      "Pipe onto cooled cakes or cupcakes."
    ],
    tip: "Use a toothpick to add color so pastels stay soft and delicate.",
    featured: false,
    popular: true
  }
];
