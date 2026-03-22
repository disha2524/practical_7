import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [ordered, setOrdered] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    if (!name || !email || !address) {
      alert("Please fill in all fields.");
      return;
    }
    setOrdered(true);
  };

  if (ordered) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h2 style={{ color: "#16a34a" }}>Order Placed!</h2>
        <p style={{ marginTop: "12px" }}>Thank you, {name}! Your order has been confirmed.</p>
        <button className="btn" style={{ marginTop: "24px" }} onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto" }}>
      <h2>Checkout</h2>

      <div style={{ background: "white", borderRadius: "10px", padding: "20px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "12px" }}>Order Summary</h3>
        {cart.map((item, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ fontSize: "14px" }}>{item.title.substring(0, 35)}...</span>
            <span className="price">${item.price}</span>
          </div>
        ))}
        <hr style={{ margin: "12px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
          <span>Total</span>
          <span className="price">${total.toFixed(2)}</span>
        </div>
      </div>

      <div style={{ background: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginBottom: "16px" }}>Shipping Details</h3>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Full Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "14px" }} />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "14px" }} />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>Address</label>
          <input type="text" value={address} onChange={e => setAddress(e.target.value)}
            placeholder="Enter your address"
            style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "14px" }} />
        </div>
        <button className="btn" style={{ width: "100%" }} onClick={handleOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;