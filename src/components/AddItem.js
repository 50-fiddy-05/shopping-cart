import React from "react";

class AddItem extends React.Component {

  state = { product: this.props.products[0], quantity: 0 };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.quantity)
    console.log("Additem quantity : " + this.state.quantity)
    if(this.state.quantity > 0 ){
      this.props.addItemToCartList(this.state);
    }
  };
  
  onChange = (e) => {
    console.log(this.state.quantity)
    const id = e.target.value;
    const product = this.props.products.find(product => product.id == id);
    this.setState({ product: product });
  };

  render() {
    return (
      <div className="container">
        <div className="list-group">
          <form onSubmit={this.onSubmit}>
            <div>Quantity</div>
            <div className="list-group">
              <input
                type="text"
                onChange={(e) => {
                  this.setState({ quantity: e.target.value });
                }}
                className="list-group-item"
              />
            </div>
            <div>Products</div>
            <div className="list-group">
              <select
                id="products"
                onChange={this.onChange}
                className="list-group-item"
              >
                {this.props.products.map((product, i) => (
                  <option key={i} value={product.id}>
                    {product.name} (${product.priceInCents / 100})
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary" values="Submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;
