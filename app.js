const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const task = ["buy milk", "learn javascript", "learn express"];

app.post('/addtask', function (req, res) {
    const newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});
app.get("/", function(req, res) {
    res.render('todo', { task: task, complete: complete});
});


const complete = ["finish learning nodejs"];
app.post("/removetask", function(req, res) {
     const completeTask = req.body.check;
if (typeof completeTask === "string") {
     complete.push(completeTask);
  task.splice(task.indexOf(completeTask), 1);
  } else if (typeof completeTask === "object") {
    for (var i = 0; i < completeTask.length; i++) {     complete.push(completeTask[i]);
    task.splice(task.indexOf(completeTask[i]), 1);
}
}
   res.redirect("/");
});

app.listen(3000);
console.log('You are listening to port 3000');