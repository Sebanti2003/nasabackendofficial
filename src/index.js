import { configDotenv } from 'dotenv';
import app from './app.js';
configDotenv();
const port=process.env.PORT;


app.listen(port,()=>{
    console.log(`Nasa Server is running on port ${port}`);
})
