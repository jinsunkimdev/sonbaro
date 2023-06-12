import 'dotenv/config';
import "./db.js";
import "./models/User.js";
import app from "./server.js";

const handleListening = () => {
    console.log(`Server listening on port ${process.env.SERVER_PORT} 🍽️`);
};

app.listen(process.env.SERVER_PORT, handleListening);