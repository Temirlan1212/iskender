import { cn } from "../../lib/utils";
import { Skeleton } from "../ui/skeleton";

export interface RelevantCardSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
}

export function RelevantCardSkeleton({
  count = 5,
  className,
}: RelevantCardSkeletonProps) {
  return (
    <div className={cn("overflow-auto flex", className)}>
      {[...Array(count)].map((_, index) => (
        <div
          className={cn("flex flex-col justify-center gap-[10px] items-center")}
        >
          <Skeleton className="w-[60px] h-[60px] rounded-full" />
          <Skeleton className="h-4 w-[60px]" />
        </div>
      ))}
    </div>
  );
}
