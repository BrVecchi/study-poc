import prisma from '../src/database/db.js';

async function main() {
  await prisma.wines.createMany({
    data: [
      {
        type: "White Sparkling",
        body: "sweet",
      },
      {
        type: "White Sparkling",
        body: "demi sec",
      },
      {
        type: "White Sparkling",
        body: "brut",
      },
      {
        type: "White Sparkling",
        body: "extra brut",
      },
      {
        type: "Sparkling Rose",
        body: "sweet",
      },
      {
        type: "Sparkling Rose",
        body: "demi sec",
      },
      {
        type: "Sparkling Rose",
        body: "brut",
      },
      {
        type: "Sparkling Rose",
        body: "extra brut",
      },
      {
        type: "White",
        body: "light",
      },
      {
        type: "White",
        body: "medium",
      },
      {
        type: "White",
        body: "heavy",
      },
      {
        type: "Rose",
        body: "light",
      },
      {
        type: "Rose",
        body: "medium",
      },
      {
        type: "Red",
        body: "light",
      },
      {
        type: "Red",
        body: "medium",
      },
      {
        type: "Red",
        body: "heavy",
      },
      {
        type: "Dessert",
        body: "liqueuer",
      },
      {
        type: "Dessert",
        body: "late harvest",
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
