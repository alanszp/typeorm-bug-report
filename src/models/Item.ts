import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderedItem } from "./OrderedItem";

@Entity("items")
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  description: string;

  @OneToMany("OrderedItem", "item")
  orderedItems: OrderedItem[];
}
