import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        if (connection) {
            console.log(`Database connection successfully...${connection.host}`);
        }

    } catch (e) {
        console.log(e);
        console.error(e);
        process.exit(1);
    }
}

export default dbConnection;