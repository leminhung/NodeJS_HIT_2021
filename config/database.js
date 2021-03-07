const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const con = await mongoose.connect('mongodb://localhost:27017/products', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log(`Connect to DB ${con.connect.host}`);

    } catch (error) {
        console.log(`Error when connect DB ${err.message}`);
    }
}

module.exports = connectDB