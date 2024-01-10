import { AlignJustify, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { ReactSVG } from "react-svg";

const Nav = () => {
  return (
    <>
      <div className="flex text-white hover:bg-black/10 px-[20px] py-[10px] rounded-[100px] gap-[10px] cursor-pointer items-center">
        <AlignJustify />
        <p>Каталог</p>
      </div>

      <div className="max-w-[480px] w-full px-[20px] py-[10px]">
        <div className="relative">
          <input
            type="text"
            name="q"
            className="w-full border h-12 shadow p-4 rounded-full"
            placeholder="Поиск"
          />
        </div>
      </div>

      <div className="flex items-center gap-[10px] justify-center md:justify-start">
        <div className="flex items-center gap-[10px] hover:bg-black/20 cursor-pointer p-[5px] rounded-[10px]">
          <div className="text-white text-end">
            <p className="text-[12px] text-nowrap">Добро пожаловать</p>
            <p className="font-semibold text-nowrap">Вход/Регистрация</p>
          </div>

          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="w-[2px] h-[40px] bg-white/20"></div>

        <div>
          <Badge className="bg-white text-[#2D82BE] p-[6px] round-full cursor-pointer hover:bg-black/10 hover:text-white">
            <ShoppingCart />
          </Badge>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="flex h-16 items-center bg-[#2D82BE]">
      <div className="container px-[55px]">
        <div className="hidden md:flex h-16 items-center gap-[22px] justify-between flex-col md:flex-row">
          <ReactSVG src="logo.svg" className="cursor-pointer text-white" />
          <Nav />
        </div>

        <div className="flex md:hidden justify-between">
          <img src="./logo.png" className="mr-[20px]" />
          <Dialog>
            <DialogTrigger>
              <AlignJustify className="text-white" />
            </DialogTrigger>
            <DialogContent className="m-[10px] w-[100%] max-w-[500px] rounded-[15px] bg-[#2D82BE]">
              <DialogHeader>
                <DialogDescription className="flex flex-col gap-[10px]">
                  <Nav />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
