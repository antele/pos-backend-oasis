import { Product } from './../products/entities/product.entity';
import { BadRequestException, HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { In, Repository } from 'typeorm';
import { OrderProduct } from './entities/order-products.entity';
import { User } from 'src/user/entities/user.entity';

import { OrderStatus } from 'src/common/enum/enum';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: Repository<OrderProduct>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(createOrderDto: CreateOrderDto) {


    const user = await this.userRepository.findOneBy({ id: createOrderDto.user });
    if (!user) {
      throw new Error('User not found');
    }

    const order = this.orderRepository.create({
      user,
      table: createOrderDto.table,
      createdAt: new Date(),
      subTotal: 0,
      total: 0,
    });

    await this.orderRepository.save(order);

    const products = await Promise.all(
      createOrderDto.products.map(async (productDto) => {
        const product = await this.productRepository.findOneBy({ id: productDto.id });
        if (!product) {
          throw new Error('Product not found');
        }

        const orderProduct = this.orderProductRepository.create({
          product,
          quantity: productDto.quantity,
          total: product.price * productDto.quantity,
          order,
        });

        return orderProduct;
      })
    );

    await this.orderProductRepository.save(products);

    // Calculate and update the order totals
    order.products = products;
    order.subTotal = products.reduce((sum, p) => sum + p.total, 0);
    order.total = order.subTotal; // Update if needed for discounts, taxes, etc.

    // Save the updated order
    //await this.orderRepository.save(order);


    return { status: HttpStatus.OK, message: 'CPedido creado' };
  }

  async findAll() {
    const orders = await this.orderProductRepository.find({
      where: {
        inProcess: In([OrderStatus.PENDIENTE, OrderStatus.RECIBIDA])
      }, relations: {
        product: true,
        order: true
      }, order: { createdAt: 'DESC' }
    })
    return orders.map((order) => ({
      id: order.id,
      inProcess: order.inProcess,
      quantity: +order.quantity,
      total: +order.total,
      product: order.product.product,
      table: order.order.table
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async update(id: string, inProcess?: OrderStatus) {

    const order = await this.orderProductRepository.findOneBy({ id })
    if (!order) throw new BadRequestException('El numero de orden no se encuentra')

    if (inProcess !== undefined) {
      order.inProcess = inProcess;
    }

    await this.orderProductRepository.save(order)
    return { status: HttpStatus.OK, message: 'Registro actualizado' };
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
