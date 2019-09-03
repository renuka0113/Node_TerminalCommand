const fs=require("fs");
module.exports.ls=()=>{
 fs.readdir('./',(err,files)=>{
  const filesToString=files.reduce((acc,file)=>{
    return '${acc} ${file}';
  }, '');

  console.log(filesToString);
 });
};
module.exports.mkdir = () => {
  fs.mkdir('C:\Users\rally\Downloads\NODE\Node_TerminalCommand\touch.txt', { recursive: true }, (err) => {
  if (err) throw err;
});
};
