import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderStatus } from 'src/common/enum/enum';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService
  
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    // console.log(createOrderDto)
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('inProcess') inProcess:OrderStatus) {
    if (!Object.values(OrderStatus).includes(inProcess)) {
      throw new BadRequestException('Invalid order status');
    }
     return this.ordersService.update(id, inProcess);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
