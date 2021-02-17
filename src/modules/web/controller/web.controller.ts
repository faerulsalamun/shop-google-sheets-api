import { Controller, Delete, Get, Put, Req, Res } from '@nestjs/common';
import { WebService } from '../service/web.service';
import { Web } from '../schema/web.schema';

@Controller('/api/v1/webs')
export class WebController {
  constructor(private readonly webService: WebService) {
  }

  @Get('/')
  async findAll(@Req() req): Promise<Web[]> {
    return await this.webService.findAll(req.query.offset, req.query.limit);
  }

  @Put('/')
  async update(@Req() req,
               @Res() res): Promise<any> {
    return await this.webService.update(req.body);
  }

  @Delete('/')
  async delete(@Req() req,
               @Res() res): Promise<any> {
    return await this.webService.delete(req.body);
  }
}
