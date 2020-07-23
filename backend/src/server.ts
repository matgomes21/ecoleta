import express from 'express';

const app = express();

app.get('/', (request, response) => {
    console.log("Hello World!");

    response.json([
        'Hello',
        'World'
    ]);
});

app.listen(3333);