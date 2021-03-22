import React from "react";

class AddItem extends React.Component {

  state = { product: this.props.products[0], quantity: 0 };

  onSubmit = (e) => {
    e.preventDefault();
    const quantityInt = parseInt(this.state.quantity)
    if(quantityInt > 0 ){
      this.props.createItem({product_id: this.state.product.id, quantity: quantityInt});
    }
  };
  
  onChange = (e) => {
    e.preventDefault()
    const id = e.target.value;
    const product = this.props.products.find(product => product.id == id);
    this.setState({ product: product });
  };

  quantityChange = (e) => {
    e.preventDefault()
    this.setState({quantity: e.target.value})
  }

  render() {
    return (
      <div className="container">
        <div className="list-group">
          <form onSubmit={this.onSubmit}>
            <div>Quantity</div>
            <div className="list-group">
              <input
                type="text"
                onChange={this.quantityChange}
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
