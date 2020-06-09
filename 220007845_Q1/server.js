// basic stuff
const express = require('express');
const app = express();
const port = process.env.PORT

// mongoose
const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    date_of_birth: {type: Date, required: true},
    contact_phone: String,
    residental_address: String,
    emergency_contact_phone: String
});

const PaymentSchema = new mongoose.Schema({
    full_name: String,
    payment_date: Date,
    amount_paid: Number,
    balance_amount: Number
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/goodhealthDb');
Patient = mongoose.model('Patient', PatientSchema);
Payment = mongoose.model('Payment', PaymentSchema);

app.get('/login'), (req, res) => {

});

app.post('/login'), (req, res) => {

});

app.get('/logout'), (req, res) => {

});

app.get('/patients'), (req, res) {

});

app.get('/patients/edit/:patientId') {

});

app.post('/patients/edit') {

});

app.get('/patients/add'), (req, res) {

});

app.post('/patients/add'), (req, res) {

});

app.listen(port);
console.log('Started Web app on port: ' + port)
