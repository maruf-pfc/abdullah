import mongoose, { Schema, Document, models } from "mongoose";

export interface IAdminUser extends Document {
  email: string;
  passwordHash: string;
}

const AdminUserSchema = new Schema<IAdminUser>(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

const AdminUser = models.AdminUser || mongoose.model<IAdminUser>("AdminUser", AdminUserSchema);

export default AdminUser;
