export const pricingPlans = [
  {
    id: "1",
    name: "Essential Package",
    price: { monthly: 29.99, yearly: 299.9 },
    features: [
      "Weekly delivery of fresh milk (2L)",
      "Dozen farm-fresh eggs monthly",
      "Free delivery in service areas",
      "Flexible pause options",
    ],
  },
  {
    id: "2",
    name: "Family Package",
    price: { monthly: 49.99, yearly: 499.9 },
    features: [
      "Weekly delivery of fresh milk (4L)",
      "Yogurt and butter weekly",
      "Two dozen eggs bi-weekly",
      "One bottle of oil monthly",
      "Priority delivery scheduling",
      "10% discount on additional purchases",
    ],
    isPopular: true,
  },
  {
    id: "3",
    name: "Premium Package",
    price: { monthly: 79.99, yearly: 799.9 },
    features: [
      "Daily fresh milk delivery",
      "Complete dairy selection weekly",
      "Monthly selection of cooking oils",
      "Country chicken delivery monthly",
      "Premium customer support",
      "15% discount on additional purchases",
      "Exclusive seasonal products",
    ],
  },
];
