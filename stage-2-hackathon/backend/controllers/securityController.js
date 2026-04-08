const fs = require('fs');
const path = require('path');
const questionsPath = path.join(__dirname, '../data/questions.json');
const answersPath = path.join(__dirname, '../data/answers.json');

exports.handleSecurity = (req, res) => {
  if (req.method === 'GET') {
    fs.readFile(questionsPath, 'utf8', (err, data) => {
      if (err) return res.status(500).json({ error: 'Cannot read questions' });
      res.json(JSON.parse(data));
    });
  } 
  else if (req.method === 'POST') {
    const answers = req.body;
    fs.writeFile(answersPath, JSON.stringify(answers, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Cannot save answers' });
      res.json({ message: 'Answers saved successfully!' });
    });
  } 
};