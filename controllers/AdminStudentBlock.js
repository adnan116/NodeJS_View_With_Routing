var express 				= require('express');
var router 					= express.Router();
var studentModel   			= require.main.require('./models/student-model');


router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/');
	}else{
		next();
	}
});


router.get('/', function(req, res){
	studentModel.getAllActiveStudents(function(results){
		if(results.length > 0){
			console.log('Student Block list requested!');
    		res.render('AdminStudentBlock', {studentlist: results});
		}else{
			res.send('Null Value');
		}
	});
})


router.get('/AdminStudentBlockConfirm/:id', function(req, res){
	
	studentModel.getById(req.params.id, function(result){
		//console.log(result);
		res.render('AdminStudentBlockConfirm', {studentBlock: result[0]});
	});
});


router.post('/AdminStudentBlockConfirm/:id', function(req, res){
	console.log(req.params.id);
	studentModel.blockStudent(req.params.id, function(status){
		if(status){
			console.log(status);
			res.redirect('/AdminStudentBlock');
		}else{
			res.redirect('/AdminStudentBlockConfirm/'+req.params.id);
		}
	});
});

module.exports = router;