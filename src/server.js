// import http from 'node:http';
// import {json} from './utils/responses.js';
// import {listUsers} from './users/user.controller.js';


// const listener = (request, response) => {
    // if (request.url === '/users') {
        // return listUsers(request, response);
    // }
    //get users est déclaré ici
    
//     return json (response, 404, {
//         message: 'Not found'
//     });
// };


// const server = http.createServer(listener);
// server.listen(3000);

// console.log('Server running at http:/localhost:3000/');

import express from 'express'
import dotenv from 'dotenv';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Users management API'
});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})