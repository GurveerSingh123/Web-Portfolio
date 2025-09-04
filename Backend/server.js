require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const blogRoutes = require('./routes/blogRoutes');
app.use('/api/blogs', blogRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {

    console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error(err));