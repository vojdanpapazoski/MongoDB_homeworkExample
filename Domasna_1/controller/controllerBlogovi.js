const mongoose = require("mongoose");
let controlerBlogovi = require("../model/blogPattern");

const createBlog = async (req,res) => {
try {
    const newBlog = await controlerBlogovi.create(req.body);
    res.send(newBlog);
} catch (err) {
res.status(400).json({
    status: "Greska",
    message: err
});
};
};

const getAllBlogs = async (req,res) => {
    try{
        const blogs = await controlerBlogovi.find();
        res.status(200).json ({
            test: "Testiranje",
            status: "Uspesno",
            data: { 
                blogs: blogs
            }
        });
    } catch (err) {
res.status (404).json ({
    status: "Error 404",
    message: err
});
    };
};


// gi eksportirame funkciite 
module.exports = {createBlog,getAllBlogs};