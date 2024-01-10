import { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";
import CategoryCard from "./category-card";
import fakeLoadingPromise from "../../../../helpers/fakeLoadingPromise";
import { CategoryCardSkeleton } from "../../../skeletons/category-card-skeleton";

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

  const data = [
    {
      url: "https://github.com/shadcn.png",
      title: "Card 1",
      status: "active",
      quantity: 3000,
    },
    {
      url: "https://example.com/image.png",
      title: "Card 2",
      status: "default",
      quantity: 3000,
    },
  ];

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
        [...data, ...data, ...data, ...data].map((data, index) => (
          <CategoryCard
            key={index}
            url={data.url}
            title={data.title}
            quantity={data.quantity}
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
