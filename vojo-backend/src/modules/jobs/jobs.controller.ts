import { Controller, Get, HttpStatus, Res, Put, Body, Param, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Response } from 'express';
import { GetUser } from '../auth/decorators/get-user.decorator'
import { JobsService } from './jobs.service'
import { IUser } from '@/modules/users/interfaces/user.interface'
import { UpdateJobDto } from './dtos/job-update-dto'

@Controller('v3/jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) { }

  @Get('')
  async readMe(@Res() res: Response) {
    const jobs = await this.jobsService.showAll()
    res.status(HttpStatus.OK).json(jobs);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateJob(@Body() jobData: UpdateJobDto, @Param() { id }, @GetUser() user: IUser): Promise<object> {
    const job = await this.jobsService.update({ id, data: jobData, user })

    return { job }
  }
}