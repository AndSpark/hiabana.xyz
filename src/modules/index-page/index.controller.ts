import { Controller, Get, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'

import { ApiService } from './index.service'

@Controller('/')
export class AppController {
	constructor(private readonly apiService: ApiService) {}

	@Get(['/', '/post', '/post/:id', '/error', '/cv'])
	async handlerIndex(@Req() req: Request, @Res() res: Response): Promise<any> {
		await this.apiService.render(req, res)
	}

	// @Get('*')
	// @Redirect('/error?code=404')
	// handle() {}
}
