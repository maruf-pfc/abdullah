import mongoose, { Schema, Document, models } from "mongoose";

export interface IProject extends Document {
  title: string;
  date: string;
  description: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Project = models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
