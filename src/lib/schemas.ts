import { z } from "zod";

export const songSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name needs to be at least 1 character long",
    })
    .max(256, {
      message: "Name needs to be at most 256 characters long",
    }),
  artist: z
    .string()
    .min(1, {
      message: "Artist needs to be at least 1 character long",
    })
    .max(256, {
      message: "Artist needs to be at most 256 characters long",
    }),
});
