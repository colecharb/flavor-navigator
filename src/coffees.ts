import { Coffee } from "./components/FlavorMeter";


let coffees: Coffee[] = [
  {
    name: 'Galaxy Gesha',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 2,
      spice: 4,
      nut: 1,
      herb: 4,
      flower: 3,
      fruit: 3,
      caramel: 2,
    },
    description: 'Sweet, spicy floral aroma with a vast range of flavors including ginger, allspice, guava, coriander, tangerine zest, rosemary, hops, lavender, apple, sweet chili pepper, cannabis, carob, Nutella, eucalyptus, spruce, caramel and bubble gum. Like a ginger apple turnover with a long, lavish finish.'
  },
  {
    name: 'Pedregal Pink',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 1,
      spice: 1,
      nut: 0,
      herb: 3,
      flower: 3,
      fruit: 4,
      caramel: 3,
    },
    description: 'Plush yet refined tropical aroma with rich, sweet liquor boasting crisp, clean fruit flavors of pomelo, lychee, pineapple, pink lemonade, wild strawberry, fruit striped gum, and hard candy along with herbal tones of Earl Grey black tea and chocolate. Floral, tangy, vibrant and juicy.'
  },
  {
    name: '413',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'medium',
    flavorLevels: {
      chocolate: 3,
      spice: 2,
      nut: 3,
      herb: 0,
      flower: 1,
      fruit: 2,
      caramel: 4,
    },
    description: 'Maraschino cherry, molasses, strawberry, caramelized fig, blond tobacco, malt. Wherever you are, whatever method you choose, the (413) will not let you down.'
  },
  {
    name: 'Gato Negro',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'dark',
    flavorLevels: {
      chocolate: 4,
      spice: 2,
      nut: 3,
      herb: 0,
      flower: 0,
      fruit: 0,
      caramel: 3,
    },
    description: 'Rich and smooth with a dark chocolate finish. This is our go to coffee for dark roast lovers. It is super smooth and chocolaty. It is versatile enough for all brewing methods and it is great straight or with milk.'
  },
  {
    name: 'Doka',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 4,
      spice: 3,
      nut: 3,
      herb: 0,
      flower: 2,
      fruit: 3,
      caramel: 3,
    },
    description: 'Concentrated red cherry and lemon highlights with cocoa and cinnamon on the finish. Lively and dynamic.'
  },
  {
    name: 'Commonwealth',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'dark',
    flavorLevels: {
      chocolate: 4,
      spice: 3,
      nut: 4,
      herb: 2,
      flower: 1,
      fruit: 1,
      caramel: 3,
    },
    description: 'Sweet, powerful, roasted nut, spiced hot chocolate. A supremely versatile dark roast that is great in every brewing method including espresso preparation.'
  },
  {
    name: 'Malabar Super',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'medium',
    flavorLevels: {
      chocolate: 4,
      spice: 4,
      nut: 4,
      herb: 0,
      flower: 0,
      fruit: 0,
      caramel: 0,
    },
    description: 'A supremely smooth cup with heavy body, very low acidity, aromas of sandalwood and flavors of dark chocolate, nut and earth. We suggest preparing this coffee in the press pot, stovetop Moka pot or as an espresso.'
  },
  {
    name: 'Ketiara',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 3,
      spice: 4,
      nut: 2,
      herb: 3,
      flower: 0,
      fruit: 2,
      caramel: 2,
    },
    description: 'Syrupy body and low acidity with surprising mace and grape qualities, as well as pronounced cedar, chocolate and rich, earthy flavors.'
  },
  {
    name: 'Diamante Perez',
    price: '19.45',
    origin: 'Guatemala',
    region: 'Huehuetenango',
    locality: 'Agua Dulce',
    farm: 'El Diamante',
    producer: 'Patricia Perez Diaz',
    altitude: "6200'",
    variety: 'Red Bourbon & Caturra',
    process: 'Washed, sun dried',
    roast: 'light',
    flavorLevels: {
      chocolate: 4,
      spice: 2,
      nut: 1,
      herb: 1,
      flower: 3,
      fruit: 2,
      caramel: 2,
    },
    description: 'Perfume aroma with dark chocolate character, vibrant lemon and berry tones accentuated with subtle tropical flavors of pineapple and mango. A Huehuetenango powerhouse filled with fruit tones and Zinfandel structure.'
  },
  {
    name: 'Diamante Villatoro',
    price: '19.45',
    origin: 'Guatemala',
    region: 'Huehuetenango',
    locality: 'Hoja Blanca',
    farm: 'El Diamante',
    producer: 'Florencio Villatoro',
    altitude: "5742'",
    variety: 'Red Bourbon & Caturra',
    process: 'Washed, sun dried',
    roast: 'light',
    flavorLevels: {
      chocolate: 3,
      spice: 2,
      nut: 2,
      herb: 1,
      flower: 1,
      fruit: 1,
      caramel: 4,
    },
    description: 'Focused and refined with rich flavors of chewy mallow, milk chocolate, roasted nut, fresh cacao nib, plum and delicate underlying spice. A classic, smooth Huehuetenango profile.'
  },
  {
    name: 'Berkshire',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'medium',
    flavorLevels: {
      chocolate: 4,
      spice: 1,
      nut: 3,
      herb: 2,
      flower: 0,
      fruit: 1,
      caramel: 3,
    },
    description: 'Bold and luxurious, this coffee combines the dense body that is found in the finest Indonesian coffees with the up front liveliness of coffees from the Americas. It yields a uniquely complex cup with hints of stone fruit and a sweet, chocolaty smooth finish.'
  },
  {
    name: 'Trilogy',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 2,
      spice: 3,
      nut: 2,
      herb: 2,
      flower: 3,
      fruit: 3,
      caramel: 2,
    },
    description: 'Lively, complex and full bodied, this coffee is balanced perfection.'
  },
  {
    name: 'French',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'dark',
    flavorLevels: {
      chocolate: 4,
      spice: 2,
      nut: 1,
      herb: 0,
      flower: 0,
      fruit: 0,
      caramel: 3,
    },
    description: 'Smooth, rich and seductive with a dark chocolate finish.'
  },
  {
    name: 'Ceremony',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'dark',
    flavorLevels: {
      chocolate: 4,
      spice: 3,
      nut: 0,
      herb: 1,
      flower: 0,
      fruit: 3,
      caramel: 2,
    },
    description: 'Intense flavors of grilled lemon and Bakers chocolate with a liqueur-like, syrupy body. Packs an aggressive punch and finishes with deep, dark chocolate.'
  },
  {
    name: 'Black Honey',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 2,
      spice: 1,
      nut: 2,
      herb: 2,
      flower: 3,
      fruit: 4,
      caramel: 4,
    },
    description: 'Powerful caramel sweetness with juicy flavors of tangerine, dewberry, plum, pineapple, mango and rich bodied flavors of hazelnut and blondie. Drying on finish with green apple, distinct minerality and leather.'
  },
  {
    name: 'La Colmenita',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 3,
      spice: 1,
      nut: 1,
      herb: 0,
      flower: 3,
      fruit: 4,
      caramel: 2,
    },
    description: 'Splashy aroma with concentrated, syrupy body and sweet flavors of cotton candy, peach, orange, strawberry, chocolate and cream. Distinctly fruity while still holding commanding Guatemalan character.'
  },
  {
    name: 'Tolima',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 3,
      spice: 2,
      nut: 2,
      herb: 2,
      flower: 3,
      fruit: 3,
      caramel: 2,
    },
    description: 'Delicate fruity aroma, with flavors of almond, banana, pear, green grape, beach plum, cocoa powder and jasmine tea. High toned with a long, sweet finish.'
  },
  {
    name: 'Gold',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'medium',
    flavorLevels: {
      chocolate: 4,
      spice: 4,
      nut: 3,
      herb: 1,
      flower: 0,
      fruit: 1,
      caramel: 4,
    },
    description: 'Sweet caramel, dense chocolate, spice box and dried fruit with abundant crema and syrupy smooth body.'
  },
  {
    name: 'Italian',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'dark',
    flavorLevels: {
      chocolate: 4,
      spice: 0,
      nut: 3,
      herb: 2,
      flower: 0,
      fruit: 2,
      caramel: 3,
    },
    description: 'Powerful with a deep, dark chocolate flavors, stewed plum, black cherry.'
  },
  {
    name: 'Kalledevarapura',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'medium',
    flavorLevels: {
      chocolate: 3,
      spice: 3,
      nut: 3,
      herb: 0,
      flower: 0,
      fruit: 0,
      caramel: 4,
    },
    description: 'Sweet, delicate, buttery and creamy with filbert and milk chocolate flavors.'
  },
  {
    name: 'Allo Carbonic',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 0,
      spice: 3,
      nut: 0,
      herb: 2,
      flower: 4,
      fruit: 4,
      caramel: 2,
    },
    description: 'Intense floral aroma with juicy flavors of musk melon, strawberry jam and purple grape alongside tart flavors of lingonberry, pink grapefruit and honey crisp apple. Lyrical and elegant with creamy body.'
  },
  {
    name: 'Gera',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'light',
    flavorLevels: {
      chocolate: 3,
      spice: 3,
      nut: 2,
      herb: 3,
      flower: 3,
      fruit: 3,
      caramel: 2,
    },
    description: 'Creamy floral aroma with big peach flavor and vibrant, lemon citrus pushing into herbal lemongrass and black tea. Spicy finish sweetened with caramel and honey.'
  },
  {
    name: 'Supernatural',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'medium',
    flavorLevels: {
      chocolate: 3,
      spice: 3,
      nut: 1,
      herb: 3,
      flower: 2,
      fruit: 4,
      caramel: 3,
    },
    description: 'Ripe fruit and carob aroma, with deep flavors of blackberry, blueberry and juicy, fruit flavors supported by herbal tones of lavender, bergamot, rooibos, black tea, zinger and milk chocolate. Makes an incredible single origin espresso!'
  },
  {
    name: 'Vienna',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'medium',
    flavorLevels: {
      chocolate: 3,
      spice: 1,
      nut: 3,
      herb: 1,
      flower: 1,
      fruit: 2,
      caramel: 4,
    },
    description: 'Ripe cherry and chocolate tones with a velvety smooth finish.'
  },
  {
    name: 'Decaf Berkshire',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'medium',
    flavorLevels: {
      chocolate: 4,
      spice: 1,
      nut: 3,
      herb: 2,
      flower: 0,
      fruit: 1,
      caramel: 3,
    },
    description: 'Bold and luxurious, this coffee combines the dense body that is found in the finest Indonesian coffees with the up front liveliness of coffees from the Americas. It yields a uniquely complex cup with hints of fruit and a sweet chocolaty smooth finish.'
  },
  {
    name: 'Decaf French',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'dark',
    flavorLevels: {
      chocolate: 4,
      spice: 2,
      nut: 1,
      herb: 0,
      flower: 0,
      fruit: 0,
      caramel: 3,
    },
    description: 'Rich and smooth with a dark chocolate finish.'
  },
  {
    name: 'Decaf Gold',
    price: '[amount]',
    origin: '[origin]',
    region: '[region]',
    locality: '[locality]',
    farm: '[farm]',
    producer: '[producer]',
    altitude: "[altitude]'",
    variety: '[variety]',
    process: '[process]',
    roast: 'medium',
    flavorLevels: {
      chocolate: 4,
      spice: 4,
      nut: 3,
      herb: 1,
      flower: 0,
      fruit: 1,
      caramel: 3,
    },
    description: 'Sweet caramel, dense chocolate, spice box and dried fruit with abundant crema and syrupy smooth body. '
  },
]

export default coffees;