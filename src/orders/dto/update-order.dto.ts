import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsUUID } from 'class-validator';
import { OrderStatus } from 'src/common/enum/enum';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {  
  
}


