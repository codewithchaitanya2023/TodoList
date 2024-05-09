import logo from "./logo.svg";
import "./App.css";
// import TodoList from "./TodoList"; // Make sure it's imported if you're planning to use it
import Header from "./Components/Header"; // Ensure correct import paths
import Productlist from "./Components/Productlist"; // Ensure correct import paths
import { useState } from "react";
import CartList from "./Components/CartList";
import Practice from "./Practice";
import FirstAssTODO from "./FirstAssTODO";
function App() {
  // The state should be declared outside the JSX
  // const [product, setProduct] = useState([
  //   {
  //     url: "https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
  //     name: "TRQ White Shoes",
  //     category: "Shoes",
  //     seller: "AMZ Seller Ghz",
  //     price: 1999,
  //   },
  //   {
  //     url: "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
  //     name: "LOREM Watch Black",
  //     category: "Watches",
  //     seller: "Watch Ltd Siyana",
  //     price: 2599,
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU",
  //     name: "AMZ Laptop 8GB RAM",
  //     category: "Laptops",
  //     seller: "Delhi Laptops",
  //     price: 50000,
  //   },

  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU",
  //     name: "Watch Pink",
  //     category: "Watches",
  //     seller: "Watch Ltd",
  //     price: 2000,
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU",
  //     name: "Cup Red Color",
  //     category: "Cup",
  //     seller: "ABS Ltd",
  //     price: 100,
  //   },
  // ]);
  // const [cart, setcart] = useState([]);
  // const [showCart, setShowCart] = useState(false);
  // const addTocart = (data) => {
  //   console.log(data);
  //   setcart([...cart, { ...data, quantity: 1 }]);
  // };
  // const handleShow = (isShowing) => {
  //   setShowCart(isShowing); // Example of setting a state
  //};

  return (
    <div className="App">
      {/* <Practice name="chaitanya " add="nashik"></Practice> */}
      <FirstAssTODO></FirstAssTODO>

      {/* Make sure to use correct JSX syntax */}
      {/* <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart} /> // Component syntax corrected
      ) : (
        <Productlist product={product} addTocart={addTocart} /> // Correct JSX syntax
      )} */}
      {/* If you use TodoList, uncomment this */}
      {/* <TodoList /> */}
      {/* Additional content goes here */}
    </div>
  );
}

export default App;
