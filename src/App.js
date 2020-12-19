//feature 1

import React, {useState} from "react"
import Filter from "./components/Filter";
import Products from "./components/Products"
import data from "./data.json"


function App() {
   const [state, setState] = useState({

    products: data.products,
    size: "",
    sort: "",
   });


  return (
    <div className="grid-conatainer">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
       <div className="content">
         <div className="main">
         <Filter 
         count={state.products.length}
         size = {state.size}
         sort = {state.sort}></Filter>
           <Products products={state.products}></Products>
         </div>
         <div className="sidebar">Cart items</div>
       </div>
      </main>

      <footer> All right is reserved</footer>
    </div>
  );
}

export default App;
