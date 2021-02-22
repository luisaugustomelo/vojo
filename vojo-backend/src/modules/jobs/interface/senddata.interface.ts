import { CreateJobDto }  from '../dtos/job-create-dto';

export interface ISendData {
    id: string,
    data: Omit<CreateJobDto, '_id'>
}