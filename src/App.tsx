import "./App.css";
import Navbar from "./components/layout/navbar";
import { CategoryList } from "./components/pages/home/category/category-list";
import { ReleventList } from "./components/pages/home/relevant/relevant-list";

function App() {
  return (
    <div className="bg-[#F8FAFF]">
      <Navbar />
      <div className="container py-[20px]">
        <div className="flex flex-col gap-[50px]">
          <ReleventList />

          <div className="flex flex-col gap-[10px]">
            <h2 className="font-semibold text-[25px]">Категории</h2>
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
