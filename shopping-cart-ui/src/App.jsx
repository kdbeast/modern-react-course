import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { ProductContext } from "./context/ProductContext";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">🛒 Product Catalog</h1>
        <ProductContext.Consumer>
          {(p) => <ProductList {...p} />}
        </ProductContext.Consumer>
      </div>
    </>
  );
}

export default App;
