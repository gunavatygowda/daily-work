const fs = require("fs").promises;
const path = require("path");
const FILE_PATH = path.join(__dirname, "../data/data.json");

exports.saveToFile = async (newData) => {
  try {
    let existing = [];
    try {
      const fileData = await fs.readFile(FILE_PATH, "utf-8");
      existing = JSON.parse(fileData);
    } catch {
      existing = [];
    }
    existing.push(newData);
    await fs.writeFile(FILE_PATH, JSON.stringify(existing, null, 2));
  } catch (error) { throw error;
  }
};