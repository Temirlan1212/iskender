import { cn } from "../../lib/utils";
import { Skeleton } from "../ui/skeleton";

export interface NewsCardkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
}

export function NewsCardkeleton({
  count = 5,
  className,
}: NewsCardkeletonProps) {
  return (
    <div className={cn("flex flex-wrap", className)}>
      {[...Array(count)].map((_, index) => (
        <Skeleton className="!w-[405px] h-[180px] w-full rounded-[10px]" />
      ))}
    </div>
  );
}
