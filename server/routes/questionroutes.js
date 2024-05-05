const express = require('express');
const router = express.Router();

// Define routes related to questions
router.get('/api/questions', (req, res) => {
    res.send('GET request to questions');
});
router.post('/api/answers', (req, res) => {
    res.send('POST request to questions');
});


module.exports = router;
