import './App.css';
import CartHeader from './components/CartHeader';
import CartFolder from './components/CartFolder';
import CartItems from './components/CartItems';

function App() {
  return (
    <div>
      <CartHeader />
      <CartItems />
      <CartFolder />
    </div>
  );
}

export default App;
