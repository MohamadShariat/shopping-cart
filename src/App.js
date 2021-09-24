import "./App.css";

//Context
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <h1>App</h1>
    </ProductContextProvider>
  );
}

export default App;
