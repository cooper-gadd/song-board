// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { type InferInsertModel } from "drizzle-orm";
import { int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `song-board_${name}`);

export const songs = createTable("song", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }).notNull(),
  artist: text("artist", { length: 256 }).notNull(),
});

// infer select
// https://orm.drizzle.team/docs/latest-releases/drizzle-orm-v0283#-added-tableinferselect--table_inferselect-and-tableinferinsert--table_inferinsert-for-more-convenient-table-model-type-inference
export type CreateSong = InferInsertModel<typeof songs>;
