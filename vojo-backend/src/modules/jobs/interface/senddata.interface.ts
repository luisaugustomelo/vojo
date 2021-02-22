import { CreateJobDto }  from '../dtos/job-create-dto';
import { IUser } from '@/modules/users/interfaces/user.interface'

export interface ISendData {
    id?: string,
    data: Omit<CreateJobDto, '_id'>
    user?: IUser
}