import { uuid } from 'uuidv4'
import { IJobsRepository } from '../IJobsRepository'
import ISendData from '../../interface/senddata.interface'
import { IJobs } from '../../interface/jobs.interface'
import Job from '../../dtos/job-create-dto'

export class FakeJobsRepository implements IJobsRepository {
    private jobs: IJobs[] = []
    public async find(): Promise<IJobs[] | undefined> {
        return this.jobs
    }
    public async create(data: IJobs): Promise<IJobs | undefined> {
        const job = new Job() as IJobs

        Object.assign(job, { id: uuid(), ...data })
        this.jobs.push(job)

        return job
    }
    public async update({ id, data }: ISendData): Promise<void> {
        const jobIndex = this.jobs.findIndex(job => job.id === id)
        
        this.jobs[jobIndex] = data as IJobs
    }
}

