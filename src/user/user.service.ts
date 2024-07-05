import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const {username, password}= createUserDto
    const userFind =await this.findByUserName(username)
    if(userFind) throw new BadRequestException('El nombre de usuario ya se encuentra registrado')
    
      const user= this.userRepository.create(createUserDto)
      const hash= await bcrypt.hash(password, 8)
      const newUser=await this.userRepository.save({
        ...user,
        password:hash
      }) 
  
      return {status:HttpStatus.OK, message:'Usuario creado correctamente'};
  }

  async findByUserName(username:string){
    const user= await this.userRepository.findOne({where:{username}})     
    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
