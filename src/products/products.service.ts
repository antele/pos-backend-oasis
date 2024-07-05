import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from '../categories/entities/category.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>,
    // @InjectRepository(Category)
    // private readonly categoryRepository:Repository<Category>
  ){}
 

  async create(createProductDto: CreateProductDto) {
    // const {category}  = createProductDto.category
    try {
    //   const category = await this.categoryRepository.findOne({where:{id:createProductDto.category}});
    // if (!category) {
    //   throw new NotFoundException(`Category with ID ${createProductDto.category} not found`);
    // }
      
      const newProduct =await this.productRepository.save(createProductDto)
      return {status:HttpStatus.OK, message:'Producto creado correctamente'};
    } catch (error) {
      throw new Error(error)
    }
   
  }
  async createAllProducts(products:CreateProductDto[]){
    const createUsers= await this.productRepository.save(products)
    return createUsers
  }

  async findAll() {
    
      const products =await this.productRepository.find({
        relations:{category:true},
        
      })
      const listProducts = products.map(product => ({
        ...product,
        category: product.category.category,
        price: +product.price
      }));
      
      return listProducts
    
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
