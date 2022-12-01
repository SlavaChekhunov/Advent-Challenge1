const { readFileSync, promises: fsPromises } = require("fs");

async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, "utf-8");

    const arr = contents.split(/\r?\n/);
    //trim(). split(/\s+/)
    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    const Array = arr.reduce((total, currentValue) => total + currentValue);
    console.log(Array);
  } catch (err) {
    console.log(err);
}
}

asyncReadFile("./text.txt");

