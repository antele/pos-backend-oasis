import { Category } from "src/categories/entities/category.entity";
import { OrderProduct } from "src/orders/entities/order-products.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  product: string

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  image: string;

  @Column('decimal', { nullable: false })
  price: number;

  @ManyToOne(
    () => Category,
    (category) => category.category)
  category: Category
 

  @CreateDateColumn({ default: new Date() })
  createdAt: Date;

  @UpdateDateColumn({ default: new Date() })
  updatedAt: Date

  @OneToMany(
    () => OrderProduct,
    (orderProduct) => orderProduct.product
  )
  orderProduct: OrderProduct

}
