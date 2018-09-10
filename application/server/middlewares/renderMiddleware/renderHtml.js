export default (app, route, req) => `
  <!doctype html>
  <html lang="en">
    <head>
    </head>
    <body>
      <div id="root">${app}</div>
      <script src="http://localhost:8080/client.js"></script>
    </body>
  </html>`;
