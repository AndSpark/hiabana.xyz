import { Module } from '@nestjs/common'
import { indexModule } from './modules/index-page/index.module'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [indexModule, ConfigModule.forRoot()]
})
export class AppModule {}
