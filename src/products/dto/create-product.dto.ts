import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { Category } from "src/categories/entities/category.entity";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  product: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsString()
  image?: string

  @IsPositive()
  @IsNotEmpty()
  category: Category

  @CreateDateColumn({ type: 'timestamp with local time zone', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;
  @UpdateDateColumn()
  update_at: Date
}
