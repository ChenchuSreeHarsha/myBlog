const express = require('express')
const articleRouter = require("./routes/articles")
const Article = require('./models/article')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb://localhost/bharatInternDatabase')
app.set("views", "./view")
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/', async(req, res) => {
    const articles =await Article.find().sort({ createdAt:'desc'})
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(3000)



// const express = require('express');
// const articleRouter = require('./routes/articles')
// const Article = require('./models/article')
// const methodoverride = require('method-override')
// const mongoose = require('mongoose')
// const app = express();

// mongoose.connect('mongodb://localhost:27017/blog')

// app.set('view engine','ejs')
// app.use(express.urlencoded({extended:false}))

// app.use(methodoverride('_method'))
// app.get('/',async(req,res)=>{
//     const articles = await Article.find().sort({createdAt:'desc'})
//   res.render('articles/index',{articles:articles})
// })

// app.use('/articles',articleRouter)



// app.listen(3000);



// It is chatgpt code ......
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/blog', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define a schema for blog posts
// const postSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const Post = mongoose.model('Post', postSchema);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // Get all posts
// app.get('/posts', async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // Create a new post
// app.post('/posts', async (req, res) => {
//   const { title, content } = req.body;
//   try {
//     const post = new Post({ title, content });
//     await post.save();
//     res.status(201).json(post);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
