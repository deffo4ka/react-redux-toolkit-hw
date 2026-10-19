import { useSelector } from 'react-redux';
import Card from '../UI/Card.jsx';
import CartItem from './CartItem.jsx';
import classes from './Cart.module.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.productsInCart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;