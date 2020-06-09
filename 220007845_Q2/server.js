// basic
const express = require('express');
const app = express();
const port = 3000;

// mongoose
var mongoose = require('mongoose');
var StudentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    dob: Date,
    contact_number: String
});
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/studentsdb');
Student = mongoose.model('Student', StudentSchema);

// json parser
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes. not exactly as per instructions, but this is the only way to make
// it work

app.get('/student', (req, res) => {
    Student.find({}, (err, student) => {
	if (err) {
	    res.send(err);
	} else {
	    res.json(student);
	}});
});

app.post('/student', (req, res) => {
    var student = new Student(req.body);
    task.save((err, student) => {
	if (err) {
	    res.send(err);
	} else {
	    res.json(student);
	}
    });
});

app.put('/student/:studentId', (res, req) => {
    Student.findOneAndUpdate(
	{_id: req.params.studentId},
	req.body,
	{new: true},
	(err, student) => {
	    if (err) {
		res.send(err);
	    } else {
		res.json(student);
	    }
	});
});

app.delete('/student/:studentId', (res, req) => {
    Student.remove({_id: req.params.studentId}, (err, student) => {
	if (err) {
	    res.send(err);
	} else {
	    res.json({message: 'Deleted: ' + req.params.studentId});
	}
    });
});

// start listening
app.listen(port)
console.log('Started Web API on port: ' + port)
