import {
  index,
  pgTableCreator,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `broker_boost_${name}`);

// a comment

export const propertyTable = createTable(
  "property",
  {
    id: uuid("id").primaryKey(),
    address: text("address").notNull(),
    name: text("name"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt"),
    userId: varchar("user_id", { length: 256 }).notNull(),
    askingPrice: text("asking_price").notNull(),
    commissionRate: text("commission_rate").notNull(),
    description: text("description")
  },
  (property) => ({
    nameIndex: index("property_id_created_at_idx").on(property.createdAt, property.id),
  })
);
