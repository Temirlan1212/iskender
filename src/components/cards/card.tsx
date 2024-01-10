import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  title: string;
  quantity: number;
  props?: {
    img?: React.HTMLAttributes<HTMLDivElement>;
  };
}

const Card = ({ url, title, quantity, className, props }: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col w-[fit-content] gap-[5px] w-[200px] h-[341px] bg-white rounded-[10px] p-[10px]",
        className
      )}
    >
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute top-[5px] right-[5px] bg-white/60 border-0 hover:bg-white/60"
        >
          <Heart color="#717171" />
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

      <div className="p-[10px]">
        <p className="font-semibold">{title}</p>
        <p className="text-[#727272]">{quantity} товаров</p>
      </div>
    </div>
  );
};

export default Card;
