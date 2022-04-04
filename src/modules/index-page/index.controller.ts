import { HttpExceptionFilter } from '@/filter/http-exception.filter'
import { Controller, Get, Req, Res, UseFilters } from '@nestjs/common'
import { Request, Response } from 'express'

import { ApiService } from './index.service'

@Controller('/')
export class AppController {
	constructor(private readonly apiService: ApiService) {}

	@UseFilters(HttpExceptionFilter)
	@Get('*')
	async handlerIndex(@Req() req: Request, @Res() res: Response): Promise<any> {
		await this.apiService.render(req, res)
	}
}
