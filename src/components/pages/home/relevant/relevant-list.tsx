import { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";
import ReleventCard from "../../../cards/relevant-card";
import fakeLoadingPromise from "../../../../helpers/fakeLoadingPromise";
import { ScrollArea, ScrollBar } from "../../../ui/scroll-area";
import { RelevantCardSkeleton } from "../../../skeletons/relevant-card-skeleton";
import { data } from "../../../../lib/data/relevant-list.data";

function ReleventList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fakeLoadingPromise().then(() => {
      setLoading(false);
    });
  }, []);

  const getStatusColor = (status: string) => {
    if (status === "active") return "#5C5C5C";
    return "#D7EEFE";
  };

  return (
    <ScrollArea className="w-full rounded-md">
      <div className={cn(className, "flex gap-[20px]")} {...props}>
        {loading ? (
          <RelevantCardSkeleton count={20} className="gap-[20px]" />
        ) : (
          ""
        )}

        {!loading &&
          data.map((data, index) => (
            <ReleventCard
              key={index}
              url={data.url}
              fallback={data.fallback}
              text={data.text}
              props={{
                avatar: {
                  className: `border-2 border-[${getStatusColor(data.status)}]`,
                },
              }}
            />
          ))}
      </div>
      <ScrollBar orientation="horizontal" className="pt-[5px]" />
    </ScrollArea>
  );
}

export { ReleventList };
