
import { IsNotEmpty, IsObject, IsString, IsNumber, IsUrl, IsOptional, IsPositive, IsNotEmptyObject } from 'class-validator'
import { ICompensation } from '../interface/compensation.interface'
import { ILocation } from '../interface/location.interface'

export class UpdateJobDto {
    
    readonly _id?: string

    readonly active ?: boolean

    readonly open ?: boolean

    @IsNotEmpty()
    @IsObject()
    @IsNotEmptyObject()
    readonly compensation: ICompensation

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly totalSpots: number

    @IsNotEmpty()
    @IsString()
    readonly title: string

    @IsNotEmpty()
    @IsString()
    readonly information: string

    readonly assignments ?: Array < string >

    readonly description ?: Array < string >

    @IsNotEmpty()
    @IsObject()
    @IsNotEmptyObject()
    readonly location: ILocation

    @IsNotEmpty()
    @IsString()
    readonly education: string

    @IsNotEmpty()
    @IsString()
    readonly company: string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    readonly __v?: number

    readonly isActive ?: boolean

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    readonly imageUrl: string

    @IsNotEmpty()
    @IsString()
    workingHours: string
    
    createdBy ?: string

    updatedBy ?: string
}