import { cn } from "../../lib/utils";

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
        "flex flex-col w-[fit-content] gap-[5px] w-[200px] h-[341px] bg-white rounded-[10px]",
        className
      )}
    >
      <div className="p-[10px]">
        <p className="font-semibold">{title}</p>
        <p className="text-[#727272]">{quantity} товаров</p>
      </div>

      <img
        src={url}
        alt={title}
        {...(props?.img || {})}
        className={cn(
          "w-[170px] h-[107px] object-cover !border-0",
          props?.img?.className || ""
        )}
      />
    </div>
  );
};

export default Card;
