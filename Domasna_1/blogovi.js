// se lansira expres 
const express = require("express");
// se lansira mongoose 
const mongoose = require("mongoose");
// se povikuvaat funkciite 
const { getAllBlogs, createBlog } = require("./controller/controllerBlogovi");

const Blog = require("./model/blogPattern");
// se pokrenuva aplikacijata 
const app = express();

// parsiranje na informacii forma frontend 
app.use(express.urlencoded({extended:true}))

// se konektira so linkot baza na podatoci 
mongoose.connect("mongodb+srv://vojdan_papazoski:mongodb12345@cluster0.ii8u0pj.mongodb.net/Blog?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then (() => {
    console.log("Connected");
})
.catch ((err) => {
console.log(err);
})


// gi stavame get i post 
app.get("/blogs",getAllBlogs);
app.post("/blogs",createBlog);

// startuvanje na aplikacijata 
app.listen(10000, () => {
    console.log("Aplikacijata e startuvana ");
})

// const blogPattern = new mongoose.Schema({
//     title: {
//         type:String,
//         required: [true]
//     },
//     description: {
//         type:String,
//         required: [true]
//     },
//     rating: {
//         type: Number,
//         default: 3,
//     },
//     time: {
//         type:Date,
//         default: Date.now
//     },
//     author: {
//         type:String
//     }
// });


// const blog = mongoose.model("Blogovi", blogPattern);

const saveBlogs = async () => {
    try {
        const blog1 = new Blog(
            {
                title: "Travel Italy23",
                description: "Travel Italy experience food and lifestyle blog",
                rating: 9.3,
                time: Date.now(),
                author: "John Williams"
            })
            await blog1.save();
        
        const blog2 = new Blog({
            title: "Further",
            description: "Nature and landscape blog",
            rating: 7.8,
            time: Date.now(),
            author: "Anna Hawk"
        });
            await blog2.save();
        
        const blog3 = new Blog({
            title: "Pizza Place Palace",
            description: "Blog dedicated for pizza lovers active since 2012",
            rating: 8.0,
            time: Date.now(),
            author: "Andrei Bratov"
        });
            await blog3.save()
        
        const blog4 = new Blog({
            title: "Nikon2000",
            description: "Technical blog about Nikon brand products",
            rating: 8.5,
            time: Date.now(),
            author: "Joanna Stone"
        });
            await blog4.save();
            
        const blog5 = new Blog({
            title: "Save Amazon",
            description: "Amazon rainforest activists related blog",
            rating: 8.5,
            time: Date.now(),
            author: "Robert Rodriguez"
        });
            await blog5.save();
        
        const blog6 = new Blog({
            title: "Catworld",
            description: "Only place where you can find all informations and reviews about cat owners",
            rating: 8.5,
            time: Date.now(),
            author: "Fatima Kamara"
        });
            await blog6.save();
        
        const blog7 = new Blog({
            title: "ArtArtFi",
            description: "Blog and community hub for art lovers in Finland",
            rating: 7.9,
            time: Date.now(),
            author: "Kristian Bulo"
        });
            await blog7.save();
        
        const blog8 = new Blog({
            title: "Inspire and Flourish",
            description: "blog that combines mindfulness practices with a spirit of exploration",
            rating: 7.6,
            time: Date.now(),
            author: "Antonia Ling"
        });
            await blog8.save();
        
        const blog9 = new Blog({
            title: "Baking Bliss: Cookie Edition",
            description: "blog dedicated to recipes, tricks, and  achieving perfectly delicious cookies.",
            rating: 9.1,
            time: Date.now(),
            author: "Maria Espinoza Sanchez"
        });
            await blog9.save(); 
        
        const blog10 = new Blog({
            title: "Harmony Home",
            description: "Embark on a journey of furniture exploration",
            rating: 7.8,
            time: Date.now(),
            author: "Ayana Keita" 
        });
            await blog10.save();
        
            console.log("Blogs saved successfully");
        } catch (err) {
            console.log(err);
        }  
}

    
saveBlogs();





