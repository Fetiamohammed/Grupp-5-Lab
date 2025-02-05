const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(express.json());



app.listen(3000);
