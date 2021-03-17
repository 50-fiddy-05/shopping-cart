import React from "react";

class CartItem extends React.Component {
  render(){
      return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{this.props.product}</div>
          <div className="col-md-2">${this.props.priceInCents/100}</div>
          <div className="col-md-2">{this.props.quantity}</div>
        </div>
      </div>
    );
  }
}

export default CartItem;