import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart.jsx';
import Layout from './components/Layout/Layout.jsx';
import Products from './components/Shop/Products.jsx';

function App() {
  const showCart = useSelector((state) => state.cartToggle.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;