import "./App.css";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";
import React from "react";

class App extends React.Component {
  state = { products: [], cartItemsList: [], fetchingProducts: true };

  async componentDidMount() {
    this.setState({ fetchingProducts: true });
    const response = await fetch("http://localhost:8082/api/products");
    const response2 = await fetch("http://localhost:8082/api/items");
    const json = await response.json();
    const json2 = await response2.json();
    this.setState({
      products: json,
      cartItemsList: json2,
      fetchingProducts: false,
    });
  }

  spinner = () => {
    <div class="spinner-border"></div>;
  };

  createItem = async (product) => {
    const response = await fetch("http://localhost:8082/api/items", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    const item = await response.json();
    this.setState({ cartItemsList: [...this.state.cartItemsList, item] });
  }

  render() {
    let products = [...this.state.products];
    let cartItems = [...this.state.cartItemsList];
    console.log(this.state.cartItemsList)
    let items = cartItems.map((item) => {
      let cartItem = products.find(
        (product) => product.id === item.product_id
      );
      return { product: cartItem, quantity: item.quantity };
    });

    const calcPrice = () => {
      const totalPrice = items.reduce((result, item) => {
        result += (item.product.priceInCents / 100) * item.quantity;
        return result;
      }, 0);
      return parseFloat(totalPrice).toFixed(2);
    };

    return (
      <div>
        <CartHeader />
        {this.state.fetchingProducts ? (
          this.spinner()
        ) : (
          <main>
            <CartItems cartItemsList={items} />
            <div className="container">Total Price: ${calcPrice()}</div>
            <AddItem
              products={this.state.products}
              createItem={this.createItem}
            />
          </main>
        )}
        <CartFooter copyright={new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
