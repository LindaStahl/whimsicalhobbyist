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
    slug: "vegan-fudgy-walnut-brownies",
    title: "Vegan Fudgy Walnut Brownies",
    category: "cookies",
    categoryLabel: "Cookies",
    badge: "Brownies",
    date: "2026-07-03",
    prepTime: "20 min",
    bakeTime: "34-37 min",
    servings: "16 brownies",
    excerpt:
      "Rich, intensely chocolatey vegan brownies with a shiny crackly top, whipped aquafaba, dark chocolate, and crunchy walnuts.",
    cardText:
      "There is something wonderfully nostalgic about brownies cooling on the kitchen counter.\n\nMaybe it is the anticipation of waiting for them to set, knowing someone will sneak a corner piece before they have fully cooled. Or the way the rich aroma of chocolate fills every room, making the whole house feel a little warmer and a little cozier.\n\nThese brownies are inspired by those simple moments - the ones where sticky fingers, shared laughs, and a glass of cold milk, or your favorite plant-based alternative, made an ordinary afternoon feel special. With their crackly top, gooey center, pockets of melted chocolate, and crunchy walnuts, they are everything a brownie should be.\n\nWhether you are baking for friends, family, or simply because you are craving chocolate, I hope these brownies become one of those recipes you will come back to again and again - the kind that creates memories as sweet as every bite.",
    featuredText:
      "Fudgy vegan brownies with dark chocolate, aquafaba, and walnuts.",
    image: "Brownie_with_walnuts.png",
    thumbnail: "Brownie_with_walnuts.png",
    alt: "Vegan fudgy walnut brownies with cream topping",
    ingredients: [
      "180 g aquafaba, liquid from canned chickpeas",
      "435 g dark brown sugar",
      "255 g dark chocolate, 65-75%, roughly chopped",
      "168 g vegan butter or margarine, cubed",
      "270 g all-purpose flour",
      "63 g unsweetened cocoa powder",
      "5 g salt",
      "22.5 g vanilla extract",
      "10 g instant espresso powder",
      "128 g dark chocolate, chopped",
      "120 g chopped walnuts"
    ],
    method: [
      "Prepare the pan: Preheat your oven to 176C (350F). Line a 25 x 25 cm (10 x 10-inch) square metal baking pan with parchment paper, leaving an overhang on two sides.",
      "Prepare the dry ingredients: Sift together the flour and cocoa powder into a medium bowl. This helps prevent lumps and creates a smoother batter.",
      "Whip the aquafaba: In a large mixing bowl, combine the aquafaba and brown sugar.",
      "Using an electric hand mixer or stand mixer, beat on high speed for 2 1/2-3 minutes, until the mixture becomes thick, glossy, and forms ribbons when lifted.",
      "Add the vanilla extract, salt, and instant espresso powder. Fold gently with a silicone spatula until fully combined.",
      "Melt the chocolate: Place the chopped dark chocolate and vegan butter in a microwave-safe bowl.",
      "Microwave in 30-second intervals, stirring between each interval, until completely melted and smooth.",
      "Make the batter: Pour the warm chocolate mixture into the whipped aquafaba and gently fold together.",
      "Add the sifted flour and cocoa mixture, folding just until no dry streaks remain. Avoid overmixing.",
      "Fold in the chopped dark chocolate and chopped walnuts.",
      "Transfer the batter to the prepared baking pan and spread it evenly.",
      "Bake for 34-37 minutes.",
      "The brownies are ready when a toothpick inserted into the center comes out with a few moist crumbs or a little melted chocolate, but not wet batter.",
      "If the toothpick comes out with liquid batter, continue baking in 5-minute intervals, checking frequently.",
      "Cool and slice: Let the brownies cool in the pan for 30 minutes.",
      "Lift them out using the parchment paper and transfer them to a wire rack.",
      "Allow them to cool for another 20-30 minutes before slicing. For the cleanest cuts, chill the brownies for an hour before slicing with a warm knife."
    ],
    tip: "Whipping the aquafaba well is the secret to achieving that beautiful shiny, crackly brownie top.",
    extraSections: [
      {
        title: "Cooling time",
        items: ["Cool for about 1 hour before slicing for the neatest pieces."]
      },
      {
        title: "Storage",
        items: [
          "Store the brownies in an airtight container at room temperature for 4 days, or refrigerate for up to 1 week."
        ]
      },
      {
        title: "Freezing",
        items: [
          "Wrap individual brownies or the entire slab tightly and freeze in an airtight container for up to 3 months.",
          "Thaw at room temperature before serving."
        ]
      },
      {
        title: "Baking tips",
        items: [
          "Whipping the aquafaba well is the secret to achieving that beautiful shiny, crackly brownie top.",
          "Use good-quality dark chocolate with 65-75% cocoa for the richest flavor.",
          "Do not overbake. The brownies will continue to set as they cool.",
          "For extra fudgy brownies, let them rest overnight before slicing.",
          "Toast the walnuts for a few minutes before adding them to the batter to deepen their flavor."
        ]
      }
    ],
    featured: false,
    popular: true
  },
  {
    slug: "vegan-lemon-poppy-seed-bundt-cake",
    title: "Vegan Lemon Poppy Seed Bundt Cake",
    category: "cakes",
    categoryLabel: "Cakes",
    badge: "Cakes",
    date: "2026-07-03",
    prepTime: "15 min",
    bakeTime: "35-40 min",
    servings: "10-12 slices",
    excerpt:
      "Bright, soft, and wonderfully moist vegan lemon poppy seed Bundt cake with fresh citrus flavor and a sweet lemon glaze.",
    cardText:
      "Some cakes taste like sunshine, and this is one of them.\n\nThe bright scent of freshly grated lemons, the tiny poppy seeds scattered through every slice, and the sweet drizzle of lemon glaze bring back memories of slow afternoons, open windows, and warm kitchens filled with laughter. It is the kind of cake that sits proudly in the center of the table, inviting everyone to cut \"just one more slice.\"\n\nSimple, fresh, and wonderfully comforting, this lemon Bundt cake celebrates the little joys of homemade baking. Whether you are sharing it over coffee with friends or enjoying a quiet moment to yourself, I hope it fills your home with the same warmth, happiness, and sunshine that inspired this recipe.",
    featuredText:
      "Fresh lemon, delicate poppy seeds, and a sweet citrus glaze.",
    image: "Lemonbundt.png",
    thumbnail: "Lemonbundt.png",
    alt: "Vegan lemon poppy seed Bundt cake with lemon glaze",
    ingredients: [
      "For the Cake",
      "88 g plant-based yogurt",
      "275 g unsweetened soy milk",
      "122 g sunflower oil",
      "50 g freshly squeezed lemon juice",
      "Zest of 1 large lemon",
      "385 g all-purpose flour",
      "5 g baking soda",
      "3 g baking powder",
      "220 g granulated sugar",
      "5 g poppy seeds",
      "For the Lemon Glaze",
      "180 g powdered sugar",
      "45 g freshly squeezed lemon juice"
    ],
    method: [
      "Prepare the batter: Preheat your oven to 180C (355F). Grease and lightly flour a Bundt pan to prevent sticking.",
      "In a large mixing bowl, whisk together the soy milk, plant-based yogurt, sunflower oil, lemon juice, and lemon zest until smooth.",
      "In a separate bowl, whisk together the flour, sugar, baking soda, baking powder, and poppy seeds.",
      "Pour the wet ingredients into the dry ingredients and gently whisk until just combined. Do not overmix. A few small lumps are perfectly fine.",
      "Bake: Pour the batter into the prepared Bundt pan and smooth the top.",
      "Bake for 35-40 minutes, or until a skewer inserted into the center comes out clean or with a few moist crumbs.",
      "Allow the cake to cool in the pan for about 15 minutes before carefully turning it out onto a wire rack.",
      "Let the cake cool completely before glazing.",
      "Make the lemon glaze: In a small bowl, whisk together the powdered sugar and fresh lemon juice until smooth.",
      "If the glaze is too thick, add a teaspoon of lemon juice at a time. If it is too thin, whisk in a little more powdered sugar.",
      "Slowly drizzle the glaze over the completely cooled Bundt cake, allowing it to run naturally down the sides.",
      "Let the glaze set for about 15 minutes before serving."
    ],
    tip: "Use fresh lemon juice and zest for the brightest, most vibrant flavor, and let the cake cool completely before glazing.",
    extraSections: [
      {
        title: "Storage",
        items: [
          "Store the cake in an airtight container at room temperature for 3 days, or refrigerate for up to 5 days."
        ]
      },
      {
        title: "Freezing",
        items: [
          "Freeze the cake without the glaze for up to 3 months.",
          "Wrap it tightly in plastic wrap and place it in a freezer-safe container.",
          "Thaw overnight in the refrigerator and glaze before serving."
        ]
      },
      {
        title: "Baking tips",
        items: [
          "Use fresh lemon juice and zest for the brightest, most vibrant flavor.",
          "Rub the lemon zest into the sugar before mixing for an even more aromatic cake.",
          "Avoid overmixing the batter to keep the crumb light and tender.",
          "Let the cake cool completely before glazing to prevent the icing from melting.",
          "For an extra elegant finish, garnish with thin lemon slices, additional lemon zest, or edible flowers."
        ]
      }
    ],
    featured: false,
    popular: true
  },
  {
    slug: "homemade-vegan-nutella",
    title: "Homemade Vegan Nutella",
    category: "basics",
    categoryLabel: "Basics",
    badge: "Basics",
    date: "2026-07-03",
    prepTime: "15 min",
    bakeTime: "10 min chill",
    servings: "Approximately 350 g",
    excerpt:
      "Creamy, rich, and irresistibly chocolatey vegan Nutella made with roasted hazelnuts, cashews, cocoa, and vegan milk chocolate.",
    cardText:
      "There was always something magical about opening a fresh jar of chocolate hazelnut spread.\n\nWhether it was spread generously on warm toast before school or secretly enjoyed by the spoonful when no one was looking, it somehow made ordinary moments feel a little more special. That rich chocolate flavor, the roasted hazelnuts, and the excitement of scraping the last bit from the jar are memories many of us share.\n\nThis homemade version brings all of that nostalgia back, but with simple ingredients and plenty of love. Smooth, creamy, and deeply chocolatey, it is the kind of recipe you will find yourself making again and again, not just because it is delicious, but because every spoonful feels like a little taste of childhood.",
    featuredText:
      "Smooth chocolate-hazelnut spread for toast, pancakes, oatmeal, and spoonfuls.",
    image: "Nutella.png",
    thumbnail: "Nutella.png",
    alt: "Homemade vegan Nutella chocolate hazelnut spread",
    ingredients: [
      "162 g roasted, peeled hazelnuts",
      "41 g roasted cashews",
      "18 g unsweetened cocoa powder",
      "40 g vegan milk chocolate, chopped, such as Vantastic Foods",
      "26 g melted coconut oil",
      "58 g powdered sugar",
      "1 g salt"
    ],
    method: [
      "Blend the nuts: Add the roasted hazelnuts, roasted cashews, and melted coconut oil to a high-powered food processor.",
      "Blend until the mixture becomes completely smooth and creamy. Depending on your food processor, this may take 5-10 minutes. Stop occasionally to scrape down the sides of the bowl.",
      "Add the chocolate: Add the cocoa powder, chopped vegan milk chocolate, powdered sugar, and salt.",
      "Blend again until everything is fully incorporated and silky smooth, scraping down the bowl as needed.",
      "Chill: Transfer the spread to a clean jar or airtight container.",
      "Refrigerate for 10 minutes to allow it to thicken slightly.",
      "Now comes the best part: grab a spoon and enjoy."
    ],
    tip: "For an even creamier spread, blend a little longer so the natural oils from the nuts continue to release.",
    extraSections: [
      {
        title: "Serving suggestions",
        items: [
          "Toast or fresh bread",
          "Pancakes and waffles",
          "Crepes",
          "Croissants",
          "Banana slices",
          "Fresh strawberries",
          "Oatmeal",
          "Ice cream",
          "Brownies and cupcakes",
          "Straight from the jar"
        ]
      },
      {
        title: "Storage",
        items: [
          "Store in an airtight container in the refrigerator for up to 1 week."
        ]
      },
      {
        title: "Freezing",
        items: [
          "Freeze in a sealed airtight container for up to 3 months.",
          "Thaw overnight in the refrigerator and stir well before serving."
        ]
      },
      {
        title: "Baking tips",
        items: [
          "Roasting the hazelnuts brings out their rich, nutty flavor and makes the spread extra aromatic.",
          "If your hazelnuts still have skins, rub them in a clean kitchen towel after roasting to remove most of the skins.",
          "A high-powered food processor works best for achieving an ultra-smooth texture.",
          "For an even creamier spread, blend a little longer. The natural oils from the nuts will continue to release.",
          "Store at room temperature for about 15 minutes before serving if you prefer a softer, more spreadable consistency."
        ]
      }
    ],
    featured: false,
    popular: true
  }
];
