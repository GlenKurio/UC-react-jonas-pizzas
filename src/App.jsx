import { useState } from "react";
import "./App.css";

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

function Pizza({ pizzaInfo }) {
  return (
    <li className={`pizza ${pizzaInfo.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaInfo.photoName} alt="Pizza Spinaci" />
      <div>
        <h3>{pizzaInfo.name}</h3>
        <p>{pizzaInfo.ingredients}</p>
        <span>{pizzaInfo.soldOut ? "SOLD OUT" : pizzaInfo.price}</span>
      </div>
    </li>
  );
  // return (
  //   <div>
  //     <img src="/pizzas/spinaci.jpg" alt="Pizza Spinaci" />
  //     <h3></h3>
  //     <p>Tomato, mozarella, spinach, and ricotta cheese</p>
  //   </div>
  // );
}

function Menu() {
  const pizzas = pizzaData;
  const isSoldOut = pizzas.soldOut;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicius.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaInfo={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We`re still working on our menu. Please come back later 🖖</p>
      )}
    </main>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Reactive Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert("We`re currently open");
  // else alert("Sorry, we`re closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We`re happy to welcome you after {openHour}:00</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We`re open until {closeHour}:00. Come visit us or order online 👇</p>

      <button className="btn">Order</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
