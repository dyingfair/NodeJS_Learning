var fs = require("fs");
var data = 'www.runoob.com';

// ����һ������д�������д�뵽�ļ� output.txt ��
var writerStream = fs.createWriteStream('output.txt');

// ʹ�� utf8 ����д������
writerStream.write(data, 'UTF8');

// ����ļ�ĩβ
writerStream.end();

// �������¼� --> data, end, and error
writerStream.on('finish', function () {
	console.log("������");
});

writerStream.on('error', function (err) {
	console.log(err.stack);
});

console.log("ok");