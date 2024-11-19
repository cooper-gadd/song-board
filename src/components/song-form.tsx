"use client";

import { createSong } from "@/app/actions";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      artist: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createSong(values);
    form.reset();
    form.clearErrors();
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
