import { cn } from "../../lib/utils";
import { Skeleton } from "../ui/skeleton";

export interface CatalogCardSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
}

export function CatalogCardSkeleton({
  count = 5,
  className,
}: CatalogCardSkeletonProps) {
  return (
    <div className={cn("flex flex-wrap", className)}>
      {[...Array(count)].map((_, index) => (
        <div
          className={cn(
            "flex flex-col w-[fit-content] gap-[5px] w-[200px] h-[341px] bg-white rounded-[10px] justify-between"
          )}
        >
          <Skeleton className="h-[150px] w-full rounded-[10px]" />

          <div className="p-[10px] flex flex-col gap-[10px]">
            <Skeleton className="w-full h-[10px] rounded-full" />
            <Skeleton className="w-full h-[10px] rounded-full" />
            <Skeleton className="w-full h-[10px] rounded-full" />
            <Skeleton className="w-full h-[10px] rounded-full" />
            <Skeleton className="w-full h-[10px] rounded-full" />
            <Skeleton className="w-full h-[10px] rounded-full" />
            <Skeleton className="w-full h-[10px] rounded-full" />
            <Skeleton className="w-full h-[10px] rounded-full" />
            <Skeleton className="w-full h-[10px] rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
