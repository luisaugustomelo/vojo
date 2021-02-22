import { IJobs } from '../interface/jobs.interface'
import { ISendData } from '../interface/senddata.interface';
import { IUpdatedData } from '../interface/updated.data.interface'
export interface IJobsRepository {
    find(): Promise<IJobs[] | undefined>
    findOne(id: string): Promise<IJobs | undefined>
    create(data: IJobs): Promise<IJobs | undefined>
    update(data: ISendData): Promise<IUpdatedData>
}
