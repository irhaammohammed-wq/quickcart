function Cart({ cart, setCart, setShowCart }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "300px",
        height: "100%",
        background: "#fff",
        borderLeft: "1px solid #ccc",
        padding: "20px"
      }}
    >
      <button onClick={() => setShowCart(false)}>Close</button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <button onClick={() => decrease(item.id)}>-</button>
              <span> {item.quantity} </span>
              <button onClick={() => increase(item.id)}>+</button>

              <br />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;