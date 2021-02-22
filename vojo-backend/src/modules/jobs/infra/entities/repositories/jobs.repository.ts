import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { IJobs } from '../../../interface/jobs.interface'
import { ISendData } from '../../../interface/senddata.interface'
import { IJobsRepository } from '../../../repositories/repository.interface'
import { IUpdatedData } from '../../../interface/updated.data.interface'

@Injectable()
export class JobsRepository implements IJobsRepository {
    
    constructor(@InjectModel('Jobs')
    private readonly repository: Model<IJobs>){}

    public async find(): Promise<Array<IJobs>> {
        const jobs = await this.repository.find().exec()
        return jobs
    }

    public async findOne(id: string): Promise<IJobs | undefined> {
        const job = await this.repository.findById(id)
        return job
    }

    public async update({ id, data }: ISendData): Promise<IUpdatedData> {
        const updateJob = await this.repository.updateOne({_id: id}, { ...data })
        return updateJob

    }

    public async create(data: IJobs): Promise<IJobs | undefined> {
        const createJob = await this.repository.create({ ...data })
        return createJob
    }
}
