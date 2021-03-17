import "./App.css";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";
import React from "react";

class App extends React.Component {
  state = { cartItemsList: [] };

  render() {
    const cartItemsList = [
      {
        id: 1,
        product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
        quantity: 1,
      },
      {
        id: 2,
        product: {
          id: 41,
          name: "Heavy Duty Concrete Plate",
          priceInCents: 499,
        },
        quantity: 2,
      },
      {
        id: 3,
        product: {
          id: 42,
          name: "Intelligent Paper Knife",
          priceInCents: 1999,
        },
        quantity: 1,
      },
    ];

    const products = [
      { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
      { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
      { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
      { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
      { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
      { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
      { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
      { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
      { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 },
    ];

    const addItemToCartList = (item) => {
      const newArray = []
      newArray.push(item)
      const finalArray = newArray.concat(this.state.cartItemsList)
      this.setState(prevState => ({cartItemsList: finalArray}))
    };

    return (
      <div>
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} />
        <AddItem
          products={products}
          addItemToCartList={addItemToCartList}
        />
        <CartFooter copyright={new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
