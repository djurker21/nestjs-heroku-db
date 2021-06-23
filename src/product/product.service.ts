import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    await this.productsRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: number) {
    return await this.productsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: number) {
    await this.productsRepository.delete(id);
  }
}
