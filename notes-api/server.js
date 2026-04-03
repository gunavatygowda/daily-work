const express = require('express');
const cors = require('cors');
const app = express();
const notesRoutes = require('./routes/notesRoutes');
app.use(cors({ origin: "http://localhost:3001" })); 
app.use(express.json());
app.use('/notes', notesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});

module.exports = app;