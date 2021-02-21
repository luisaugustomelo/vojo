// import IJobs from './interface/jobs.interface';
// import JobsRepository from './infra/entities/repositories/JobsRepository'

// export class JobsService {
//     constructor(
//         private jobsRepository: JobsRepository,
//     ){
//         this.jobsRepository = new JobsRepository()
//     }

//     async getAllJobs(): Promise<Array<IJobs>> {
//         console.log(this.jobsRepository);
//         const jobs = await this.jobsRepository.find()

//         return jobs
//     }

//     async updateJob(data): Promise<void> {
//         const jobUpdate = await this.jobsRepository.update(data);
//         // return jobUpdate
//     }
// }


import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import IJobs from './interface/jobs.interface';


@Injectable()
export class JobsService {
    constructor(
        @InjectModel('Jobs')
        private readonly jobModel: Model<IJobs>,
    ){}

    async showAll(): Promise<Array<IJobs>> {
        const jobs = await this.jobModel.find().exec()

        return jobs
    }

    async update(id: string, data: IJobs): Promise<IJobs> {
        delete data._id
        const jobUpdate = await this.jobModel.update({ _id: id }, data)
        return jobUpdate
    }

    async create(data: IJobs): Promise<IJobs> {
        const job = await this.jobModel.create(data)
        return job
    }
}