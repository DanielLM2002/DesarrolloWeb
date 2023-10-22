import fs from 'fs';
import http from 'http';

const port = 0;
const hostname = '0.0.0.0';

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log('Method: ', method);
  console.log('Url: ', url);
  if (method === 'GET' && url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
      <head>
        <title>Libro de Visitas</title>
      </head>
      <body>
        <h1>Libro de Visitas</h1>
        <form method="POST" action="/submit">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br><br>
          <label for="message">Message:</label><br>
          <textarea id="message" name="message" rows="4" required></textarea><br><br>
          <input type="submit" value="Submit">
        </form>
        <br>
        <a href="/visitas">Ver los comentarios de los visitantes anteriores</a>
      </body>
      </html>
    `);
    res.statusCode = 200;
  } else if (method === 'POST' && url === '/submit') {
    let body = [];

    req.on('error', (err) => {
      console.error(err);
      res.statusCode = 500;
      res.end('<h1>Error: saving visitas</h1>');
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      const formvisitas = new URLSearchParams(body);
      const name = formvisitas.get('name');
      const email = formvisitas.get('email');
      const message = formvisitas.get('message');
      const visitas = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
 
      fs.appendFile('./visitas.txt', visitas, (error) => {
        if (error) {
          console.error(error);
          res.statusCode = 500;
          res.end('<h1>Error saving visitas</h1>');
        } else {
          res.statusCode = 302;
          res.setHeader('Location', '/success');
          res.end();
        }
      });
    });
  } else if (method === 'GET' && url === '/visitas') {
    fs.readFile('./visitas.txt', 'utf-8', (error, data) => {
      if (error) {
        console.log('ERROR: ', error);
        res.statusCode = 500;
        res.end(`<h1>Error: reading visitas</h1>`);
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
          <html>
            <head>
              <title>Lista de visitas</title>
            </head>
            <body>
              <h1>Lista de visitas</h1>
              <pre>${data}</pre>
              <br>
              <a href="/">Enviar un nuevo comentario</a>
            </body>
          </html>
        `);
      }
    });
  } else if (method === 'GET' && url === '/success') {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head>
          <title>Success</title>
        </head>
        <body>
          <h1>Comentario enviado de manera exitosa</h1>
          <br>
          <a href="/">Enviar un nuevo comentario</a>
          <br>
          <a href="/visitas">Ver los comentarios de los visitantes anteriores</a>
        </body>
      </html>
    `);
  }
});

server.listen((port), () => {
    console.log(`Server running at ${hostname}:${server.address().port}/`);
});
