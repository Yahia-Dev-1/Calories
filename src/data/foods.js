import riceImg from '/img/rice.jpg';
import meatImg from '/img/meat.jpg';
import chickenImg from '/img/Chicken.jpg';
import LiverImg from '/img/Liver.jpg';
import breadImg from '/img/Bread.jpg';
import BaguetteImg from '/img/Baguette.jpg';
import BoiledEggImg from '/img/BoiledEgg.jpg';
import FriedEggImg from '/img/FriedEgg.jpg';
import TomatoImg from '/img/Tomato.jpg';
import CucumberImg from '/img/Cucumber.jpg';
import LettuceImg from '/img/Lettuce.jpg';
import PastaImg from '/img/Pasta.jpg';
import TurkeyCheeseImg from '/img/TurkeyCheese.jpg';
import CheddarCheeseImg from '/img/CheddarCheese.jpg';
import MozzarellaCheeseImg from '/img/MozzarellaCheese.jpg';
import OilImg from '/img/Oil.jpg';
import GheeImg from '/img/Ghee.jpg';
import BeansImg from '/img/Beans.jpg';
import TahiniImg from '/img/Tahini.jpg';
import ChocolateImg from '/img/Chocolate.jpg';
import DarkChocolateImg from '/img/DarkChocolate.jpg';
import MincedMeatBeefImg from '/img/MincedMeatBeef.jpg';


const foods = [
  {
    id: 1,
    name: "Baladi Bread ",
    image: breadImg,
    caloriesPer100g: 270, // 162 kcal / 60g * 100
    protein: 6.7, // 4g / 60g * 100
    fat: 2.5, // 1.5g / 60g * 100
    carbs: 53.3, // 32g / 60g * 100
  },
  {
    id: 2,
    name: "French Baguette ",
    image: BaguetteImg,
    caloriesPer100g: 266, // 133 kcal / 50g * 100
    protein: 8, // 4g / 50g * 100
    fat: 1.6, // 0.8g / 50g * 100
    carbs: 56, // 28g / 50g * 100
  },
  {
    id: 3,
    name: "Boiled Egg ",
    image: BoiledEggImg,
    caloriesPer100g: 155, // 77.5 kcal / 50g * 100
    protein: 12.6, // 6.3g / 50g * 100
    fat: 10.6, // 5.3g / 50g * 100
    carbs: 1.2, // 0.6g / 50g * 100
  },
  {
    id: 4,
    name: "Fried Egg ",
    image: FriedEggImg,
    caloriesPer100g: 190, // 95 kcal / 50g * 100
    protein: 12, // 6g / 50g * 100
    fat: 15, // 7.5g / 50g * 100
    carbs: 2, // <1g / 50g * 100 (تقريب)
  },
  {
    id: 5,
    name: "Tomato ",
    image: TomatoImg,
    caloriesPer100g: 18,
    protein: 0.9,
    fat: 0.2,
    carbs: 3.9,
  },
  {
    id: 6,
    name: "Cucumber ",
    image: CucumberImg,
    caloriesPer100g: 16,
    protein: 0.7,
    fat: 0.1,
    carbs: 3.6,
  },
  {
    id: 7,
    name: "Lettuce",
    image: LettuceImg,
    caloriesPer100g: 14,
    protein: 0.9,
    fat: 0.1,
    carbs: 2.9,
  },
  {
    id: 8,
    name: "Pasta, Dry ",
    image: PastaImg,
    caloriesPer100g: 350,
    protein: 12,
    fat: 1.5,
    carbs: 72,
  },
  {
    id: 9,
    name: "Cheddar Cheese ",
    image: CheddarCheeseImg,
    caloriesPer100g: 383, // 115 kcal / 30g * 100
    protein: 23.3, // 7g / 30g * 100
    fat: 31.7, // 9.5g / 30g * 100
    carbs: 1.3, // 0.4g / 30g * 100
  },
  {
    id: 10,
    name: "Minced Meat, Beef ",
    image: MincedMeatBeefImg,
    caloriesPer100g: 250,
    protein: 26,
    fat: 16,
    carbs: 0,
  },
  {
    id: 11,
    name: "Mozzarella Cheese",
    image: MozzarellaCheeseImg,
    caloriesPer100g: 283, // 85 kcal / 30g * 100
    protein: 20, // 6g / 30g * 100
    fat: 20, // 6g / 30g * 100
    carbs: 3.3, // 1g / 30g * 100
  },
  {
    id: 12,
    name: "Oil ",
    image: OilImg,
    caloriesPer100g: 800, // 120 kcal / 15g * 100
    protein: 0,
    fat: 93.3, // 14g / 15g * 100
    carbs: 0,
  },
  {
    id: 13,
    name: "Ghee ",
    image: GheeImg,
    caloriesPer100g: 900, // 126 kcal / 14g * 100
    protein: 0,
    fat: 100,
    carbs: 0,
  },
  {
    id: 14,
    name: "Fava Beans ",
    image: BeansImg,
    caloriesPer100g: 110,
    protein: 7.6,
    fat: 0.4,
    carbs: 19,
  },
  {
    id: 15,
    name: "Tahini ",
    image: TahiniImg,
    caloriesPer100g: 593, // 89 kcal / 15g * 100
    protein: 17.3, // 2.6g / 15g * 100
    fat: 53.3, // 8g / 15g * 100
    carbs: 21.3, // 3.2g / 15g * 100
  },
  {
    id: 16,
    name: "Chocolate ",
    image: ChocolateImg,
    caloriesPer100g: 533, // 160 kcal / 30g * 100
    protein: 6.7, // 2g / 30g * 100
    fat: 33.3, // 10g / 30g * 100
    carbs: 60, // 18g / 30g * 100
  },
  {
    id: 17,
    name: "Dark Chocolate",
    image: DarkChocolateImg,
    caloriesPer100g: 567, // 170 kcal / 30g * 100
    protein: 6.7, // 2g / 30g * 100
    fat: 40, // 12g / 30g * 100
    carbs: 43.3, // 13g / 30g * 100
  },
  {
    id: 18,
    name: "Rice",
    image: riceImg,
    caloriesPer100g: 130,
    protein: 2.7,
    fat: 0.3,
    carbs: 28,
  },
  {
    id: 19,
    name: "Meat",
    image: meatImg,
    caloriesPer100g: 250,
    protein: 26,
    fat: 15,
    carbs: 0,
  },
  {
    id: 20,
    name: "Chicken",
    image: chickenImg,
    caloriesPer100g: 165,
    protein: 31,
    fat: 3.6,
    carbs: 0,
  },
  {
    id: 21,
    name: "Liver",
    image: LiverImg,
    caloriesPer100g: 135,
    protein: 20,
    fat: 5,
    carbs: 4,
  },
  {
    id: 22,
    name: "Turkey Cheese",
    image: TurkeyCheeseImg,
    caloriesPer100g: 280,
    protein: 18,
    fat: 22,
    carbs: 2,
  },
];

export default foods;