import * as mongoose from 'mongoose'

export const JobSchema = new mongoose.Schema({
    compensation: { type: Object },
    active: { type: Boolean },
    open: { type: Boolean },
    assignments: { type: Array },
    totalSpots: { type: Number },
    title: { type: String },
    information: { type: String },
    location: { type: Object }, 
    education: { type: String },
    company: { type: String },
    workingHours: { type: String },
    createdBy: { type: String },
    updatedBy: { type: String },
    createdAt: { type: String },
    updatedAt: { type: String },
    __v: { type: Number },
    imageUrl: { type: String },
    description: { type: String },
    isActive: { type: Boolean, default: true },
  }, { timestamps: true, collection: 'jobs' })

  