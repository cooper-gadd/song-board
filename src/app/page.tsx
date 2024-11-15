import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="container flex flex-1 flex-col gap-8 p-4 md:p-8">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          BEST SONG NO ONE KNOWS ABOUT?
        </h1>
        <Button>Add Song</Button>
      </div>
    </div>
  );
}
