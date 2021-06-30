import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],//os servicos ficam disponiveis para toda aplicacao
})
export class AppModule {}
