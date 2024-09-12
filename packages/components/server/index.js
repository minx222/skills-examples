const express = require('express');
const cors = require('cors');
const compression = require('compression')

const app = express();
app.use(compression());
app.use(cors());

app.use('/components', cors(), express.static('./dist'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
