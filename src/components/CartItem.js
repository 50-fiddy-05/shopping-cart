import React from "react";

function CartItem(props) {
  return (
    <div class="list-group-item">
      <div class="row">
        <div class="col-md-8">{props.product}</div>
        <div class="col-md-2">{props.priceInCents}</div>
        <div class="col-md-2">{props.quantity}</div>
      </div>
    </div>
  );
}

export default CartItem;