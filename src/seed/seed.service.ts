import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/data.seed';
import { ProductsModule } from '../products/products.module';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';


@Injectable()
export class SeedService {
  
  async runSeed(){
   await this.insertNewProducts()
  
   
   // return 'SEED EXECUTED'
  }

  private async insertNewProducts( ) {
   
    const products = initialData.products
    

    return true;
  }
}
