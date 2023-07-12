const controlerBlogovi = require("../model/blogPattern");

// Kreiranje na blog
const createBlog = async (req, res) => {
  try {
    const newBlog = await controlerBlogovi.create(req.body);
    res.send(newBlog);
  } catch (err) {
    res.status(400).json({
      status: "Mistake during creating of Blog",
      message: err
    });
  }
};

// Zemanje na site blogovi
const getAllBlogs = async (req, res) => {
  try {
 const query = {...req.query};
 let queryString = JSON.stringify(query)
 queryString = queryString.replace(
  /\b(gte|gt|lte|lt)\b/g,
  (match) => `$${match}`
 );
 const parsed = JSON.parse(queryString);
    const blogsQ = await controlerBlogovi.find(parsed);
  
res.status(200).json({
status: "Successfully getting all blogs",
data: blogsQ
})

  } catch (err) {
    res.status(404).json({
      status: "Error getting all blogs",
      message: err
    });
  }
};


// Zemanje na eden blog po naslov
const getOneBlog = async (req,res) => {
    try {
     const edenBlog = await controlerBlogovi.findOne({title: req.params.title});
    res.status(200).json({
        status:"Blog is Successfully found",
        data: edenBlog
    });
    } catch (err) {
        res.status(404).json({
        status: "Failed to find Blog",
        message: err
        });
    }
};

// zemanje na blog so ID 
const getOneWithID = async (req,res) => {
    try {
        const findId = await controlerBlogovi.findById(req.params.id)
        res.status(200).json({
            status: "Blog is found by ID",
            data: findId
        });
    } catch (err) {
        res.status(404).json({
        status: "Failed to Find with ID",
        message: err    
        });
    }
}

// Update na blog 
const updateBlog = async (req, res) => {
  try {
    const update = await controlerBlogovi.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "Update was successful",
      data: update
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed to Update",
      message: err
    });
  }
};

// brisenje na blog 
const deleteBlog = async (req, res) => {
  try {
    await controlerBlogovi.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "Document was successfully deleted",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed to Delete",
      message: err
    });
  }
};

// Gi eksportirame funkciite 
module.exports = { createBlog, getAllBlogs, getOneWithID, getOneBlog, updateBlog, deleteBlog };
