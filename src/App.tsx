import { PropsWithChildren } from "react";
import "./App.css";
import NewsCard from "./components/cards/news-card";
import Navbar from "./components/layouts/navbar";
import { CatalogList } from "./components/pages/home/catalog/catalog-list";
import { CategoryList } from "./components/pages/home/category/category-list";
import { NewsList } from "./components/pages/home/news/news-list";
import { ReleventList } from "./components/pages/home/relevant/relevant-list";
import { Button } from "./components/ui/button";
import { AuctionList } from "./components/pages/home/auction/auction-list";
import Footer from "./components/layouts/footer";
import AddressCard from "./components/cards/address-card";
import { AddressList } from "./components/pages/home/address/address-list";

interface SectionProps {
  title: string;
  buttonText?: string;
}

function SectionWithTitle({
  title,
  children,
  buttonText,
}: PropsWithChildren<SectionProps>) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex gap-[10px] flex-wrap justify-between">
        <h2 className="font-semibold text-[25px]">{title}</h2>
        {buttonText && (
          <Button className="text-[#3186C3]" variant="ghost">
            {buttonText}
          </Button>
        )}
      </div>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#F8FAFF]">
      <Navbar />
      <div className="container py-[20px] px-[55px]">
        <div className="flex flex-col gap-[50px]">
          <ReleventList />

          <SectionWithTitle title="Категории">
            <CategoryList />
          </SectionWithTitle>

          <SectionWithTitle title="Хиты продаж" buttonText="перейти в каталог">
            <CatalogList />
          </SectionWithTitle>

          <SectionWithTitle title="Новости" buttonText="все">
            <NewsList />
          </SectionWithTitle>

          <SectionWithTitle
            title="Аукционные товары"
            buttonText="перейти в каталог"
          >
            <AuctionList />
          </SectionWithTitle>

          <SectionWithTitle
            title="Адреса магазинов"
            buttonText="перейти в каталог"
          >
            <AddressList />
          </SectionWithTitle>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
