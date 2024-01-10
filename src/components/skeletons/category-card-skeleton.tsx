import { cn } from "../../lib/utils";
import { Skeleton } from "../ui/skeleton";

export interface CategoryCardSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
}

export function CategoryCardSkeleton({
  count = 5,
  className,
}: CategoryCardSkeletonProps) {
  return (
    <div className={cn("flex flex-wrap", className)}>
      {[...Array(count)].map((_, index) => (
        <div
          className={cn(
            "flex flex-col w-[fit-content] gap-[5px] w-[170px] h-[180px] bg-white rounded-[10px] justify-between"
          )}
        >
          <div className="p-[10px] flex flex-col gap-[10px]">
            <Skeleton className="w-full h-[10px] rounded-full" />
            <Skeleton className="w-full h-[10px] rounded-full" />
          </div>
          <Skeleton className="h-[107px] w-full rounded-b-[10px]" />
        </div>
      ))}
    </div>
  );
}
