import { FakeJobsRepository } from './repositories/fakes/FakeJobsRepository'
import { JobsService } from './jobs.service'

describe('Jobs Service', () => {
    it('should to be able to get all jobs', async () => {

        const jobsRepository = new FakeJobsRepository()
        const jobsService = new JobsService(jobsRepository)

        const jobs = await jobsService.showAll()
        expect(jobs).toStrictEqual([])

    })
})

// import { Test, TestingModule } from '@nestjs/testing';
// import { MongooseModule } from '@nestjs/mongoose';

// import { JobsService } from './jobs.service';
// import { closeInMongodConnection, rootMongooseTestModule } from './MongooseTestModule';
// import { JobSchema } from './infra/entities/schemas/jobs.schema';
// import { IJobs } from './interface/jobs.interface'

// const mock: object = {
//     assignments: [],
//     isActive: true,
//     _id: "5eb5c23e893c9e00211c0b93",
//     compensation: {
//         amount: 3490,
//         currency: "R$",
//         recurrency: "por mês",
//         isVariable: false
//     },
//     active: true,
//     open: false,
//     totalSpots: 100,
//     title: "Aulas particulares de Espanhol",
//     information: "Dar aulas de espanhol",
//     location: {
//         city: "Alegre",
//         state: "ES",
//         country: "Brasil"
//     },
//     education: "Ensino médio",
//     company: "mindlab vojo",
//     createdBy: "5dcc197e522ae62b4c0166a7",
//     updatedBy: "601c7c904fea032e98d2cd27",
//     createdAt: "Fri May 08 2020 17:34:06 GMT-0300 (Horário Padrão de Brasília)",
//     updatedAt: "Wed Feb 17 2021 12:58:37 GMT-0200 (GMT-02:00)",
//     __v: 3,
//     imageUrl: "https://static.vojo.com.br/dev/images/servicosGerais.png"
// }

// describe('JobsService', () => {
//     let service: JobsService;

//     beforeEach(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             imports: [
//                 rootMongooseTestModule(),
//                 MongooseModule.forFeature([{ name: 'Jobs', schema: JobSchema }]),
//             ],
//             providers: [JobsService],
//         }).compile();

//         service = module.get<JobsService>(JobsService);
//     });

//     it('should be defined', async () => {
//         expect(service).toBeDefined()
//         // const job = await service.create(mock)
//         expect((await service.showAll()).length).toBe(0);

//         expect(1 + 2).toBe(3)
//     });

//     afterAll(async () => {
//         await closeInMongodConnection();
//     });
// });