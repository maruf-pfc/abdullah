import mongoose, { Schema, Document, models } from "mongoose";

export interface IThesis extends Document {
  title: string;
  description: string;
  software: string[];
}

const ThesisSchema = new Schema<IThesis>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    software: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Thesis = models.Thesis || mongoose.model<IThesis>("Thesis", ThesisSchema);

export default Thesis;
