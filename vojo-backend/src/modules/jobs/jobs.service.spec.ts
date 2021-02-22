import { FakeJobsRepository } from './repositories/fakes/FakeJobsRepository'
import { JobsService } from './jobs.service'
import { IJobs } from './interface/jobs.interface'
import { mock } from './repositories/fakes/FakeJobsData'

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

        await jobsService.create(mock as IJobs)

        const jobs = await jobsService.showAll()
        expect(jobs.length).toBe(1)
    })

    it('should to be able to create a new job', async () => {

        const jobsRepository = new FakeJobsRepository()
        const jobsService = new JobsService(jobsRepository)

        const createJob = await jobsService.create(mock as IJobs)
        expect(createJob).toHaveProperty('active')
        expect(createJob).toHaveProperty('imageUrl')
        expect(createJob).toHaveProperty('createdBy')
        expect(createJob).toHaveProperty('_id')
    })

    it('should to be able to update a job', async () => {

        const jobsRepository = new FakeJobsRepository()
        const jobsService = new JobsService(jobsRepository)

        expect(await jobsService.create(mock as IJobs)).toBeInstanceOf(Object)
        
        const updateJob = await jobsService.update('5eb5c23e893c9e00211c0b93', { education: 'Ensino médio' } as IJobs)

        expect(updateJob).toBeInstanceOf(Object)
    })
})