const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API is running'));

// Defina suas rotas aqui
// app.use('/api/users', require('./routes/users'));
// app.use('/api/alerts', require('./routes/alerts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
