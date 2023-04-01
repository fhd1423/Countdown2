import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {
  let [veg, setVeg] = useState(0)
  let food = {
    "breakfast": [
      { "food": "pancakes", "price": 5.00, "vegetarian": true },
      { "food": "waffles", "price": 5.00, "vegetarian": true },
      { "food": "orange juice", "price": 2.00, "vegetarian": true }
    ],
    "lunch": [
      { "food": "turkey sandwich", "price": 8.00, "vegetarian": false },
      { "food": "grilled cheese", "price": 6.00, "vegetarian": true },
      { "food": "hamburger", "price": 8.00, "vegetarian": false }
    ],
    "dinner": [
      { "food": "chicken alfredo", "price": 10.00, "vegetarian": false },
      { "food": "tofu stir-fry", "price": 9.00, "vegetarian": true },
      { "food": "chili", "price": 8.00, "vegetarian": false }
    ]
  }

  let vegetarianMeals = {}
  vegetarianMeals.breakfast = food.breakfast.filter(f => f.vegetarian === true)
  vegetarianMeals.lunch = food.lunch.filter(f => f.vegetarian === true)
  vegetarianMeals.dinner = food.dinner.filter(f => f.vegetarian === true)



  return (
    <div className="App">
      <h1> Menu </h1>
      <button onClick={() => setVeg(veg + 1)}> vegetarion only </button>
      <h3> Breakfast</h3>
      {veg % 2 == 0 ? food.breakfast.map((f) => <p> {f.food + ",  $" + f.price}</p>) : vegetarianMeals.breakfast.map((f) => <p> {f.food + ",  $" + f.price}</p>)}

      <h3> Lunch </h3>
      {veg % 2 == 0 ? food.lunch.map((f) => <p> {f.food + ",  $" + f.price}</p>) : vegetarianMeals.lunch.map((f) => <p> {f.food + ",  $" + f.price}</p>)}

      <h3> dinner </h3>
      {veg % 2 == 0 ? food.dinner.map((f) => <p> {f.food + ",  $" + f.price}</p>) : vegetarianMeals.dinner.map((f) => <p> {f.food + ",  $" + f.price}</p>)}
    </div>
  );
}

export default App;
