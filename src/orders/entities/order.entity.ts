import { User } from "src/user/entities/user.entity";
import { Column, Entity,CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { OrderProduct } from "./order-products.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id:string

  @CreateDateColumn({default: new Date()})
  createdAt:Date;

  @Column('int')
  table:number

  @ManyToOne(
    ()=>User,
    (user)=>user.id
  )
  user:User

  @Column('decimal',{nullable:true})
  subTotal:number

  @Column('decimal',{nullable:true})
  total:number

  @OneToMany(
    ()=>OrderProduct,
    (orderProduct)=>orderProduct.product
  )
  products:OrderProduct[]
}
