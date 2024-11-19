"use server";

import { db } from "@/server/db";
import { songs, type CreateSong } from "@/server/db/schema";
import { revalidatePath } from "next/cache";

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

export async function createSong(createSong: CreateSong) {
  // https://orm.drizzle.team/docs/insert
  await db.insert(songs).values(createSong);

  // https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration#on-demand-revalidation-with-revalidatepath
  revalidatePath("/");
}
