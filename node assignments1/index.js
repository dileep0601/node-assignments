const fs = require('fs');

function myFileWriter(fileName, content) {
  fs.writeFileSync(fileName + '.txt', content);
}

function myFileReader(fileName) {
  const content = fs.readFileSync(fileName + '.txt', 'utf-8');
  console.log(content);
}

function myFileUpdater(fileName, newContent) {
  fs.appendFileSync(fileName + '.txt', newContent);
}

function myFileDeleter(fileName) {
  fs.unlinkSync(fileName + '.txt');
}



myFileWriter("testfile", "Hello");
myFileReader("testfile");
myFileUpdater("testfile", " World");

myFileDeleter("testfile");
