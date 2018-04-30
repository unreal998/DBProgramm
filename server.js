var express = require('express');
var http = require('http');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

var dateFormat = require('dateformat');
var now = new Date();

app.set ('view engine','ejs');

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: '',
	database: "mydb"
});

const siteTitle = "Katran DB";
const baseURL = "http://localhost:4000/"

app.get('/',function (req,res) {
	res.render('pages/home',{
			siteTitle: siteTitle,
			pageTitle:'Головна'
		});

});

app.get('/BDiZ/client', function (req,res) {
	con.query("SELECT * FROM client",function (err,result) {
	
		res.render('pages/client',{
			siteTitle: siteTitle,
			pageTitle:'Клієнти',
			items : result
		});
	});
});
app.get('/BDiZ/requests', function (req,res) {
		res.render('pages/requests',{
			siteTitle: siteTitle,
			pageTitle:'Запити',
		});
});
app.get('/BDiZ/request1', function (req,res) {
		res.render('pages/request1',{
			siteTitle: siteTitle,
			pageTitle:'Запит1',
			items : ''
		});
});

app.get('/BDiZ/request2', function (req,res) {
		res.render('pages/request2',{
			siteTitle: siteTitle,
			pageTitle:'Запит2',
			items : ''
		});
});

app.get('/BDiZ/request3', function (req,res) {
		res.render('pages/request3',{
			siteTitle: siteTitle,
			pageTitle:'Запит3',
			items : ''
		});
});

app.get('/BDiZ/request4', function (req,res) {
		res.render('pages/request4',{
			siteTitle: siteTitle,
			pageTitle:'Запит4',
			items : ''
		});
});

app.get('/BDiZ/request5', function (req,res) {
		res.render('pages/request5',{
			siteTitle: siteTitle,
			pageTitle:'Запит5',
			items : ''
		});
});
app.get('/BDiZ/request6', function (req,res) {
		res.render('pages/request6',{
			siteTitle: siteTitle,
			pageTitle:'Запит6',
			items : ''
		});
});
app.get('/BDiZ/request7', function (req,res) {
		res.render('pages/request7',{
			siteTitle: siteTitle,
			pageTitle:'Запит7',
			items : ''
		});
});
app.get('/BDiZ/request8', function (req,res) {
		res.render('pages/request8',{
			siteTitle: siteTitle,
			pageTitle:'Запит8',
			items : ''
		});
});
app.get('/BDiZ/works', function (req,res) {
	con.query("SELECT * FROM works",function (err,result) {
	
		res.render('pages/works',{
			siteTitle: siteTitle,
			pageTitle:'Роботи',
			items : result
		});
	});
});


app.get('/BDiZ/guarantee', function (req,res) {
	con.query("SELECT * FROM guarantee",function (err,result) {
	
		res.render('pages/guarantee',{
			siteTitle: siteTitle,
			pageTitle:'Гарантія',
			items : result
		});
	});
});

app.get('/BDiZ/staff', function (req,res) {
	con.query("SELECT * FROM personal",function (err,result) {
	console.log(result);
		res.render('pages/staff',{
			siteTitle: siteTitle,
			pageTitle:'Персонал',
			items : result
		});
	});
});
	


app.get('/BDiZ/storage', function (req,res) {
	con.query("SELECT * FROM storage",function (err,result) {
	console.log(result);
		res.render('pages/storage',{
			siteTitle: siteTitle,
			pageTitle:'Склад',
			items : result
		});
	});
});



app.get('/BDiZ/systemdiscount', function (req,res) {
	con.query("SELECT * FROM systemdiscount",function (err,result) {
	console.log(result);
		res.render('pages/systemdiscount',{
			siteTitle: siteTitle,
			pageTitle:'Система знижок',
			items : result
		});
	});
});

app.get('/BDiZ/client/add',function (req,res) {
		res.render('pages/add-client.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Додати клієнта',
			items : ''
		});
});

app.get('/BDiZ/works/add',function (req,res) {
		res.render('pages/add-works.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Додати роботу',
			items : ''
		});
});


app.get('/BDiZ/systemdiscount/add',function (req,res) {
		res.render('pages/add-systemdiscount.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Додати знижку',
			items : ''
		});
});

