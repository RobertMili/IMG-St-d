const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const BLOG_FILE = path.join(__dirname, 'data', 'blog.json');

app.use(bodyParser.json());

// Ensure the directory exists
const dir = path.join(__dirname, 'data');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// Read blog items from file
const readBlogItems = () => {
  if (!fs.existsSync(BLOG_FILE)) {
    return [];
  }
  const data = fs.readFileSync(BLOG_FILE);
  return JSON.parse(data);
};

// Write blog items to file
const writeBlogItems = (items) => {
  fs.writeFileSync(BLOG_FILE, JSON.stringify(items, null, 2));
};

// Get all blog items
app.get('/api/blogItems', (req, res) => {
  const blogItems = readBlogItems();
  res.json(blogItems);
});

// Add a new blog item
app.post('/api/blogItems', (req, res) => {
  const blogItems = readBlogItems();
  const newPost = req.body;
  blogItems.push(newPost);
  writeBlogItems(blogItems);
  res.status(201).json(newPost);
});

// Update a blog item
app.put('/api/blogItems/:index', (req, res) => {
  const blogItems = readBlogItems();
  const { index } = req.params;
  blogItems[index] = req.body;
  writeBlogItems(blogItems);
  res.json(blogItems[index]);
});

// Delete a blog item
app.delete('/api/blogItems/:index', (req, res) => {
  const blogItems = readBlogItems();
  const { index } = req.params;
  const removedItem = blogItems.splice(index, 1);
  writeBlogItems(blogItems);
  res.json(removedItem);
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});