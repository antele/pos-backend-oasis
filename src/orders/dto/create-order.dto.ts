import { Type } from "class-transformer";
import { IsArray, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID, ValidateNested } from "class-validator"

class CreateOrderProductDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  quantity: number;
  @IsNumber()
  price:number
}

export class CreateOrderDto {
 
  @IsInt()
  @IsPositive()
  table:number
  @IsUUID() 
  user:string

  @IsNumber()
  subTotal:number

  @IsNumber()
  total:number

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderProductDto)
  products: CreateOrderProductDto[];

}
