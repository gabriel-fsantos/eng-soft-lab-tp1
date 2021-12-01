import crypto from 'crypto'
import bcrypt from 'bcrypt'
import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

const orderSchema = new Schema({
  orders: [
    {
      description: String,
      price: Number,
      quant: Number
    }
  ],
  userId: String
}, {
  timestamps: true
})

const model = mongoose.model('order', orderSchema)

export const schema = model.schema
export default model
