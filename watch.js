const fs = require('fs');
const exec = require('child_process').exec;

const filePath1 = './assets/css';
const filePath2 = './content';
const cli = 'make';

console.log(`正在监听${filePath1}`);

fs.watch(filePath1, (event,filename) => {
    if (filename) {
        console.log(`${filePath1}文件发生更新`);
        exec(cli,function (err,stdout,stderr) {
        	if (err) {
        		console.log(err);
        		return;
        	}
        	console.log(`stdout${stdout}`);
        	console.log(`stderr${stderr}`);
            console.log(new Date().toLocaleString());
        })
    }
})

console.log(`正在监听${filePath2}`);
fs.watch(filePath2, (event,filename) => {
    if (filename) {
        console.log(`${filePath2}文件发生更新`);
        exec(cli,function (err,stdout,stderr) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`stdout${stdout}`);
            console.log(`stderr${stderr}`);
            console.log(new Date().toLocaleString());
        })
    }
})
