const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

router.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

router.put('/:id', (req, res) => {  res.send(`PUT request to update item with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`DELETE request to delete item with id ${req.params.id}`);
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
