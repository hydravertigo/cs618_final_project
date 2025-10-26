import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema(
   {
      title: { type: String, required: true },
      author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
      contents: String,
      imageurl: String,
      tags: [String],
      likes: Number,
   },
   { timestamps: true },
)

export const Post = mongoose.model('post', postSchema)
