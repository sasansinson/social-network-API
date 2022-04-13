const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



// Start the app
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}.`);
    });
  });
  