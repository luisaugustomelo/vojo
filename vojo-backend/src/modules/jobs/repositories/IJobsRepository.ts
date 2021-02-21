// import Job from '../dtos/job-create-dto';
import { IJobs } from '../interface/jobs.interface'
import ISendData from '../interface/senddata.interface';
export interface IJobsRepository {
    find(): Promise<IJobs[] | undefined>;
    create(data: IJobs): Promise<IJobs | undefined>;
    update(data: ISendData): Promise<void>;
}
