import {  Route, Routes } from "react-router-dom";
import Homeslid from "./components/Homeslid";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import ProductDetailes from "./components/ProductDetailes";
import HomeShop from "./components/HomeShop";
import Footer from "./components/Footer";
import CarouselItems from "./components/CarouselItems";

function App() {

  return (
<>
<Navbar/>
<Routes>
<Route path="/Shop" element={<Shop/>}/>
<Route path="/" element={<><Homeslid/><HomeShop/><CarouselItems/></>}/>
<Route path="/Shop/:productId" element={<ProductDetailes/>}/>
{/* <Route path="/Cart" element={<Cart/>}/> */}

</Routes>
<Footer/>

</>
  );
}

export default App;
