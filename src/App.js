import "./App.css";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";
import React from "react";

class App extends React.Component {
  state = { products: [] , cartItemsList: [], fetchingProducts: true };

  async componentDidMount() {
    this.setState({fetchingProducts: true})
    const response = await fetch("http://localhost:8082/api/products");
    const json = await response.json();
    this.setState({ products: json, fetchingProducts: false });
  }

  spinner = () => {
    <div class="spinner-border"></div>
  };
  
  addItemToCartList = (item) => {
    let copyArray = this.state.cartItemsList
    const isItemPresent = copyArray.some(cartItem => cartItem.product.id  === item.product.id)
    if(isItemPresent) {
      const index = copyArray.findIndex(product => product.product.id === item.product.id)
      copyArray[index].quantity = parseInt(copyArray[index].quantity) + parseInt(item.quantity)
    } else{
      copyArray = [...copyArray, item]
    }
    this.setState((prevState) => ({ cartItemsList: copyArray }));
  };
  render() {
    const calcPrice = () => {
      const cartItems = this.state.cartItemsList;
      const totalPrice = cartItems.reduce((result, item) => {
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
            <CartItems cartItemsList={this.state.cartItemsList} />
            <div className="container">Total Price: ${calcPrice()}</div>
            <AddItem
              products={this.state.products}
              addItemToCartList={this.addItemToCartList}
            />
          </main>
        )}
        <CartFooter copyright={new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
