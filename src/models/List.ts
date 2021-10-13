import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderedItem } from "./OrderedItem";

@Entity("lists")
export class List extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  name: string;

  @OneToMany("OrderedItem", "list")
  orderedItems: OrderedItem[];

  getItems() {
    return this.orderedItems
      .sort((a, b) => a.order - b.order)
      .map((oi) => oi.item);
  }
}
