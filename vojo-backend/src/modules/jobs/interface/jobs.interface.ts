import { Document } from 'mongoose'
import { ILocation } from './location.interface'
import { ICompensation } from './compensation.interface'

export default interface IJobs extends Document {
  _id: string
  compensation: ICompensation
  active: boolean
  open: boolean
  assignments: Array<string>
  totalSpots: number
  title: string
  information: string
  location: ILocation
  education: string
  company: string
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
  __v: number
  imageUrl: string
  description: Array<string>
  isActive: boolean
}