//Question 1:
const { Console } = require('console');
const dns = require('dns');
dns.lookup('www.miu.edu',function(err, result){
    console.log(result)
});

//Question 2:
const fs = require('fs');
const path = require('path');
const http = require('http');

/***************************** Function call *****************************/
function readWriteSync(readPath, writePath) {
    try {
        const data = fs.readFileSync(readPath);
        fs.writeFileSync(writePath, data);
    } catch(err) {
        console.log(err);
    }
}

function readWriteASync(readPath, writePath) {
    fs.readFile(readPath, function(err, data) {
        if(err)
            console.log(err);
        else 
            fs.writeFile(writePath, data, function(err) {
                if(err)
                    console.log(err);
            });
    });
}

function readWriteStream(readPath, writePath) {
    const readable = fs.createReadStream(readPath, {highWaterMark: 16 * 1024});
    const writeable = fs.createWriteStream(writePath);

    readable.on('data', function(chunk){
        writeable.write(chunk);
    });
}

function readWritePipe(readPath, writePath) {
    const readable = fs.createReadStream(readPath);
    const writeable = fs.createWriteStream(writePath);
    readable.pipe(writeable);
}

function functionCall() {
    const readPath = path.join(__dirname, '..', 'images', 'happy.webp');
    let writePath = path.join(__dirname, '..', 'images', 'happySync.webp');

    readWriteSync(readPath, writePath);

    writePath = path.join(__dirname, '..', 'images', 'happyAsync.webp');
    readWriteASync(readPath, writePath);

    writePath = path.join(__dirname, '..', 'images', 'happyStream.webp');
    readWriteStream(readPath, writePath);

    writePath = path.join(__dirname, '..', 'images', 'happyPipe.webp');
    readWritePipe(readPath, writePath);
}

/***************************** Server call *****************************/

const fs = require('fs');
const path = require('path');
const http = require('http');
const port = 3000;

function syncServerCall(){
    const server = http.createServer();
    server.on('request', function(req, res){
        try {
            const readPath = path.join(__dirname, '..', 'images', 'happy.webp');
            const data = fs.readFileSync(readPath);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data)
        } catch(err) {
            console.log(err);
        }
    });
    server.listen(port);
}

function asyncServerCall() {
    http.createServer(function(req, res){
        const readPath = path.join(__dirname, '..', 'images', 'happy.webp');
        fs.readFile(readPath, function(err, data) {
            if(err)
                console.log(err);
            else {
                console.log('started loading data');
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(data)
            }
                
        });
    }).listen(port);
}

function streamServerCall() {
    http.createServer((req, res)=>{
        const readPath = path.join(__dirname, '..', 'images', 'happy.webp');
        const readable = fs.createReadStream(readPath, {highWaterMark: 8 * 1024});
        readable.on('data', function(chunk){
            console.log('writing ' + chunk.length + ' long chunk of data');
            res.write(chunk);
        });
    }).listen(port);
}

function pipeServerCall(){
    http.createServer((req, res) => {
        const readPath = path.join(__dirname, '..', 'images', 'happy.webp');
        const readable = fs.createReadStream(readPath, {highWaterMark: 16 * 1024});
        readable.pipe(res);
    }).listen(port);
}