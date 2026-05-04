import mongoose, { Schema, Document, models } from "mongoose";

export interface IProfile extends Document {
  careerObjective: string;
  currentPosition: {
    title: string;
    department: string;
    institution: string;
    period: string;
  };
  educations: {
    degree: string;
    institution: string;
    period: string;
    details: string[];
  }[];
  achievements: string[];
  skills: string[];
  languages: string;
  references: {
    name: string;
    designation: string;
    email: string;
  }[];
}

const ProfileSchema = new Schema<IProfile>(
  {
    careerObjective: { type: String, default: "" },
    currentPosition: {
      title: { type: String, default: "" },
      department: { type: String, default: "" },
      institution: { type: String, default: "" },
      period: { type: String, default: "" },
    },
    educations: [
      {
        degree: String,
        institution: String,
        period: String,
        details: [String],
      },
    ],
    achievements: [{ type: String }],
    skills: [{ type: String }],
    languages: { type: String, default: "" },
    references: [
      {
        name: String,
        designation: String,
        email: String,
      },
    ],
  },
  { timestamps: true }
);

const Profile = models.Profile || mongoose.model<IProfile>("Profile", ProfileSchema);

export default Profile;
