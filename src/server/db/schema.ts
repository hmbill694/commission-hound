import {
  index,
  pgTableCreator,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => name);

export const propertyTable = createTable(
  "property",
  {
    id: uuid("id").primaryKey(),
    address: text("address").notNull(),
    name: text("name"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt"),
    userId: uuid("user_id").notNull(),
    askingPrice: text("asking_price").notNull(),
    commissionRate: text("commission_rate").notNull()
  },
  (property) => ({
    nameIndex: index("property_id_created_at_idx").on(property.createdAt, property.id),
  })
);
