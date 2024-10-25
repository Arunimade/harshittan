const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const uri = "mongodb+srv://harshit:harshit@cluster0.vg9u0.mongodb.net/FINALSITE?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error:', err));

// Define User schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone: String,
    location: String
});

// Define Cart schema
const cartItemSchema = new mongoose.Schema({
    type: String,
    name: String,
    unitPrice: Number,
    quantity: Number,
    totalPrice: Number
});

const checkoutSchema = new mongoose.Schema({
    username: String,
    items: [cartItemSchema],
    totalAmount: Number
});

// Create models
const User = mongoose.model('User', userSchema);
const Checkout = mongoose.model('Checkout', checkoutSchema);

// Routes

// User login route
app.post('/api/login', (req, res) => {
    const { username, password, email, phone, location } = req.body;

    const newUser = new User({ username, password, email, phone, location });
    newUser.save()
        .then(user => res.json({ message: 'User logged in and saved successfully', user }))
        .catch(err => res.status(400).json({ error: 'Error saving user', err }));
});

// Cart checkout route
app.post('/api/checkout', (req, res) => {
    const { username, cartItems } = req.body;

    const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

    const newCheckout = new Checkout({
        username,
        items: cartItems,
        totalAmount
    });

    newCheckout.save()
        .then(checkout => res.json({ message: 'Checkout successful', checkout }))
        .catch(err => res.status(400).json({ error: 'Checkout error', err }));
});
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://harshit:harshit@cluster0.vg9u0.mongodb.net/FINALSITE';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
