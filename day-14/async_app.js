const fs = require('fs').promises;
async function readFile() {
  try {
    const data = await fs.readFile('data.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
readFile();
async function writeFile(){
    
  try {
    await fs.writeFile('data1.txt', 'Async Await Example');
    console.log('File written');
  } catch (err) {
    console.error(err);
  }

}
writeFile();