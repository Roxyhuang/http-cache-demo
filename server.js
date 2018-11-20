http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  // 主页面
  if (req.url === '/' || req.url === '' || req.url === '/index.html') {
    const tag = req.headers['if-none-match'];
    if(tag === '33a64df551425fcc55e4d42a148795d9f25f89d9') {
      res.writeHead('304', 'Not Modified');
      res.end();
    } else {
      fs.readFile('./assets/index.html', function (err, file) {
        console.log(req.url);
        //对主文档设置缓存，无效果
        res.setHeader('Cache-Control', "max-age=" + 300); //缓存五分钟
        res.setHeader('Expires', new Date(Date.now() + 300000)); //缓存五分钟

        // 默认设置了五分钟缓存，可以注销以下注释并注册上面两行代码，测试不缓存主文档
        // res.setHeader('Cache-Control', "no-cache"); // 不缓存主文档

        res.setHeader('ETag', '33a64df551425fcc55e4d42a148795d9f25f89d9');
        res.setHeader('Content-Type', 'text/html');
        res.writeHead('200', "OK");
        res.end(file);
      });
    }
  }
  // 跳转页面
  if (req.url === '/temp.html') {
    fs.readFile('./assets/temp.html', function (err, file) {
      console.log(req.url);
      //对主文档设置缓存，无效果
      res.setHeader('Cache-Control', "no-cache"); // 不缓存主文档
      res.setHeader('Content-Type', 'text/html');
      res.writeHead('200', "OK");
      res.end(file);
    });
  }
  // css 文件
  if (req.url === '/index.css') {
    const tag = req.headers['if-none-match'];
    if(tag === '33a64df551425fcc55e4d42a148795d9f25f89d4') {
      res.writeHead('304', 'Not Modified');
      res.end();
    } else {
      fs.readFile('./assets/index.css', function (err, file) {
        res.setHeader('Cache-Control', "max-age=" + 300); //缓存五分钟
        res.setHeader('Expires', new Date(Date.now() + 300000)); //缓存五分钟
        res.setHeader('ETag', '33a64df551425fcc55e4d42a148795d9f25f89d4');
        res.setHeader('Last-Modified', 'Fri Nov 16 2018 08:32:02 GMT+0800 (CST)');
        res.setHeader('Content-Type', 'text/css');
        res.writeHead('200', 'OK');
        res.end(file);
      });
    }
  }

  // 图片文件
  if (req.url === '/doge.jpeg') {
    const tag = req.headers['if-none-match'];
    if(tag === '33a64df551425fcc55e4d42a148795d9f25f89d4') {
      res.writeHead('304', 'Not Modified');
      res.end();
    } else {
      fs.readFile('./assets/doge.jpeg', function (err, file) {
        res.setHeader('Cache-Control', "max-age=" + 300); //缓存五分钟
        res.setHeader('Expires', new Date(Date.now() + 300000)); //缓存五分钟
        res.setHeader('ETag', '33a64df551425fcc55e4d42a148795d9f25f89d4');
        res.setHeader('Last-Modified', 'Fri Nov 16 2018 08:32:02 GMT+0800 (CST)');
        res.setHeader('Content-Type', 'image/png');
        res.writeHead('200', 'OK');
        res.end(file);
      });
    }
  }

  if (req.url === '/favicon.ico') {
    const tag = req.headers['if-none-match'];
    if(tag === '33a64df551425fcc55e4d42a148795d9f25f89d4') {
      res.writeHead('304', 'Not Modified');
      res.end();
    } else {
      fs.readFile('./assets/favicon.ico', function (err, file) {
        res.setHeader('Cache-Control', "max-age=" + 300); //缓存五分钟
        res.setHeader('Expires', new Date(Date.now() + 300000)); //缓存五分钟
        res.setHeader('ETag', '33a64df551425fcc55e4d42a148795d9f25f89d4');
        res.setHeader('Last-Modified', 'Fri Nov 16 2018 08:32:02 GMT+0800 (CST)');
        res.setHeader('Content-Type', 'image/x-icon');
        res.writeHead('200', 'OK');
        res.end(file);
      });
    }
  }

  // js 文件
  if (req.url === '/index.js') {
    const tag = req.headers['if-none-match'];
    if(tag === '33a64df551425fcc55e4d42a148795d9f25f89d4') {
      res.writeHead('304', 'Not Modified');
      res.end();
    } else {
      fs.readFile('./assets/index.js', function (err, file) {
        res.setHeader('Cache-Control', "max-age=" + 300); //缓存五分钟
        res.setHeader('Expires', new Date(Date.now() + 300000)); //缓存五分钟
        res.setHeader('ETag', '33a64df551425fcc55e4d42a148795d9f25f89d4');
        res.setHeader('Last-Modified', 'Fri Nov 16 2018 08:32:02 GMT+0800 (CST)');
        res.setHeader('Content-Type', 'application/javascript');
        res.writeHead('200', 'OK');
        res.end(file);
      });
    }
  }

}).listen(5000);