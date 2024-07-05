
import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { OrderStatus } from "src/common/enum/enum";

@Entity()
export class OrderProduct{
  @PrimaryGeneratedColumn('uuid')
  id:string
  
  @ManyToOne(
    ()=>Product,
    (product)=>product.id
  )
  product:Product

  @Column('int',{default:1})
  quantity:number

  @CreateDateColumn({default: new Date()})
  createdAt:Date;

  
  @Column('enum',{default: OrderStatus.PENDIENTE, enum:OrderStatus})
  inProcess:OrderStatus

  @Column('decimal')
  total:number

  @ManyToOne(
    ()=>Order,
    (order)=>order.id
  )
  order:Order
}