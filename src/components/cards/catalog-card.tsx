import { Heart, Minus, Plus } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { truncateText } from "../../helpers/truncate";
import { useState } from "react";

export interface CatalogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  title: string;
  price: number;
  set: boolean;
  inStock: boolean;
  selected: boolean;
  props?: {
    img?: React.HTMLAttributes<HTMLDivElement>;
  };
  discount?: {
    newPrice?: number;
  };
}

const CatalogCard = ({
  url,
  title,
  price,
  inStock,
  className,
  set,
  props,
  selected,
  discount,
}: CatalogCardProps) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev < 1 ? prev : prev - 1));

  return (
    <div
      className={cn(
        "flex flex-col w-[fit-content] gap-[5px] w-[200px] h-[341px] bg-white rounded-[10px] p-[10px] justify-between",
        className
      )}
    >
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute top-[5px] right-[5px] bg-white/60 border-0 hover:bg-white/60"
        >
          <Heart
            className={cn(
              "text-[#717171] hover:fill-[#174261] hover:text-[#174261]",
              selected ? "fill-[#174261] text-[#174261]" : ""
            )}
          />
        </Button>
        <img
          src={url}
          alt={title}
          {...(props?.img || {})}
          className={cn(
            "w-full h-[150px] object-cover !border-0",
            props?.img?.className || ""
          )}
        />
      </div>

      <div>
        <p className="font-medium text-[14px]">{truncateText(title, 40)}</p>
        {discount?.newPrice && !isNaN(Number(discount.newPrice)) ? (
          <div className="flex gap-[10px]">
            <p className="font-bold text-[19px] text-[#FF0000]">{price} c</p>
            <p className="font-bold text-[14px] text-[#717171] line-through">
              {price} c
            </p>
          </div>
        ) : (
          <p className="font-bold text-[19px]">{price} c</p>
        )}

        <p
          className={cn(
            inStock ? "text-[#73CB5E]" : "text-[#FF0000] line-through"
          )}
        >
          В наличии
        </p>
        <ul>
          <li
            className={cn(
              "list-disc ml-[18px] ",
              set ? "text-black/20" : "text-[#3286C2]"
            )}
          >
            Комплекте
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between gap-[5px]">
        <Button
          onClick={increment}
          variant="outline"
          size="icon"
          className="!h-[33px] !w-[33px] !rounded-[100%] bg-[#F8F8F8]/60 border-0 hover:bg-[#000]/10"
        >
          <Plus />
        </Button>

        <span className="text-[15px] font-medium">{count}</span>

        <Button
          onClick={decrement}
          variant="outline"
          size="icon"
          className="!h-[33px] !w-[33px] !rounded-[100%] bg-[#F8F8F8]/60 border-0 hover:bg-[#000]/10"
        >
          <Minus />
        </Button>
      </div>
    </div>
  );
};

export default CatalogCard;
