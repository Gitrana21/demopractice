import React from 'react';
import ReactDOM from 'react-dom/client';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return  <div>
    <Header />
    <Menu />
    <Footer />
    </div>
}

function Pizza() {
  return <div>
    <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
    <h2>Pizza Spinaci</h2>
    <p>Tomato, mozarella, spinach, and ricotta cheese</p>
  </div>
}

function Header() {
  return <h2>Free React Pizza co.</h2>
}

function Menu() {
  return <div>
    <h2>Our Menu</h2>
    <Pizza />
    <Pizza />
    <Pizza />
    <Pizza />
  </div>
}

function Footer() {
  return <footer>{ new Date().toLocaleTimeString() } "we are currently open"</footer>
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

