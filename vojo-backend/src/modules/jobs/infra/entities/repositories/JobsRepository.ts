import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import IJobs from '../../../interface/jobs.interface'
import ISendData from '../../../interface/senddata.interface'
import IJobsRepository from '../../../repositories/IJobsRepository'

@Injectable()
class JobsRepository implements IJobsRepository {

    constructor(@InjectModel('Jobs')
    private readonly repository: Model<IJobs>,) {}

    public async find(): Promise<Array<IJobs>> {
        const jobs = await this.repository.find().exec()

        return jobs
    }

    public async update({ id, data}: ISendData): Promise<void> {
        await this.repository.update({_id: id}, { data });
    }

    public async create(data: IJobs): Promise<IJobs | undefined> {
        const jobCreate = await this.repository.create({ ...data });

        return jobCreate;
    }
}

export default JobsRepository;