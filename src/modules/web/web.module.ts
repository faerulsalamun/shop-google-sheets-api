import { Module } from '@nestjs/common';
import { WebController } from './controller/web.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Web, WebScheme } from './schema/web.schema';
import { WebService } from './service/web.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Web.name, schema: WebScheme }])],
  controllers: [WebController],
  providers: [WebService],
})
export class WebModule {
}
