const coffeeModel = require("../models/CoffeeModel");
const express = require("express");
// const app=express();
const router = express.Router();

router.get("/getCoffees", async (req, res) => {
  try {
    const coffees = await coffeeModel.find({});
    res.send(coffees);
  } catch (error) {
    console.log(err);
  }
});

router.post("/deleteCoffee", async (req, res) => {
  const { coffeeid } = req.body;
  try {
    await coffeeModel.findByIdAndDelete({ _id: coffeeid });

    res.send("Menü silme başarılı");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/getCoffeeById", async (req, res) => {
  const { coffeeid } = req.body;
  try {
    const coffee = await coffeeModel.findOne({ _id: coffeeid });

    res.send(coffee);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/editCoffee", async (req, res) => {
  const { editedCoffee } = req.body;

  try {
    const coffee = await coffeeModel.findOne({ _id: editedCoffee._id });

    coffee.title = editedCoffee.title;
    coffee.type = editedCoffee.type;
    coffee.subType = editedCoffee.subType;
    coffee.description = editedCoffee.description;
    coffee.picture = editedCoffee.picture;
    coffee.price = editedCoffee.price;
    coffee.sizes = editedCoffee.sizes;

    await coffee.save();

    res.send("Güncelleme İşlemi Başarılı!!!");
  } catch (error) {
    res.status(400).json("Güncelleme Başarısız!");
  }
});

router.post("/addCoffee", async (req, res) => {
  const { coffee } = req.body;

  try {
    const coffee1 = new coffeeModel({
      title: coffee.title,
      type: coffee.type,
      subType: coffee.subType,
      description: coffee.description,
      picture: coffee.picture,
      price: coffee.price,
      sizes: coffee.sizes,
    });
    await coffee1.save();

    res.send("Ekleme İşlemi Başarılı!!!");
  } catch (error) {
    res.status(400).json("Ekleme Başarısız!");
  }
});

module.exports = router;
