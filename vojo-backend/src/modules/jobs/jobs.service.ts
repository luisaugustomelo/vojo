import { Injectable, Inject } from '@nestjs/common'
import { IJobs } from './interface/jobs.interface'
import { IJobsRepository } from './repositories/IJobsRepository'

@Injectable()
export class JobsService {
    constructor(
        @Inject('JobsRepository')
        private jobsRepository: IJobsRepository,
    ){}

    async showAll(): Promise<Array<IJobs>> {
        const jobs = await this.jobsRepository.find()

        return jobs
    }

    async update(id: string, data: IJobs): Promise<object> {
        delete data._id
        const job = await this.jobsRepository.update({ id, data})
        return job
    }

    async create(data: IJobs): Promise<IJobs | undefined> {
        const job = await this.jobsRepository.create(data)
        return job
    }
}