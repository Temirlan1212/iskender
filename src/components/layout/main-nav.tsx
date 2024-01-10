import { cn } from "../../lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { AlignJustify } from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <nav
        className={cn(
          "hidden md:flex items-center space-x-4 lg:space-x-6 !m-[0px]",
          className
        )}
        {...props}
      >
        dd
      </nav>
      <div className="flex items-center md:!hidden">
        <MainNavMobile />
      </div>
    </>
  );
}

function MainNavMobile() {
  return (
    <Dialog>
      <DialogTrigger>
        <AlignJustify />
      </DialogTrigger>
      <DialogContent className="m-[10px] w-[100%] max-w-[200px] rounded-[15px]">
        <DialogHeader>
          <DialogDescription className="flex flex-col gap-[10px]">
            dd
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
