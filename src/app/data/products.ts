import { Product } from '@/types/product';

export const products: Product[] = [
  // ☕ CAFÉ CHAUD
  {
    id: 1,
    name: "Espresso",
    price: 1500,
    image: "/closeup-classic-fresh-espresso-served-dark-surface.jpg",
    description: "Un café court et intense, aux arômes riches et profonds, parfait pour un boost rapide.",
    isBestSeller: true,
    category: "hot"
  },
  {
    id: 2,
    name: "Double Espresso",
    price: 2000,
    image: "/close-up-aromatic-coffee-plate.jpg",
    description: "Deux doses d’espresso pour une expérience encore plus intense et corsée.",
    isBestSeller: true,
    category: "hot"
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 2500,
    image: "/cup-cappuccino-with-heart-design-foam-sprinkled-with-cocoa-powder-sits-white-saucer-dark-background.jpg",
    description: "Un mélange parfait d’espresso, de lait chaud et de mousse onctueuse légèrement chocolatée.",
    isBestSeller: false,
    category: "hot"
  },
  {
    id: 4,
    name: "Latte",
    price: 3000,
    image: "/cup-cappuccino-with-latte-art-cinnamon-sticks-rustic-surface.jpg",
    description: "Une boisson douce et crémeuse avec beaucoup de lait chaud et une touche d’espresso.",
    isBestSeller: false,
    category: "hot"
  },
  {
    id: 5,
    name: "Macchiato",
    price: 2500,
    image: "/11354821.png",
    description: "Un espresso relevé par une fine couche de mousse de lait pour une saveur équilibrée.",
    isBestSeller: false,
    category: "hot"
  },

  // 🧊 CAFÉ FROID
  {
    id: 6,
    name: "Iced Coffee",
    price: 2500,
    image: "/iced-coffee.jpg",
    description: "Un café rafraîchissant servi sur glace, parfait pour se désaltérer.",
    isBestSeller: true,
    category: "cold"
  },
  {
    id: 7,
    name: "Iced Latte",
    price: 3000,
    image: "/delicious-quality-coffee-cup.jpg",
    description: "Un latte froid doux et crémeux, idéal pour les amateurs de café léger.",
    isBestSeller: true,
    category: "cold"
  },
  {
    id: 8,
    name: "Cold Brew",
    price: 3500,
    image: "/person-pouring-hot-coffee-glass-with-ice.jpg",
    description: "Un café infusé à froid pendant plusieurs heures pour un goût doux et peu acide.",
    isBestSeller: false,
    category: "cold"
  },
  {
    id: 9,
    name: "Frappuccino",
    price: 4000,
    image: "/iced-chocolate.jpg",
    description: "Une boisson glacée mixée, crémeuse et gourmande, parfaite pour l’été.",
    isBestSeller: false,
    category: "cold"
  },

  // ⭐ SPÉCIALITÉS
  {
    id: 10,
    name: "Caramel Macchiato",
    price: 3500,
    image: "/cup-foamy-hot-coffee-biscuits-stone.jpg",
    description: "Un délicieux mélange d’espresso, de lait chaud et de caramel sucré.",
    isBestSeller: true,
    category: "special"
  },
  {
    id: 11,
    name: "Vanilla Latte",
    price: 3000,
    image: "/well-decorated-hot-coffee-cup-serve-wood-dish-small-violet-flower-biscuits.jpg",
    description: "Un latte doux parfumé à la vanille pour une expérience gourmande.",
    isBestSeller: false,
    category: "special"
  },
  {
    id: 12,
    name: "Mocha",
    price: 3000,
    image: "/coffee-cup-table.jpg",
    description: "Un mélange savoureux de café, chocolat et lait pour une boisson riche.",
    isBestSeller: false,
    category: "special"
  },

  // 🥛 SANS CAFÉ
  {
    id: 13,
    name: "Chocolat chaud",
    price: 2000,
    image: "/hot-chocolate-with-cinnamon-sticks.jpg",
    description: "Une boisson chaude au chocolat riche et réconfortante.",
    isBestSeller: false,
    category: "no-coffee"
  },
  {
    id: 14,
    name: "Chocolat chaud au lait",
    price: 2500,
    image: "/hot-chocolate-with-milk.jpg",
    description: "Un chocolat chaud encore plus crémeux grâce au lait.",
    isBestSeller: false,
    category: "no-coffee"
  },
  {
    id: 15,
    name: "Lait chaud",
    price: 1000,
    image: "/front-view-glass-milk-dark-drink-milk-dairy-creamery.jpg",
    description: "Un lait chaud simple et doux, parfait pour tous les âges.",
    isBestSeller: false,
    category: "no-coffee"
  },
  {
    id: 16,
    name: "Thé chaud",
    price: 1000,
    image: "/cup-tea-with-tea-strainer-inside-lemon-jam-saucer-side-view.jpg",
    description: "Une infusion chaude relaxante pour une pause détente.",
    isBestSeller: false,
    category: "no-coffee"
  },
];