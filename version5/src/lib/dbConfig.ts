import mongoose, { Connection } from 'mongoose'
const dburl = process.env.MONGODB_URI as string;
if (!dburl) {
    throw new Error("please provide mongodb uri to connect to db")
}

let cachedConnection: Connection | null = null;
export async function connectDb() {
    if (cachedConnection) {
        console.log('using cached db connection')
        return cachedConnection;
    }
    try {
        const newconnection = await mongoose.connect(dburl);
        cachedConnection = newconnection.connection;
        console.log('new mongodb connection successfully creaed')
        return cachedConnection;

    } catch (error) {
        console.error('error connecting to db', error)
        throw new Error('error connecting to db')
    }
}

