import {
  index,
  pgTableCreator,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `commission-hound_${name}`);

export const posts = createTable(
  "property",
  {
    id: uuid("id").primaryKey(),
    address: text("address").notNull(),
    name: text("name").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt"),
    userId: uuid("user_id").notNull(),
  },
  (property) => ({
    nameIndex: index("property_id_created_at_idx").on(property.createdAt, property.id),
  })
);
