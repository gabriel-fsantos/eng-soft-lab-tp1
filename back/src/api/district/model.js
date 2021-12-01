import crypto from 'crypto'
import bcrypt from 'bcrypt'
import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

const districtSchema = new Schema({
  district: {
    type: String
  }
}, {
  timestamps: true
})

const model = mongoose.model('district', districtSchema)

export const schema = model.schema
export default model
