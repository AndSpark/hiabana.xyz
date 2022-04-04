import { ApiService } from '@/modules/index-page/index.service'
import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
	BadGatewayException
} from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		console.log('Before...')

		const now = Date.now()
		return next
			.handle()
			.pipe(
				catchError(err => {
					if (err.message.includes('search component failed')) {
						const req = context.switchToHttp().getRequest()
						const res = context.switchToHttp().getResponse()
						console.log(req)
						return 'err'
						return new ApiService().render(req, res)
					}
					return throwError(() => new BadGatewayException(err))
				})
			)
			.pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)))
	}
}
