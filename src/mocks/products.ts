import ModeloEspecial from "@images/modelo-especial.png";
import MillerLight from "@images/miller-lite.png";
import CoronaPremier from "@images/corona-premier.png";
import Budweiser from "@images/budweiser.png";
import Lagunitas from "@images/lagunitas.png";
import CoorsLight from "@images/coors-light.png";

const imgBaseUrl = "http://localhost:3002";
export const products: Array<IProduct> = [
  {
    sku: "83649",
    name: "Modelo Especial",
    description:
      "Modelo Especial is a rich, full-flavored Pilsner-style lager delivering a crisp, refreshing taste. With a well-balanced blend of sweetness and bitterness, it features a light hop character and is known for its quality and consistent taste.",
    origin: "Mexico",
    variations: {
      type: "size",
      items: [
        {
          sku: "8364901",
          skuParent: "83649",
          type: "Can",
          price: 2.0,
          stock: 123,
        },
        {
          sku: "8364902",
          skuParent: "83649",
          type: "Long Neck",
          price: 2.8,
          stock: 456,
        },
        {
          sku: "8364903",
          skuParent: "83649",
          type: "Half Beer",
          price: 120.0,
          stock: 78,
        },
      ],
    },
    image: `${imgBaseUrl}${ModeloEspecial.src}`,
    rate: 4.3,
    mainVariation: "8364902",
  },
  {
    sku: "92715",
    name: "Miller Lite",
    description:
      "Miller Lite is an American light pilsner beer with a smooth, light, and refreshing taste, designed for drinkability and sessionability.",
    origin: "USA",
    variations: {
      type: "size",
      items: [
        {
          sku: "9271501",
          skuParent: "92715",
          type: "Can",
          price: 1.5,
          stock: 200,
        },
        {
          sku: "9271502",
          skuParent: "92715",
          type: "Long Neck",
          price: 2.1,
          stock: 300,
        },
        {
          sku: "9271503",
          skuParent: "92715",
          type: "Half Beer",
          price: 90.0,
          stock: 50,
        },
      ],
    },
    image: `${imgBaseUrl}${MillerLight.src}`,
    rate: 4.0,
    mainVariation: "9271501",
  },
  {
    sku: "35182",
    name: "Corona Premier",
    description:
      "Corona Premier is a smooth, light, and crisp beer with a perfectly balanced flavor that contains only 90 calories and 2.6g of carbs per serving.",
    origin: "Mexico",
    variations: {
      type: "size",
      items: [
        {
          sku: "3518201",
          skuParent: "35182",
          type: "Can",
          price: 2.2,
          stock: 150,
        },
        {
          sku: "3518202",
          skuParent: "35182",
          type: "Long Neck",
          price: 3.08,
          stock: 250,
        },
        {
          sku: "3518203",
          skuParent: "35182",
          type: "Half Beer",
          price: 132.0,
          stock: 60,
        },
      ],
    },
    image: `${imgBaseUrl}${CoronaPremier.src}`,
    rate: 4.7,
    mainVariation: "3518202",
  },
  {
    sku: "84261",
    name: "Budweiser",
    description:
      "Budweiser is an American-style pale lager produced by Anheuser-Busch, offering a crisp and clean taste with a balance of sweetness and bitterness.",
    origin: "USA",
    variations: {
      type: "size",
      items: [
        {
          sku: "8426101",
          skuParent: "84261",
          type: "Can",
          price: 1.75,
          stock: 220,
        },
        {
          sku: "8426102",
          skuParent: "84261",
          type: "Long Neck",
          price: 2.45,
          stock: 320,
        },
        {
          sku: "8426103",
          skuParent: "84261",
          type: "Half Beer",
          price: 105.0,
          stock: 70,
        },
      ],
    },
    image: `${imgBaseUrl}${Budweiser.src}`,
    rate: 3.8,
    mainVariation: "8426102",
  },
  {
    sku: "47391",
    name: "Lagunitas",
    description:
      "Lagunitas is known for its wide range of craft beers, particularly its IPAs, offering bold flavors with a strong hop presence and unique character.",
    origin: "USA",
    variations: {
      type: "size",
      items: [
        {
          sku: "4739101",
          skuParent: "47391",
          type: "Can",
          price: 2.5,
          stock: 180,
        },
        {
          sku: "4739102",
          skuParent: "47391",
          type: "Long Neck",
          price: 3.5,
          stock: 280,
        },
        {
          sku: "4739103",
          skuParent: "47391",
          type: "Half Beer",
          price: 150.0,
          stock: 90,
        },
      ],
    },
    image: `${imgBaseUrl}${Lagunitas.src}`,
    rate: 4.5,
    mainVariation: "4739102",
  },
  {
    sku: "61547",
    name: "Coors Light",
    description:
      "Coors Light is a light beer with a crisp and clean taste, known for its refreshing qualities and perfect for social gatherings.",
    origin: "USA",
    variations: {
      type: "size",
      items: [
        {
          sku: "6154701",
          skuParent: "61547",
          type: "Can",
          price: 1.6,
          stock: 190,
        },
        {
          sku: "6154702",
          skuParent: "61547",
          type: "Long Neck",
          price: 2.24,
          stock: 290,
        },
        {
          sku: "6154703",
          skuParent: "61547",
          type: "Half Beer",
          price: 96.0,
          stock: 80,
        },
      ],
    },
    image: `${imgBaseUrl}${CoorsLight.src}`,
    rate: 3.9,
    mainVariation: "6154702",
  },
];

interface IProduct {
  sku: string;
  name: string;
  description: string;
  origin: string;
  variations: {
    type: string;
    items: IVariation[];
  };
  image: string;
  rate: number;
  mainVariation: string;
}

interface IVariation {
  sku: string;
  skuParent: string;
  type: string;
  price: number;
  stock: number;
}
