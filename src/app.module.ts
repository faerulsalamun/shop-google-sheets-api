import { Module } from '@nestjs/common';
import { WebModule } from './modules/web/web.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/faerulshop'),
    WebModule,
  ],
})
export class AppModule {
}


