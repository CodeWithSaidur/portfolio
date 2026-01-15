import mongoose, { Schema, Document } from 'mongoose'

export interface IAdmin extends Document {
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v
        return ret
      },
    },
  }
)

export default mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema)
