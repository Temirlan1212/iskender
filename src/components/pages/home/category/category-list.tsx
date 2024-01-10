import { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";
import CategoryCard from "../../../cards/category-card";
import fakeLoadingPromise from "../../../../helpers/fakeLoadingPromise";
import { CategoryCardSkeleton } from "../../../skeletons/category-card-skeleton";
import { data } from "../../../../lib/data/category-list.data";

function CategoryList({
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
    <div className={cn(className, "flex gap-[20px] flex-wrap")} {...props}>
      {loading ? (
        <CategoryCardSkeleton count={10} className="gap-[20px]" />
      ) : (
        ""
      )}

      {!loading &&
        data.map((data, index) => (
          <CategoryCard
            key={index}
            url={data.url}
            title={data.title}
            quantity={data.quantity}
            className="hover:bg-black/5 cursor-pointer"
            props={{
              img: {
                className: `border-2 border-[${getStatusColor(
                  data.status
                )}] rounded-b-[10px]`,
              },
            }}
          />
        ))}
    </div>
  );
}

export { CategoryList };
