import { HttpException } from '@nestjs/common'
import { FakeJobsRepository } from './repositories/fakes/fake.jobs.repository'
import { JobsService } from './jobs.service'
import { IJobs } from './interface/jobs.interface'
import { ISendData } from './interface/senddata.interface'
import { mock } from './repositories/fakes/fake.jobs.data'
import { IUser } from '@/modules/users/interfaces/user.interface'

describe('Jobs Service', () => {
    it('should to be able to get all jobs and check if is empty (has no data)', async () => {

        const jobsRepository = new FakeJobsRepository()
        const jobsService = new JobsService(jobsRepository)

        const jobs = await jobsService.showAll()
        expect(jobs).toStrictEqual([])
    })

    it('should to be able to get all jobs', async () => {

        const jobsRepository = new FakeJobsRepository()
        const jobsService = new JobsService(jobsRepository)

        const data = mock as IJobs
        const user = {
            _id: '5eb5c23e893c9e00211c0b93',
            email: 'johndoe@example.com',
            cellphone: '11123456789',
            firstName: 'john',
            lastName: 'doe',
            password: '1234567',
            isActive: true
        } as IUser

        await jobsService.create({ data, user })

        const jobs = await jobsService.showAll()
        expect(jobs.length).toBe(1)
    })

    it('should to be able to create a new job', async () => {

        const jobsRepository = new FakeJobsRepository()
        const jobsService = new JobsService(jobsRepository)

        const data = mock as IJobs
        const user = {
            _id: '5eb5c23e893c9e00211c0b93',
            email: 'johndoe@example.com',
            cellphone: '11123456789',
            firstName: 'john',
            lastName: 'doe',
            password: '1234567',
            isActive: true
        } as IUser

        const createJob = await jobsService.create({ data, user })
        expect(createJob).toHaveProperty('active')
        expect(createJob).toHaveProperty('imageUrl')
        expect(createJob).toHaveProperty('createdBy')
        expect(createJob).toHaveProperty('_id')
    })

    it('should to be able to update a job', async () => {

        const jobsRepository = new FakeJobsRepository()
        const jobsService = new JobsService(jobsRepository)

        const data = mock as IJobs
        const user = {
            _id: '5eb5c23e893c9e00211c0b93',
            email: 'johndoe@example.com',
            cellphone: '11123456789',
            firstName: 'john',
            lastName: 'doe',
            password: '1234567',
            isActive: true
        } as IUser

        expect(await jobsService.create({ data, user })).toBeInstanceOf(Object)

        const updateJob = await jobsService.update({ id: '5eb5c23e893c9e00211c0b93', data: { education: 'Ensino médio' }, user } as ISendData)

        expect(updateJob).toBeInstanceOf(Object)
    })

    it('should not be able to find job to update', async () => {

        const jobsRepository = new FakeJobsRepository()
        const jobsService = new JobsService(jobsRepository)

        const data = mock as IJobs
        const user = {
            _id: '5eb5c23e893c9e00211c0b93',
            email: 'johndoe@example.com',
            cellphone: '11123456789',
            firstName: 'john',
            lastName: 'doe',
            password: '1234567',
            isActive: true
        } as IUser

        expect(await jobsService.create({ data, user })).toBeInstanceOf(Object)

        await expect(jobsService.update(
            {
                id: 'doesnt-exists-job',
                data: { education: 'Ensino médio' }, user
            } as ISendData)).rejects.toBeInstanceOf(HttpException)

        await expect(jobsService.update(
            {
                id: 'doesnt-exists-job',
                data: { education: 'Ensino médio' }, user
            } as ISendData)).rejects.toThrowError('Não existe um job com o identificador especificado')
    })
})