app.get('/BDiZ/staff/add',function (req,res) {
		res.render('pages/add-staff.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Додати персонал',
			items : ''
		});
});
app.get('/BDiZ/guarantee/add',function (req,res) {
		res.render('pages/add-guarantee.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Додати гарантію',
			items : ''
		});
});
app.get('/BDiZ/storage/add',function (req,res) {
		res.render('pages/add-storage.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Додати товар',
			items : ''
		});
});


app.get('/BDiZ/client/edit/:list',function (req,res) {
	const sql = `SELECT * FROM client WHERE list='${req.params.list}'`;
	console.log(sql) 
	con.query(sql, function(err,result) {
		const item = result[0];
		res.render('pages/edit-client.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Редагувати клієнта:'+item.name,
			item
		});
	});
});

app.get('/BDiZ/works/edit/:list',function (req,res) {
	const sql = `SELECT * FROM works WHERE list='${req.params.list}'`;
	console.log(sql) 
	con.query(sql, function(err,result) {
		const item = result[0];
		res.render('pages/edit-works.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Редагувати замовлення:'+item.list,
			item
		});
	});
});

app.get('/BDiZ/systemdiscount/edit/:phoneNumber',function (req,res) {
	const sql = `SELECT * FROM systemdiscount WHERE phoneNumber='${req.params.phoneNumber}'`;
	console.log(sql) 
	con.query(sql, function(err,result) {
		const item = result[0];
		res.render('pages/edit-systemdiscount.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Редагувати знижку:'+item.name,
			item
		});
	});
});

app.get('/BDiZ/storage/edit/:productCode',function (req,res) {
	const sql = `SELECT * FROM storage WHERE productCode='${req.params.productCode}'`;
	console.log(sql) 
	con.query(sql, function(err,result) {
		const item = result[0];
		res.render('pages/edit-storage.ejs',{
			siteTitle: siteTitle,
			pageTitle:'Редагувати товар:'+item.nameOfGoods,
			item
		});
	});
});


app.get('/BDiZ/staff/edit/:phoneNumber',function (req,res) {
	const sql = `SELECT * FROM personal WHERE phoneNumber='${req.params.phoneNumber}'`;
	console.log(sql) 
	con.query(sql, function(err,result) {
		const item = result[0];
		res.render('pages/edit-staff',{
			siteTitle: siteTitle,
			pageTitle:'Редагувати співробітника:'+item.name,
			item
		});
	});
});


app.get('/BDiZ/guarantee/edit/:list',function (req,res) {
	const sql = `SELECT * FROM guarantee WHERE list='${req.params.list}'`;
	console.log(sql) 
	con.query(sql, function(err,result) {
		const item = result[0];
		res.render('pages/edit-guarantee',{
			siteTitle: siteTitle,
			pageTitle:'Редагувати гарантію:'+item.list,
			item
		});
	});
});


app.post('/BDiZ/request1', function (req,res) {
	const req1 = `SELECT client.name, client.phone, client.often, works.start, works.typeOfWork FROM works INNER JOIN client ON works.list = client.list WHERE works.start='${req.body.start}' AND works.typeOfWork='${req.body.typeOfWork}'`;
	con.query(req1,function (err,result) {
	console.log(result);
	const item = result[0];
	res.render('pages/request1',{
			siteTitle: siteTitle,
			pageTitle:'Запит 1',
			items : result,
			item
		});
	});
});

app.post('/BDiZ/request2', function (req,res) {
	const req2 = `SELECT storage.nameOfGoods, storage.productCode, storage.costOfGood, storage.aviable FROM storage WHERE storage.costOfGood='${req.body.costOfGood}' AND storage.aviable='${req.body.aviable}'`;
	con.query(req2,function (err,result) {
	console.log(result);
	const item = result[0];
	res.render('pages/request2',{
			siteTitle: siteTitle,
			pageTitle:'Запит 2',
			items : result,
			item
		});
	});
});

