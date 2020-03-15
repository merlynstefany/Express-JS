const express = require('express')
const app = express()
const port = 8081
const path = require('path');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname+'/home.html'));
})

app.get('/about', function (req, res) {
   res.send('halaman about');
})

app.get('/create-new-mahasiswa', function (req, res) {
   res.sendFile(path.join(__dirname+'/form-new-mahasiswa.html'));
})

app.get('/save-new-mahasiswa', function (req, res) {
	response = {
		nama:req.query.nama,
		alamat:req.query.alamat,
		jurusan:req.query.jurusan,
		hobi:req.query.hobi
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.get('/create-data-jurusan', function (req, res) {
   res.sendFile(path.join(__dirname+'/form-new-jurusan.html'));
})

app.post('/save-data-jurusan', urlencodedParser, function (req, res) {
	response = {
		jurusan:req.body.jurusan,
		kodejur:req.body.kodejur,
		desc:req.body.desc
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.get('/create-data-nilai', function (req, res) {
   res.sendFile(path.join(__dirname+'/form-new-nilai.html'));
})

app.post('/save-data-nilai', urlencodedParser, function (req, res) {
	response = {
		nim:req.body.nim,
		matkul:req.body.matkul,
		nilai:req.body.nilai
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.get('/logo.png', function (req, res) {
   res.sendFile(path.join(__dirname+'/img/Logo_ITHB.png'));
})

app.get('/bootstrap.css', function (req, res) {
   res.sendFile(path.join(__dirname+'/css/bootstrap.min.css'));
})

app.get('/jquery.js', function (req, res) {
   res.sendFile(path.join(__dirname+'/js/jquery-3.4.1.min.js'));
})

app.get('/bootstrap.js', function (req, res) {
   res.sendFile(path.join(__dirname+'/js/bootstrap.bundle.min.js'));
})

app.listen(port, () => console.log(
	`Example app listening on port ${port}!`)
)