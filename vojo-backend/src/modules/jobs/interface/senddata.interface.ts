// import { CreateJobDto } from '../dtos/job-create-dto';
import { UpdateJobDto } from '../dtos/job-update-dto';
import { IUser } from '@/modules/users/interfaces/user.interface'

export interface ISendData {
    id?: string,
    data: Omit<UpdateJobDto, '_id'>
    user?: IUser
}