app.post('/BDiZ/request3', function (req,res) {
	const req3 = `SELECT storage.nameOfGoods, works.productCodeToReplace, works.list FROM storage INNER JOIN works ON storage.productCode = works.productCodeToReplace WHERE works.productCodeToReplace='${req.body.productCodeToReplace}' AND works.list='${req.body.list}'`;
	con.query(req3,function (err,result) {
	console.log(result);
	const item = result[0];
	res.render('pages/request3',{
			siteTitle: siteTitle,
			pageTitle:'Запит 3',
			items : result,
			item
		});
	});
});


app.post('/BDiZ/request4', function (req,res) {
	const req4 = `SELECT works.list, works.description, works.productCodeToReplace, works.description, works.cost, works.typeOfWork, works.status FROM works WHERE works.typeOfWork='${req.body.typeOfWork}' AND works.status='${req.body.status}'`;
	con.query(req4,function (err,result) {
	console.log(result);
	const item = result[0];
	res.render('pages/request4',{
			siteTitle: siteTitle,
			pageTitle:'Запит 4',
			items : result,
			item
		});
	});
});

app.post('/BDiZ/request5', function (req,res) {
	const req5 = `SELECT guarantee.endGuarantee, storage.nameOfGoods, works.productCodeToReplace, works.list FROM (storage INNER JOIN guarantee ON storage.productCode = guarantee.productCode) INNER JOIN works ON storage.productCode = works.productCodeToReplace WHERE works.productCodeToReplace='${req.body.productCode}' AND works.list='${req.body.list}'`;
	con.query(req5,function (err,result) {
	console.log(result);
	const item = result[0];
	res.render('pages/request5',{
			siteTitle: siteTitle,
			pageTitle:'Запит 5',
			items : result,
			item
		});
	});
});

app.post('/BDiZ/request6', function (req,res) {
	const req6 = `SELECT client.name, client.phone, systemdiscount.discount, systemdiscount.ToNextLevel FROM systemdiscount INNER JOIN client ON systemdiscount.phoneNumber = client.phone WHERE client.phone='${req.body.phoneNumber}' AND systemdiscount.discount='${req.body.discount}'`;
	con.query(req6,function (err,result) {
	console.log(result);
	const item = result[0];
	res.render('pages/request6',{
			siteTitle: siteTitle,
			pageTitle:'Запит 6',
			items : result,
			item
		});
	});
});

app.post('/BDiZ/request7', function (req,res) {
	const req7 = `SELECT works.list, works.description, works.cost, works.typeOfWork, works.start, works.status FROM works WHERE works.start='${req.body.start}' AND works.status='${req.body.status}'`;
	con.query(req7,function (err,result) {
	console.log(result);
	const item = result[0];
	res.render('pages/request7',{
			siteTitle: siteTitle,
			pageTitle:'Запит 7',
			items : result,
			item
		});
	});
});


app.post('/BDiZ/request8', function (req,res) {
	const req8 = `SELECT personal.name, personal.birthday, personal.phoneNumber, personal.WorkExp FROM personal WHERE personal.birthday='${req.body.birthday}' AND personal.WorkExp='${req.body.WorkExp}' AND personal.phoneNumber='${req.body.phoneNumber}'`;
	con.query(req8,function (err,result) {
	console.log(result);
	const item = result[0];
	res.render('pages/request8',{
			siteTitle: siteTitle,
			pageTitle:'Запит 8',
			items : result,
			item
		});
	});
});


app.post('/BDiZ/client/add', function (req,res) {
	var query = "INSERT INTO `client` (name,list,phone,often) VALUES(";
			query += " '"+req.body.name+"' ,";
			query += " '"+req.body.list+"' ,";
			query += " '"+req.body.phone+"' ,";
			query += " '"+req.body.often+"' )";

			con.query(query,function(err,result){
		res.redirect('/BDiZ/client/');
		
	});

});


app.post('/BDiZ/works/add', function (req,res) {
	var query = "INSERT INTO `works` (description,productCodeToReplace,typeOfWork,start,list,status,cost) VALUES(";
			query += " '"+req.body.description+"' ,";
			query += " '"+req.body.productCodeToReplace+"' ,";
			query += " '"+req.body.typeOfWork+"' ,";
			query += " '"+req.body.start+"' ,";
			query += " '"+req.body.list+"' ,";
			query += " '"+req.body.status+"' ,";
			query += " '"+req.body.cost+"' )";

			con.query(query,function(err,result){
		res.redirect('/BDiZ/works/');
		
	});

});


