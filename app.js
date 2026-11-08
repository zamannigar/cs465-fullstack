// JavaScript source code
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

// Set up Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'app_server', 'views', 'layouts')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Allow website images, CSS, and JavaScript to load
app.use(express.static(path.join(__dirname, 'public')));

// Connect the routes
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);

// Start the website
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Travlr website running on port ${PORT}`);
});
