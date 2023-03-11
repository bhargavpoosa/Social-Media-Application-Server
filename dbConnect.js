const mongoose = require('mongoose');

module.exports = async() => {
    const mangoUrl = "mongodb+srv://bhargavpoosa:p4eH0yfMvUHM82NV@cluster0.q0vwrds.mongodb.net/?retryWrites=true&w=majority";
    try{
        const connect =  await mongoose.connect(mangoUrl, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}