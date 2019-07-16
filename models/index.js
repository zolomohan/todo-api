var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/todo-api");

mongoose.Promise = global.Promise;

module.exports.todo = require('./todo');