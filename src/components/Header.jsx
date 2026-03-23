function Header({ cart, setShowCart }) {
  const totalItems = cart.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "15px" }}>
      <h1>QuickCart</h1>

      <button onClick={() => setShowCart(true)}>
        Cart ({totalItems})
      </button>
    </header>
  );
}

export default Header;