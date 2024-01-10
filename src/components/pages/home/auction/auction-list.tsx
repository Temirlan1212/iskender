import { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";
import fakeLoadingPromise from "../../../../helpers/fakeLoadingPromise";
import CatalogCard from "../../../cards/catalog-card";
import { CatalogCardSkeleton } from "../../../skeletons/catalog-card-skeleton";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../ui/carousel";
import { data } from "../../../../lib/data/auction-list.data";

function AuctionList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [loading, setLoading] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    fakeLoadingPromise().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className={cn(
        className,
        "flex gap-[20px] flex-wrap",
        loading ? "overflow-auto" : ""
      )}
      {...props}
    >
      {loading ? (
        <CatalogCardSkeleton count={10} className="gap-[20px] flex-nowrap" />
      ) : (
        ""
      )}

      {!loading && (
        <>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {data.map((data, index) => (
                <CarouselItem className="basis-1/1 xl:basis-1/6" key={index}>
                  <CatalogCard
                    url={data.imageUrl}
                    title={data.title}
                    price={data.price}
                    set={data.set}
                    discount={data.discount}
                    inStock={data.inStock}
                    selected={data.selected}
                    props={{
                      img: {
                        className: "rounded-[10px]",
                      },
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="m-auto flex gap-[5px]">
            {[...Array(count)].map((_, index) => (
              <div
                key={index}
                className={cn(
                  "!w-[3px] !h-[3px] rounded-full bg-[#0063A9]",
                  current === index + 1 ? "!w-[40px]" : ""
                )}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export { AuctionList };
