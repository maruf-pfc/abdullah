import mongoose, { Schema, Document, models } from "mongoose";

export interface IPublication extends Document {
  citation: string;
}

const PublicationSchema = new Schema<IPublication>(
  {
    citation: { type: String, required: true },
  },
  { timestamps: true }
);

const Publication = models.Publication || mongoose.model<IPublication>("Publication", PublicationSchema);

export default Publication;
