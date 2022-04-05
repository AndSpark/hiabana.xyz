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
			console.log(error)
			if (req.url.includes('/error?code=500')) {
				res.status(500).send(error)
			} else if (error.message.includes('search component failed')) {
				res.redirect('/error?code=404')
			} else {
				res.redirect('/error?code=500&msg=' + error.message)
			}
		}
	}
}
