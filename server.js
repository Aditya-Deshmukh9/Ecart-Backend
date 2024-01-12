const express = require('express');
const router = require('./Route/auth-route');
const app = express();
const port = 3000;

app.use("/api/auth", router)



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
