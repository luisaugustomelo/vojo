import { Controller, Get, HttpStatus, Res, Put, Body, Param, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Response } from 'express';

import { JobsService } from './jobs.service'
// import UpdateJobDto from './dtos/job-update.dto'
import { IJobs } from './interface/jobs.interface'

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
  async updateJob(@Body() jobData: IJobs, @Param() { id }): Promise<object> {
    const job = await this.jobsService.update(id, jobData)

  return { job }
  }
}