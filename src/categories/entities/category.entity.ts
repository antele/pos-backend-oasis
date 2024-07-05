import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  id:number

  @Column('text')
  category:string;

  @Column('boolean',{default:true})
  status:boolean;

  @OneToMany(
    ()=>Product,
    (product)=>product.category )
  products:Product
}
