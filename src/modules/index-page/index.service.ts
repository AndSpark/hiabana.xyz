import { Injectable } from '@nestjs/common'
import { render } from 'ssr-core-vue3'
import { Readable } from 'stream'
import { Request, Response } from 'express'

@Injectable()
export class ApiService {
	async render(req: Request, res: Response) {
		try {
			const ctx = {
				request: req,
				response: res
			}
			const stream = await render<Readable>(ctx, {
				stream: true
			})
			stream.pipe(res, { end: false })
			stream.on('end', () => {
				res.end()
			})
		} catch (error) {
			if (error.message.includes('search component failed')) {
				res.redirect('/404')
			}
			res.status(500).send(error)
		}
	}
}
