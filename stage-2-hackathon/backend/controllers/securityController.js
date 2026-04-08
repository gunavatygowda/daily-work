const fs = require('fs');
const path = require('path');
const questionsPath = path.join(__dirname, '../data/questions.json');
const answersPath = path.join(__dirname, '../data/answers.json');

exports.handleSecurity = (req, res) => {
  if (req.method === "GET") {
    fs.readFile(questionsPath, "utf8", (err, data) => {
      if (err) return res.status(500).json({ error: "Cannot read questions" });
      res.json(JSON.parse(data));
    });
  }
  else if (req.method === "POST") {
  const answers = req.body;
  if (!answers || !Array.isArray(answers) || answers.length === 0) {
    return res.status(400).json({ error: "Invalid or empty data" });
  }
  for (let item of answers) {
    if (!item.questionId || !item.answer || !item.confirmAnswer) {
      return res.status(400).json({ error: "Missing fields" });
    }
    if (item.answer !== item.confirmAnswer) {
      return res.status(400).json({ error: "Answers do not match" });
    }
  }
  const questionIds = answers.map(item => item.questionId);
  const uniqueIds = new Set(questionIds);
  if (uniqueIds.size !== questionIds.length) {
    return res.status(400).json({ error: "Duplicate questions not allowed" });
  }
  fs.writeFile(answersPath, JSON.stringify(answers, null, 2), (err) => {
    if (err) return res.status(500).json({ error: "Cannot save answers" });
    res.json({ message: "Answers saved successfully!" });
  });
}
};