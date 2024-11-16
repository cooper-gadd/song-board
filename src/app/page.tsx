import { SongForm } from "@/components/song-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { db } from "@/server/db";

export default async function Page() {
  const songs = await db.query.song.findMany();
  return (
    <div className="container flex flex-1 flex-col gap-8 p-4 md:p-8">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          BEST SONG NO ONE KNOWS ABOUT?
        </h1>
        <SongForm />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {songs.map((song) => (
          <Card key={song.id}>
            <CardHeader>
              <CardTitle>{song.name}</CardTitle>
              <CardDescription>{song.artist}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
