import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Web } from '../schema/web.schema';

@Injectable()
export class WebService {
  constructor(@InjectModel(Web.name) private webModel: Model<Web>) {
  }

  async update(data: any): Promise<any> {
    const web = await this.webModel.findOne({
      row: data.row - 1,
    }).exec();

    if (!web) {
      let dataWeb = {
        row: data.row - 1,
      };

      if (data.column === 1) {
        // @ts-ignore
        dataWeb.title = data.data;
      } else if (data.column === 2) {
        // @ts-ignore
        dataWeb.description = data.data;
      } else if (data.column === 3) {
        // @ts-ignore
        dataWeb.image = data.data;
      }

      const createdCat = new this.webModel(dataWeb);
      await createdCat.save();
    } else {
      if (data.column === 1) {
        web.title = data.data;
      } else if (data.column === 2) {
        web.description = data.data;
      } else if (data.column === 3) {
        web.image = data.data;
      }

      await web.save();
    }
  }

  async delete(data: any): Promise<any> {
    await this.webModel.deleteOne({
      row: data.row - 1,
    }).exec();

    await this.webModel.update({
      row: { $gt: data.row - 1 },
    }, {
      $inc: { row: -1 },
    }).exec();
  }

  async findAll(offset: number = 0, limit: number = 5): Promise<Web[]> {
    return await this.webModel.find().skip(offset * limit).limit(limit).exec();
  }
}
