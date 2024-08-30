import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the user type extending Document
export interface UserType extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
}

// Define the schema for the User model
const userSchema = new Schema<UserType>({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Check if the model is already registered, otherwise register it
const User: Model<UserType> = mongoose.models.User || mongoose.model<UserType>('User', userSchema);

export default User;
