// src/pages/AddCartPage.js
import { useCart } from '../hooks/useCart'; // Importing the custom hook to access cart context


function AddCartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  // Accessing cart items and functions from CartContext
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (cartItems.length === 0) {
    return <div className="text-center p-6">Your cart is empty!</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div>
                {cartItems.map((item) => (
          <div key={item.id} className="flex relative justify-between items-center mb-4 border-b py-5">
             
            
            {/* Product details */}       

            <div>
              <img src={item.image} alt={item.name} className="w-40 h-50 rounded-md" />
            </div>
            <div className="flex-1 ml-14 text-2xl space-y-2.5 font-semibold">
              <h3 className="italic">NAME: {item.name}</h3>
              <p className="text-gray-600"> PRICE: {item.price}</p>
              <p className="text-gray-600">SIZE: {item.selectedSize}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white p-2 rounded-full"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleClearCart}
        className="bg-gray-500 text-white p-2 rounded-full mt-4"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default AddCartPage;
