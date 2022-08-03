import { Controls } from "./components/controls/Controls";
import { ProductsTable } from "./components/table/ProductsTable";
import './index.css'

function App() {
  return (
    <div>
      <ProductsTable />
      <Controls />
    </div>
  );
}

export default App;
