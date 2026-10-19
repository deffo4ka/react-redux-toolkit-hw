import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/index.js';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.productsInCart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;