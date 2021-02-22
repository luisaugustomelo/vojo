import { Injectable, Inject } from '@nestjs/common'
import { IJobs } from './interface/jobs.interface'
import { IJobsRepository } from './repositories/IJobsRepository'
import { ISendData } from './interface/senddata.interface'
import { IUpdatedData } from './interface/updated.data'

@Injectable()
export class JobsService {
    constructor(
        @Inject('JobsRepository')
        private jobsRepository: IJobsRepository,
    ){}

    /**
     * Input: nothing
     * Output: Array with 0 or N elements
     */
    async showAll(): Promise<Array<IJobs>> {
        const jobs = await this.jobsRepository.find()

        return jobs
    }

    /**
     * @param ISendData (structure: id: string; data: CreateJobDto; user: IUser)
     * Input: ISendData
     * Output: updatedStatus -> Obs: if job was updated nModified is 1, else 0
     */
    async update({ id, data, user }: ISendData): Promise<IUpdatedData> {
        const findJob = await this.jobsRepository.findOne(id)

        if(!findJob) {
            throw new Error('Não existe um job com o identificador especificado')
        }

        data.updatedBy = user._id

        const updatedJob = await this.jobsRepository.update({ id, data })

        const { nModified } = updatedJob;

        if(!nModified) {
            throw new Error('Não foi possível atualizar o job')
        }
        
        return updatedJob
    }

    /**
     * 
     * @param IJobs
     *  Input: IJobs
     *  Output: IJobs ou undefined
     */
    async create({ data, user }: ISendData): Promise<IJobs | undefined> {
        data.updatedBy = user._id
        data.createdBy = user._id

        const job = await this.jobsRepository.create(data as IJobs)

        if(!job) {
            throw new Error('Ocorreu um erro ao criar o job')
        }

        return job
    }
}