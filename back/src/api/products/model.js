import crypto from 'crypto'
import bcrypt from 'bcrypt'
import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

const productSchema = new Schema({
  description: {
    type: String
  },
  price: {
    type: Number
  },

}, {
  timestamps: true
})

const model = mongoose.model('product', productSchema)

export const schema = model.schema
export default model
