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
     * @param ISendData (structure: id: string and data: CreateJobDto)
     * 
     */
    async update({ id, data }: ISendData): Promise<IUpdatedData> {
        // pegar o id do usuário passado no token, para realizar o save no updatedBy
        // verificar se existe o id antes de realizar o salvamento, com isso será possível casar em um throw
        const updatedJob = await this.jobsRepository.update({ id, data })
        console.log(updatedJob)
        const { nModified } = updatedJob;

        if(!nModified) {
            throw new Error('Não foi possível atualizar o job')
        }
        
        return updatedJob
    }

    async create(data: IJobs): Promise<IJobs | undefined> {
        const job = await this.jobsRepository.create(data)
        return job
    }
}