
import { ICompensation } from '../interface/compensation.interface'
import { ILocation } from '../interface/location.interface'
import IJob from '../interface/jobs.interface'

export default class CreateJobDto {
    readonly id: string
    
    readonly compensation: ICompensation

    readonly active: boolean

    readonly open: boolean

    readonly assignments: Array<string>

    readonly totalSpots: number

    readonly title: string

    readonly information: string

    readonly location: ILocation

    readonly education: string

    readonly company: string

    readonly __v: number

    readonly imageUrl: string

    readonly description: Array<string>

    readonly isActive: boolean

    readonly createdBy: string

    readonly updatedBy: string
}
