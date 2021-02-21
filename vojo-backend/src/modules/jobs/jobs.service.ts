import IJobs from './interface/jobs.interface';
import JobsRepository from './infra/entities/repositories/JobsRepository'

export class JobsService {
    constructor(
        private jobsRepository: JobsRepository,
    ){}

    async getAllJobs(): Promise<Array<IJobs>> {
        const jobs = await this.jobsRepository.find()

        return jobs
    }

    async updateJob(data): Promise<void> {
        const jobUpdate = await this.jobsRepository.update(data);
        // return jobUpdate
    }
}




// import { Injectable } from '@nestjs/common'
// import { InjectModel } from '@nestjs/mongoose'
// import { Model } from 'mongoose'
// import IJobs from './interface/jobs.interface';


// @Injectable()
// export class JobsService {
//     constructor(
//         @InjectModel('Jobs')
//         private readonly jobModel: Model<IJobs>,
//     ){}

//     async getAllJobs(): Promise<Array<IJobs>> {
//         const jobs = await this.jobModel.find().exec()

//         return jobs
//     }

//     async updateJob({ id, body }): Promise<IJobs> {
//         const jobUpdate = await this.jobModel.update({_id: id}, {...body});
//         return jobUpdate
//     }
// }