import inquirer from 'inquirer';
import qr from "qr-image";
import fs, { writeFile } from "fs";
//var qr = require('qr-image');
inquirer
  .prompt([
    {
        message:"Type Your URL Here",
        name:"URL",
    }
  ])
  .then((answers) => {
    const url=answers.URL;
   // console.log(answers);
    
var qr_svg = qr.image(url, { type: 'png' });
qr_svg.pipe(fs.createWriteStream("qr-image.png"));
fs.writeFile("Url.txt",url,(err)=>{
    if(err) throw err;
    console.log("The file has been saved!");
})
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })