import { Controller, Get, HttpStatus, Res, Put, Body } from '@nestjs/common'
import { Response } from 'express';

import { JobsService } from './jobs.service'
import UpdateJobDto from './dtos/job-update.dto'

@Controller('v3/jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) { }

  @Get('')
  async readMe(@Res() res: Response) {
    const jobs = await this.jobsService.getAllJobs()
    res.status(HttpStatus.OK).json(jobs);
  }

  @Put('')
  async updateJob(@Body() updateJobDto: UpdateJobDto): Promise<object> {
    console.log(updateJobDto)

  return { data: null }
  }
}