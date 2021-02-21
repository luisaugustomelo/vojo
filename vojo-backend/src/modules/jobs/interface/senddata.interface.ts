import UpdateJobDto  from '../dtos/job-update.dto';

export default interface ISendData {
    id: string,
    data: UpdateJobDto
}