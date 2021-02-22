
import { IsNotEmpty, IsObject, IsString, IsBoolean, IsArray, IsNumber, IsUrl, IsDecimal, IsOptional, IsPositive, IsNotEmptyObject, IsDateString } from 'class-validator'
import { ICompensation } from '../interface/compensation.interface'
import { ILocation } from '../interface/location.interface'

export class CreateJobDto {
    @IsNotEmpty()
    @IsString()
    readonly _id?: string
    
    @IsNotEmpty()
    @IsObject()
    @IsNotEmptyObject()
    readonly compensation: ICompensation

    @IsNotEmpty()
    @IsBoolean()
    readonly active?: boolean

    @IsNotEmpty()
    @IsBoolean()
    readonly open?: boolean

    @IsNotEmpty()
    @IsArray()
    readonly assignments?: Array<string>

    @IsNotEmpty()
    @IsString()
    @IsDecimal()
    @IsPositive()
    readonly totalSpots: number

    @IsNotEmpty()
    @IsString()
    readonly title: string

    @IsNotEmpty()
    @IsString()
    readonly information: string

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
    @IsDecimal()
    @IsPositive()
    @IsOptional()
    readonly __v?: number

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    readonly imageUrl: string

    @IsNotEmpty()
    @IsString()
    readonly description?: Array<string>

    @IsNotEmpty()
    @IsBoolean()
    readonly isActive?: boolean

    @IsNotEmpty()
    @IsString()
    @IsDateString()
    createdBy?: string

    @IsNotEmpty()
    @IsString()
    @IsDateString()
    updatedBy?: string
}
