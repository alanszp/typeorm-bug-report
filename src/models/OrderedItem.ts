import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Item } from "./Item";
import { List } from "./List";

@Entity("ordered_items")
export class OrderedItem extends BaseEntity {
  @PrimaryColumn()
  public listId: string;

  @PrimaryColumn()
  public itemId: string;

  @Column()
  order: number;

  @ManyToOne("List", "orderedItems")
  list: List;

  @ManyToOne("Item", "orderedItems")
  item: Item;
}
