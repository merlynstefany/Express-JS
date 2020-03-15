const express = require('express')
const app = express()
const port = 8081
const path = require('path');

app.get('/', function (req, res) {
   res.send('Ini halaman home');
})

app.get('/about', function (req, res) {
   res.send('halaman about');
})

app.get('/create-new-mahasiswa', function (req, res) {
   res.sendFile(path.join(__dirname+'/form-new-mahasiswa.html'));
})

app.get('/create-data-jurusan', function (req, res) {
   res.sendFile(path.join(__dirname+'/form-new-jurusan.html'));
})

app.get('/create-data-nilai', function (req, res) {
   res.sendFile(path.join(__dirname+'/form-new-nilai.html'));
})

app.listen(port, () => console.log(
	`Example app listening on port ${port}!`
))
