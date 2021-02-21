
import { JwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport'

import { JobsController } from './jobs.controller'
import { JobsService } from './jobs.service'
import { JobSchema } from './infra/entities/schemas/jobs.schema'

@Module({
    imports: [
      PassportModule.register({
        defaultStrategy: 'jwt'
      }),
      JwtModule.register({
        secret: process.env.JWT_SECRETKEY
      }),
      MongooseModule.forFeature([{ name: 'Jobs', schema: JobSchema, collection: 'jobs' }])
    ],
    controllers: [JobsController],
    providers: [JobsService],
    exports: [PassportModule]
  })

export class JobsModule { }


