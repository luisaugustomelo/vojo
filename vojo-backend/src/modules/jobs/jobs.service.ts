import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common'
import { IJobs } from './interface/jobs.interface'
import { IJobsRepository } from './repositories/repository.interface'
import { ISendData } from './interface/senddata.interface'
import { IUpdatedData } from './interface/updated.data.interface'

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

    async update({ id, data, user }: ISendData): Promise<IUpdatedData> {
        const findJob = await this.jobsRepository.findOne(id)

        if(!findJob) {
            throw new HttpException('Não existe um job com o identificador especificado', HttpStatus.BAD_REQUEST)
        }

        data.updatedBy = user._id

        const updatedJob = await this.jobsRepository.update({ id, data })

        const { nModified } = updatedJob;

        if(!nModified) {
            throw new HttpException('Não foi possível atualizar o job', HttpStatus.BAD_REQUEST)
        }
        
        return updatedJob
    }

    async create({ data, user }: ISendData): Promise<IJobs | undefined> {
        data.updatedBy = data.createdBy = user._id

        const job = await this.jobsRepository.create(data as IJobs)

        if(!job) {
            throw new Error('Ocorreu um erro ao criar o job')
        }

        return job
    }
}