app.post('/BDiZ/systemdiscount/add', function (req,res) {
	var query = "INSERT INTO `systemdiscount` (name,phoneNumber,discount,ToNextLevel) VALUES(";
			query += " '"+req.body.name+"' ,";
			query += " '"+req.body.phoneNumber+"' ,";
			query += " '"+req.body.discount+"' ,";
			query += " '"+req.body.ToNextLevel+"' )";

			con.query(query,function(err,result){
		res.redirect('/BDiZ/systemdiscount/');
		
	});

});


app.post('/BDiZ/storage/add', function (req,res) {
	var query = "INSERT INTO `storage` (nameOfGoods,productCode,dateOfRecive,aviable,costOfGood) VALUES(";
			query += " '"+req.body.nameOfGoods+"' ,";
			query += " '"+req.body.productCode+"' ,";
			query += " '"+req.body.dateOfRecive+"' ,";
			query += " '"+req.body.aviable+"' ,";
			query += " '"+req.body.costOfGood+"' )";

			con.query(query,function(err,result){
		res.redirect('/BDiZ/storage/');
		
	});

});


app.post('/BDiZ/guarantee/add', function (req,res) {
	var query = "INSERT INTO `guarantee` (list,productCode,endGuarantee,typeOfGuaranteeWork) VALUES(";
	
			query += " '"+req.body.list+"' ,";
			
			query += " '"+req.body.productCode+"' ,";
			
			query += " '"+req.body.endGuarantee+"' ,";
			
			query += " '"+req.body.typeOfGuaranteeWork+"' )";
		
	con.query(query,function(err,result){
		res.redirect('/BDiZ/guarantee/');
		
	});

});

app.post('/BDiZ/client/edit/:list', function (req,res){
	var query = "UPDATE `client` SET";
			query += " `name`='"+req.body.name+"' ,";
			query += " `list`='"+req.body.list+"' ,";
			query += " `phone`='"+req.body.phone+"',";
			query += " `often`='"+req.body.often+"'";
			query += "WHERE `client`.`list`="+req.body.list+"";
		con.query(query,function (err,result) {
			if (result.affectedRows) 
			{
				res.redirect('/BDiZ/client/');
			}
		});
});

app.post('/BDiZ/works/edit/:list', function (req,res){
	var query = "UPDATE `works` SET";
			query += " `description`='"+req.body.description+"' ,";
			query += " `productCodeToReplace`='"+req.body.productCodeToReplace+"' ,";
			query += " `typeOfWork`='"+req.body.typeOfWork+"',";
			query += " `start`='"+req.body.start+"',";
			query += " `list`='"+req.body.list+"',";
			query += " `status`='"+req.body.status+"',";
			query += " `cost`='"+req.body.cost+"'";
			query += "WHERE `works`.`list`="+req.body.list+"";
		con.query(query,function (err,result) {
			if (result.affectedRows) 
			{
				res.redirect('/BDiZ/works/');
			}
		});
});

app.post('/BDiZ/storage/edit/:productCode', function (req,res){
	var query = "UPDATE `storage` SET";
			query += " `nameOfGoods`='"+req.body.nameOfGoods+"' ,";
			query += " `productCode`='"+req.body.productCode+"' ,";
			query += " `dateOfRecive`='"+req.body.dateOfRecive+"',";
			query += " `aviable`='"+req.body.aviable+"',";
			query += " `costOfGood`='"+req.body.costOfGood+"'";
			query += "WHERE `storage`.`productCode`="+req.body.productCode+"";
		con.query(query,function (err,result) {
			if (result.affectedRows) 
			{
				res.redirect('/BDiZ/storage/');
			}
		});
});
app.post('/BDiZ/systemdiscount/edit/:phoneNumber', function (req,res){
	var query = "UPDATE `systemdiscount` SET";
			query += " `name`='"+req.body.name+"' ,";
			query += " `phoneNumber`='"+req.body.phoneNumber+"' ,";
			query += " `discount`='"+req.body.discount+"',";
			query += " `ToNextLevel`='"+req.body.ToNextLevel+"'";
			query += "WHERE `systemdiscount`.`phoneNumber`="+req.body.phoneNumber+"";
		con.query(query,function (err,result) {
			if (result.affectedRows) 
			{
				res.redirect('/BDiZ/systemdiscount/');
			}
		});
});

