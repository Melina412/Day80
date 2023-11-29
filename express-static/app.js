import express from 'express';

const PORT = 9898;
const app = express();

// app.get('/', (req, res) => {
//   res.end('Startseite');
// });

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static('static'));

app.listen(PORT, () => console.log('Express läuft auf Port:', PORT));
