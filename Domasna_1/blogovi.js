// se lansira expres 
const express = require("express");

// se lansira mongoose 
const mongoose = require("mongoose");

// se povikuvaat funkciite 
const { createBlog, getAllBlogs, getOneBlog, getOneWithID, updateBlog, deleteBlog } = require("./controller/controllerBlogovi");

// se pokrenuva aplikacijata 
const app = express();

// parsiranje na informacii forma frontend, 
// when extended is TRUE req.body can be any type (string, object, array, number, undefined)
// when extended is FALSE req.body can be only string or array

app.use(express.urlencoded({extended:true}))

// se konektira so linkot baza na podatoci 
mongoose.connect("mongodb+srv://vojdan_papazoski:mongodb12345@cluster0.ii8u0pj.mongodb.net/Blog?retryWrites=true&w=majority",
{   
    //1 prviot argument e urlto do nashata data baza
    //2 vtoriot argument e konfiguracijata za taa data baza
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => {
    console.log("Connected so Mongo");
})
.catch ((err) => {
    console.error("An error has occurred", err);
});

// gi stavame get i post 
app.post("/blogs", createBlog);
app.get("/blogs", getAllBlogs);
app.get("/blogs/:id", getOneWithID);
app.get("/blogs/:title", getOneBlog);
app.patch("/blogs/:id", updateBlog);
app.delete("/blogs/:id", deleteBlog);



// startuvanje na aplikacijata 
app.listen(10000, (err) => {
    if (err) return console.error("Greska pri startuvanje na aplikacijata");
    console.log("Aplikacijata e startuvana ");
});
