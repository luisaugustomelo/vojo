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

    async update(id: string, data: IJobs): Promise<void> {
        delete data._id
        await this.jobsRepository.update({ id, data})
    }
}