"use server";

import { db } from "@/server/db";
import { song, type CreateSong } from "@/server/db/schema";
import { revalidatePath } from "next/cache";

export async function createSong(createSong: CreateSong) {
  await db.insert(song).values(createSong);
  revalidatePath("/");
}
