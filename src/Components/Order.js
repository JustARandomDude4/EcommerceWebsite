import React from 'react'
import './Order.css'
import CheckoutProduct from "./CheckoutProduct";
import moment from 'moment';

function Order({ order }) {

  const FormatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
          
            <h3 className="order__total">Order Total: {FormatCurrency(order.data.amount / 100)}</h3>
        
        </div>
    )
}

export default Order;