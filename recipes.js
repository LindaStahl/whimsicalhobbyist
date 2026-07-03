// Edit recipes here. Add, remove, or update these objects to change the site.
const recipes = [
  {
    slug: "vegan-carrot-cake-muffins",
    title: "Carrot Cake Cupcakes",
    category: "cupcakes",
    categoryLabel: "Cupcakes",
    badge: "New recipe",
    date: "2026-07-03",
    prepTime: "20 min",
    bakeTime: "20-25 min",
    servings: "6 large muffins or 8 medium muffins",
    excerpt:
      "Soft, moist, warmly spiced vegan carrot cake muffins topped with light vegan cream cheese frosting and chopped walnuts.",
    cardText:
      "I wanted to turn the classic carrot cake into something a little more everyday - a bakery-style muffin that is just as welcome on a slow Sunday morning as it is with an afternoon cup of tea. They are incredibly moist, warmly spiced, and finished with a cloud of fluffy vegan cream cheese frosting and a handful of crunchy walnuts.\n\nWhether you are baking them to share with loved ones or simply treating yourself after a long day, I hope these little cupcakes bring the same comfort, warmth, and joy they bring to my kitchen. Sometimes the sweetest memories are made over a bowl of batter, a dusting of flour, and something delicious fresh from the oven.",
    featuredText:
      "Warmly spiced carrot muffins with vegan cream cheese frosting and walnuts.",
    image: "Carrotcupcake.png",
    thumbnail: "Carrotcupcake.png",
    alt: "Vegan carrot cake muffins with cream cheese frosting and walnuts",
    ingredients: [
      "Cupcake batter",
      "182 g all-purpose flour",
      "120 g brown sugar",
      "4.4 g baking powder",
      "5.5 g baking soda",
      "1.7 g salt",
      "4.6 g ground cinnamon",
      "0.3 g ground nutmeg",
      "0.5 g ground cloves",
      "2.2 g vanilla extract",
      "175 g unsweetened soy milk",
      "103 g finely grated carrots",
      "38.8 g sunflower oil",
      "6.5 g apple cider vinegar",
      "Frosting",
      "100 g vegan cream cheese, such as Violife, Sheese, or Mommus",
      "150 g cold vegan whipping cream",
      "41 g granulated sugar",
      "5 g vanilla extract",
      "Decoration",
      "Chopped walnuts",
      "Optional: lemon zest, vegan white chocolate shavings, or a sprinkle of cinnamon"
    ],
    method: [
      "Prepare the batter: In a large bowl, whisk together the soy milk, vanilla extract, grated carrot, sunflower oil, and apple cider vinegar. Let the mixture rest for 5 minutes to create a vegan buttermilk.",
      "In a separate bowl, whisk together the flour, brown sugar, baking powder, baking soda, salt, cinnamon, nutmeg, and cloves until evenly combined.",
      "Pour the wet ingredients into the dry ingredients and gently fold together until just combined. Be careful not to overmix. A few small lumps are perfectly fine.",
      "Bake: Preheat your oven to 175C (350F). Line a muffin tin with paper liners.",
      "Divide the batter evenly, filling each liner about three-quarters full.",
      "Bake for 20-25 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs attached.",
      "Let the muffins cool completely in the pan before frosting.",
      "Make the frosting: In a mixing bowl, beat together the vegan cream cheese, sugar, and vanilla until smooth.",
      "Add the cold vegan whipping cream and whip until the frosting becomes thick, light, and holds its shape. Refrigerate until ready to use.",
      "Decorate: Transfer the frosting to a piping bag, or a zip-top bag with one corner snipped off.",
      "Pipe a generous swirl of frosting onto each cooled muffin and finish with chopped walnuts.",
      "For an extra special touch, garnish with lemon zest, vegan white chocolate shavings, or a light dusting of cinnamon."
    ],
    tip: "Finely grate the carrots for the softest, moistest crumb, and let the muffins cool completely before frosting.",
    extraSections: [
      {
        title: "Storage",
        items: [
          "Store the frosted muffins in an airtight container in the refrigerator for up to 5 days."
        ]
      },
      {
        title: "Freezing",
        items: [
          "Unfrosted muffins can be frozen in an airtight container for up to 3 months.",
          "Thaw overnight in the refrigerator or at room temperature before frosting and serving."
        ]
      },
      {
        title: "Baking tips",
        items: [
          "Finely grate the carrots for the softest, moistest crumb.",
          "Do not overmix the batter or the muffins may become dense.",
          "Make sure the vegan whipping cream is very cold before whipping for the fluffiest frosting.",
          "Allow the muffins to cool completely before decorating so the frosting does not melt."
        ]
      }
    ],
    featured: true,
    popular: true
  },
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
    slug: "vegan-chocolate-chip-banana-bread",
    title: "Vegan Chocolate Chip Banana Bread",
    category: "bread",
    categoryLabel: "Bread",
    badge: "Banana bread",
    date: "2026-07-03",
    prepTime: "15 min",
    bakeTime: "60-80 min",
    servings: "1 loaf, about 10 slices",
    excerpt:
      "Soft, incredibly moist vegan banana bread packed with rich dark chocolate and lightly spiced with cinnamon and ginger.",
    cardText:
      "Banana bread has a way of making a house feel like home.\n\nIt is the recipe that rescues forgotten bananas from the fruit bowl, filling the kitchen with the comforting aroma of cinnamon, warm vanilla, and melting chocolate. The kind of smell that lingers long after the oven has cooled and quietly invites everyone to gather for \"just one slice.\"\n\nThis version is inspired by those slow afternoons when life seemed a little simpler - a warm loaf on the counter, a cozy blanket, and a cup of tea shared with someone you love. Soft, rich, and dotted with pockets of dark chocolate, it is the kind of bake that feels like a warm hug with every bite.\n\nWhether you are baking it to create new memories or relive old ones, I hope this banana bread brings a little extra comfort to your kitchen. Sometimes the sweetest moments begin with a couple of overripe bananas and the simple joy of baking something from scratch.",
    featuredText:
      "Moist banana bread with dark chocolate, cinnamon, and ginger.",
    image: "Bananabread.png",
    thumbnail: "Bananabread.png",
    alt: "Vegan chocolate chip banana bread with pecans",
    ingredients: [
      "300 g all-purpose flour",
      "125 g granulated sugar",
      "65 g light brown sugar",
      "4 g baking powder",
      "2.5 g baking soda",
      "1.5 g ground cinnamon",
      "1 g ground ginger",
      "3 g salt",
      "240 g ripe bananas, mashed, about 2 medium bananas",
      "250 g plant-based milk, soy, oat, or almond",
      "230 g rapeseed oil, or canola oil",
      "15 g apple cider vinegar",
      "2.5 g vanilla extract",
      "150 g dark chocolate chips or chopped dark chocolate"
    ],
    method: [
      "Prepare the batter: Preheat your oven to 175C (350F). Grease and lightly flour a 1.5-litre (9x5-inch) loaf pan.",
      "In a large mixing bowl, whisk together the flour, granulated sugar, brown sugar, baking powder, baking soda, cinnamon, ginger, and salt until evenly combined.",
      "In a separate bowl, mash the bananas until mostly smooth. Add the plant milk, rapeseed oil, apple cider vinegar, and vanilla extract, then whisk until well combined.",
      "Pour the wet ingredients into the dry ingredients and gently whisk until no dry flour remains. Avoid overmixing to keep the loaf soft and tender.",
      "Fold in the dark chocolate chips.",
      "Bake: Pour the batter into the prepared loaf pan and smooth the top.",
      "Bake for 60-80 minutes, or until a skewer inserted into the center comes out clean or with just a few moist crumbs.",
      "If the top begins to brown too quickly, loosely cover the loaf with aluminum foil during the final 20 minutes of baking.",
      "Let the banana bread cool in the pan for about 15 minutes, then transfer it to a wire rack to cool completely before slicing."
    ],
    tip: "The riper the bananas, the sweeter and more flavorful your banana bread will be.",
    extraSections: [
      {
        title: "Storage",
        items: [
          "Store the banana bread in an airtight container at room temperature for 3 days, or in the refrigerator for up to 5 days."
        ]
      },
      {
        title: "Freezing",
        items: [
          "Wrap individual slices or the whole loaf tightly in plastic wrap and place in a freezer-safe container or bag.",
          "Freeze for up to 3 months. Thaw at room temperature or gently warm before serving."
        ]
      },
      {
        title: "Baking tips",
        items: [
          "The riper the bananas, the sweeter and more flavorful your banana bread will be.",
          "Do not overmix the batter. This keeps the loaf light and tender.",
          "For extra chocolate, sprinkle a handful of chocolate chips over the top before baking.",
          "Add chopped walnuts or pecans for a delicious crunchy variation.",
          "This banana bread tastes even better the next day, once the flavors have had time to develop."
        ]
      }
    ],
    featured: false,
    popular: true
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
