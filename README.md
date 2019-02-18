#### 测试gzip压缩（node作为服务器）
#### gzip 是一种优化方法，通过压缩文件达到减轻文件体积从而达到节省带宽的目的。
#### 本项目使用zlib包压缩（解压缩）
server.js 对所有请求都返回./index.html的gzip形式，可以看到压缩效果十分明显，size缩小了60%之多。

writegzip.js则将index.html压缩为.gz文件.

ungzip.js解压.gz文件并还原.
#### 步骤：
* 可以直接返回压缩好的文件，也能以流的形式压缩并返回。**项目中是实时压缩并返回**
* 设置content-encoding:'gzip',并返回response


由于测试原因，本项目写的比较简单，真实的情况应该是:
* 获取request header里接受的压缩形式：`req.headers["accept-encoding"]`;
* 分析压缩形式字符，分别设置响应头：`content-encoding：gzip,deflate`并返回相应的压缩形式（文件或压缩流）