app.post('/BDiZ/guarantee/edit/:list', function (req,res){
	var query = "UPDATE `guarantee` SET";
			query += " `list`='"+req.body.list+"' ,";
			query += " `productCode`='"+req.body.productCode+"' ,";
			query += " `endGuarantee`='"+req.body.endGuarantee+"',";
			query += " `typeOfGuaranteeWork`='"+req.body.typeOfGuaranteeWork+"'";
			query += "WHERE `guarantee`.`list`="+req.body.list+"";
		con.query(query,function (err,result) {
			if (result.affectedRows) 
			{
				res.redirect('/BDiZ/guarantee/');
			}
		});
});



app.post('/BDiZ/staff/add', function (req,res) {
	var query = "INSERT INTO `personal` (name,birthday,phoneNumber,activeInvoice,WorkExp) VALUES(";
			query += " '"+req.body.name+"' ,";
			query += " '"+req.body.birthday+"' ,";
			query += " '"+req.body.phoneNumber+"' ,";
			query += " '"+req.body.activeInvoice+"' ,";
			query += " '"+req.body.WorkExp+"' )";
		
	con.query(query,function(err,result){
		res.redirect('/BDiZ/staff/');
		});
});

app.post('/BDiZ/staff/edit/:phoneNumber', function (req,res){
	var query = "UPDATE `personal` SET";
			query += " `name`='"+req.body.name+"' ,";
			query += " `birthday`='"+req.body.birthday+"' ,";
			query += " `phoneNumber`='"+req.body.phoneNumber+"' ,";
			query += " `activeInvoice`='"+req.body.activeInvoice+"' ,";
			query += " `WorkExp`='"+req.body.WorkExp+"'";
			console.log('good');
			query += "WHERE `personal`.`phoneNumber`="+req.body.phoneNumber+"";
			console.log('nice');
		con.query(query,function (err,result) {
			if (result.affectedRows) 
			{
				res.redirect('/BDiZ/staff/');
			}
		});
});


	app.get('/BDiZ/client/delete/:list',function(req,res){

		con.query("DELETE FROM `client` WHERE list='" + req.params.list+"'",function (err,result) {
			

			if (result.affectedRows) {
				res.redirect('/BDiZ/client/');
			}
		});
	});

	app.get('/BDiZ/staff/delete/:phoneNumber',function(req,res){

		con.query("DELETE FROM `personal` WHERE phoneNumber='" + req.params.phoneNumber+"'",function (err,result) {
			

			if (result.affectedRows) {
				res.redirect('/BDiZ/staff/');
			}
		});
	});

		app.get('/BDiZ/guarantee/delete/:list',function(req,res){

		con.query("DELETE FROM `guarantee` WHERE list='" + req.params.list+"'",function (err,result) {
			

			if (result.affectedRows) {
				res.redirect('/BDiZ/guarantee/');
			}
		});
	});

		app.get('/BDiZ/storage/delete/:productCode',function(req,res){

		con.query("DELETE FROM `storage` WHERE productCode='" + req.params.productCode+"'",function (err,result) {
			

			if (result.affectedRows) {
				res.redirect('/BDiZ/storage/');
			}
		});
	});


	app.get('/BDiZ/systemdiscount/delete/:phoneNumber',function(req,res){

		con.query("DELETE FROM `systemdiscount` WHERE phoneNumber='" + req.params.phoneNumber+"'",function (err,result) {
			

			if (result.affectedRows) {
				res.redirect('/BDiZ/systemdiscount/');
			}
		});
	});

	app.get('/BDiZ/works/delete/:list',function(req,res){

		con.query("DELETE FROM `works` WHERE list='" + req.params.list+"'",function (err,result) {
			

			if (result.affectedRows) {
				res.redirect('/BDiZ/works/');
			}
		});
	});

var server = app.listen(4000,function () {
	console.log('server started on 4000.....');
});