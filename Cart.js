import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p>Your cart is empty.</p>
          <Link to="/">
            <button className="btn" style={{ marginTop: "16px" }}>
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="product-card"
              key={index}
              style={{ flexDirection: "row", maxWidth: "600px", margin: "12px auto", textAlign: "left" }}>
              <img src={item.image} alt={item.title}
                style={{ width: "80px", height: "80px", objectFit: "contain" }} />
              <div style={{ flex: 1, padding: "0 12px" }}>
                <h4>{item.title}</h4>
                <p className="price">${item.price}</p>
              </div>
              <button className="btn"
                style={{ background: "#dc2626", width: "auto" }}
                onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "right" }}>
            <h3>Total: <span className="price">${total.toFixed(2)}</span></h3>
            <Link to="/checkout">
              <button className="btn" style={{ marginTop: "12px", width: "200px" }}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;