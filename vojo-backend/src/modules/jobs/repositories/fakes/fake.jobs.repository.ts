import { uuid } from 'uuidv4'
import { IJobsRepository } from '../repository.interface'
import { ISendData } from '../../interface/senddata.interface'
import { IJobs } from '../../interface/jobs.interface'
import { CreateJobDto } from '../../dtos/job-create-dto'
import { IUpdatedData } from '../../interface/updated.data.interface'

export class FakeJobsRepository implements IJobsRepository {
    private jobs: IJobs[] = []
    public async find(): Promise<IJobs[] | undefined> {
        return this.jobs
    }

    public async findOne(id: string): Promise<IJobs | undefined> {
        const findJob = this.jobs.find(job => job._id === id)

        return findJob
    }

    public async create(data: IJobs): Promise<IJobs | undefined> {
        const job = new CreateJobDto() as IJobs

        Object.assign(job, { id: uuid(), ...data })
        this.jobs.push(job)

        return job
    }

    public async update({ id, data }: ISendData): Promise<IUpdatedData> {
        const jobIndex = this.jobs.findIndex(job => job.id === id)

        this.jobs[jobIndex] = data as IJobs

        const returnObject = {
            n: 1,
            nModified: 1,
            ok: 1
        }
        return returnObject
    }
}

