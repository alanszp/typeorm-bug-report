import { createConnection } from "typeorm";
import { Item } from "./models/Item";
import { List } from "./models/List";
import { OrderedItem } from "./models/OrderedItem";
import connectionOptions from "./ormconfig";

async function createSeedData() {
  const list = await List.create({
    name: "Priority list",
  }).save();

  const item1 = await Item.create({
    description: "profit",
  }).save();

  const item2 = await Item.create({
    description: "fix this issue",
  }).save();

  // Now link items
  await OrderedItem.create({
    listId: list.id,
    itemId: item2.id,
    order: 1,
  }).save();

  await OrderedItem.create({
    listId: list.id,
    itemId: item1.id,
    order: 2,
  }).save();
}

async function main() {
  const connection = await createConnection(connectionOptions);

  await connection.synchronize();

  await createSeedData();

  const list = await List.findOne(
    { name: "Priority list" },
    { relations: ["orderedItems", "orderedItems.item"] }
  );

  if (!list) throw Error("No list in DB. Run yarn install again.");

  console.log(list.getItems());

  await list.save();
}

main()
  .then(() => console.log("Succeed. Problem fixed"))
  .catch((error) => console.error("ERROR :", error));
