import mongoose, { Schema, Document, models } from "mongoose";

export interface IAttachment extends Document {
  company: string;
  date: string;
  description: string;
}

const AttachmentSchema = new Schema<IAttachment>(
  {
    company: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Attachment = models.Attachment || mongoose.model<IAttachment>("Attachment", AttachmentSchema);

export default Attachment;
