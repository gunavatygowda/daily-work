const express = require('express');
const app = express();
const notesRoutes = require('./routes/notesRoutes');


app.use(express.json());


app.use('/notes', notesRoutes);


module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}