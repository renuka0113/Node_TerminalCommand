const fs=require("fs");
var now=new Date();
module.exports.ls=()=>{
 fs.readdir('./',(err,files)=>{
  const filesToString=files.reduce((acc,file)=>{
    return '${acc} ${file}';
  }, '');

  console.log(filesToString);
 });
};
module.exports.mkdir = () => {
  fs.mkdir('C:/Users/rally/Downloads/NODE/Node_TerminalCommand/new_dir', { recursive: true }, (err) => {
  if (err){
    return console.log(`You have an error:  ${err}`);
  }
});
};
module.exports.touch = () => {
  fs.openSync('C:/Users/rally/Downloads/NODE/Node_TerminalCommand/message.txt', 'w', (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }
});
};
