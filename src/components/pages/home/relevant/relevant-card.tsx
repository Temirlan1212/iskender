import { AvatarProps } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { cn } from "../../../../lib/utils";

export interface ReleventCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  fallback: string;
  text: string;
  props?: {
    avatar?: AvatarProps;
  };
}

const ReleventCard = ({
  url,
  fallback,
  text,
  className,
  props,
}: ReleventCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-[fit-content] gap-[5px]",
        className
      )}
    >
      <Avatar
        {...(props?.avatar || {})}
        className={cn("w-[60px] h-[60px]", props?.avatar?.className)}
      >
        <AvatarImage src={url} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <p>{text}</p>
    </div>
  );
};

export default ReleventCard;
