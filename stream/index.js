let fs=require('fs');
rwPipe();

/**
 * 读写文件
 */
function rwFile() {
    let data = fs.readFileSync('read.txt');
    fs.writeFileSync('write.txt', data);
}

/**
 * 用流的方式读写文件
 */
function rwStream() {
    let readStream=fs.createReadStream('read.txt');
    let writeStream=fs.createWriteStream('write.txt');
    readStream.on('data',function (chunk) {
        //当有数据流入时，就写入数据
        writeStream.write(chunk);
    });
    readStream.on('end',function (chunk) {
        //没有数据写入，关闭写入流，读取流默认设置是读取完成自动关闭
        writeStream.end();
    })
}

/**
 * 管道流
 */
function rwPipe() {
    fs.createReadStream('read.txt').pipe(fs.createWriteStream('write.txt'));
}