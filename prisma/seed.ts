import prisma from '../src/database/db.js';

async function main() {
  await prisma.labels.createMany({
    data: [
      {
        name: "White Sparkling sweet label"
      },
      {
        name: "White Sparkling demi sec label"
      },
      {
        name: "White Sparkling brut label"
      },
      {
        name: "White Sparkling extra brut label"
      },
      {
        name: "Sparkling Rose sweer label"
      },
      {
        name: "Sparkling Rose demi sec label"
      },
      {
        name: "Sparkling Rose brut label"
      },
      {
        name: "Sparkling Rose extra brut label"
      },
      {
        name: "White light label"
      },
      {
        name: "White medium label"
      },
      {
        name: "White heavy label"
      },
      {
        name: "Rose light label"
      },
      {
        name: "Rose medium label"
      },
      {
        name: "Red light label"
      },
      {
        name: "Red medium label"
      },
      {
        name: "Red heavy label"
      },
      {
        name: "Dessert liqueuer label"
      },
      {
        name: "Dessert late harvest label"
      }
    ]
  });

  await prisma.wines.createMany({
    data: [
      {
        type: "White Sparkling",
        body: "sweet",
        label_id: 1
      },
      {
        type: "White Sparkling",
        body: "demi sec",
        label_id: 2
      },
      {
        type: "White Sparkling",
        body: "brut",
        label_id: 3
      },
      {
        type: "White Sparkling",
        body: "extra brut",
        label_id: 4
      },
      {
        type: "Sparkling Rose",
        body: "sweet",
        label_id: 5
      },
      {
        type: "Sparkling Rose",
        body: "demi sec",
        label_id: 6
      },
      {
        type: "Sparkling Rose",
        body: "brut",
        label_id: 7
      },
      {
        type: "Sparkling Rose",
        body: "extra brut",
        label_id: 8
      },
      {
        type: "White",
        body: "light",
        label_id: 9
      },
      {
        type: "White",
        body: "medium",
        label_id: 10
      },
      {
        type: "White",
        body: "heavy",
        label_id: 11
      },
      {
        type: "Rose",
        body: "light",
        label_id: 12
      },
      {
        type: "Rose",
        body: "medium",
        label_id: 13
      },
      {
        type: "Red",
        body: "light",
        label_id: 14
      },
      {
        type: "Red",
        body: "medium",
        label_id: 15
      },
      {
        type: "Red",
        body: "heavy",
        label_id: 16
      },
      {
        type: "Dessert",
        body: "liqueuer",
        label_id: 17
      },
      {
        type: "Dessert",
        body: "late harvest",
        label_id: 18
      },
    ],
  });

  await prisma.dishes.createMany({
    data: [
      {
        name: "bolognese pasta",
        wine_id: 2,
      },
      {
        name: "cheeses pasta",
        wine_id: 16,
      },
      {
        name: "funghi pasta",
        wine_id: 16,
      },
      {
        name: "roast beef",
        wine_id: 16,
      },
      {
        name: "parmigiana steak",
        wine_id: 16,
      },
      {
        name: "parmigiana chicken",
        wine_id: 15,
      },
      {
        name: "fish moqueca",
        wine_id: 10,
      },
      {
        name: "ceviche",
        wine_id: 10,
      },
      {
        name: "paella",
        wine_id: 10,
      },
      {
        name: "chicken risotto",
        wine_id: 10,
      },
      {
        name: "slavic soup",
        wine_id: 15,
      },
      {
        name: "tomato bruschetta",
        wine_id: 10,
      },
      {
        name: "beef burger",
        wine_id: 16,
      },
      {
        name: "chicken burger",
        wine_id: 10,
      },
      {
        name: "pizza",
        wine_id: 16,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Data generate succesfully");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
