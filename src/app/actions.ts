"use server";

import { db } from "@/server/db";
import { songs, type CreateSong } from "@/server/db/schema";
import { revalidatePath } from "next/cache";

export async function createSong(createSong: CreateSong) {
  await db.insert(songs).values(createSong);
  revalidatePath("/");
}
