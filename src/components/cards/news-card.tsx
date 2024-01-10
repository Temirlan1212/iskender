import { ReactSVG } from "react-svg";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export interface NewsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  discount: number;
}

const NewsCard = ({ title, discount, className }: NewsCardProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col w-[fit-content] gap-[5px] w-[405px] h-[180px] bg-white rounded-[10px] bg-[#F0F9FF] overflow-hidden",
        className
      )}
    >
      <div className="my-auto relative p-[20px] flex flex-col gap-[20px] z-10">
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-[24px]">-{discount}%</p>
          <p className="font-normal text-[14px]">{title}</p>
        </div>

        <Button className="w-[fit-content] rounded-[10px] bg-[#0063A9]">
          Подробнее
        </Button>
      </div>
      <ReactSVG src="bg-1.svg" className="absolute top-0 left-0 z-0" />
    </div>
  );
};

export default NewsCard;
