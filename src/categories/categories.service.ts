import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

  constructor(
@InjectRepository(Category)
private readonly categoryReposotory:Repository<Category>
  ){}

 async create(createCategoryDto: CreateCategoryDto) {
  const {category}=createCategoryDto
    const categoryFind= await this.categoryReposotory.findOne({where:{category}})
    if(categoryFind) throw new BadRequestException('La categoria ya se encuentra registrada')
      const newCategory= await this.categoryReposotory.save(createCategoryDto)
    return  {status:HttpStatus.OK, message:'Categoria creada correctamente'};
  }

  async findAll() {
    const categories=await this.categoryReposotory.find({order:{id:'ASC'}})
    return categories;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
