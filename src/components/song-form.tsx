"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
// https://ui.shadcn.com/docs/components/dialog
// https://ui.shadcn.com/docs/components/form
// https://ui.shadcn.com/docs/components/sonner

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createSong } from "@/app/actions";
import { toast } from "sonner";

const formSchema = z.object({
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

export function SongForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      artist: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createSong(values);
    toast(`${values.name} by ${values.artist} has been created!`);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Song</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Song</DialogTitle>
          <DialogDescription>
            This is the song you want to share with the world.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Hotline Bling" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name of the song.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="artist"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Artist</FormLabel>
                  <FormControl>
                    <Input placeholder="Drake" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the artist of the song.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
