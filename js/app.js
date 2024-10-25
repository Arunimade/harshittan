var app = angular.module('eventPlannerApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.user = {};
    $scope.showLoginModal = true;
    $scope.loginData = {};
    $scope.activeSection = 'home';  // Default section is Home
    // Image Slider Logic
    $scope.images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg' // Add your image paths here
    ];
    $scope.currentImageIndex = 0;

    window.onload = function() {
        setTimeout(function() {
            document.getElementById("loading").style.display = "none";
        }, 3000); // Adjust time as needed
    };
    
    // Function to change the image every few seconds
    function changeImage() {
        $scope.currentImageIndex = ($scope.currentImageIndex + 1) % $scope.images.length;
        setTimeout(changeImage, 3000); // Change image every 3 seconds
    }

    // Start the image slider
    changeImage();
    $scope.hostedEvents = [
        { name: 'Wedding at Umaid Bhawan Palace', image: 'images/wedding_umaid_bhawan.jpg' },
        { name: 'Corporate Event at Taj Mahal Palace', image: 'images/corporate_taj_mahal.jpg' },
        { name: 'Birthday Party at Ajit Bhawan Palace', image: 'images/birthday_ajit_bhawan.jpg' },
        { name: 'Engagement Ceremony at Rambagh Palace', image: 'images/engagement_rambagh.jpg' }
    ];
    
    // Food Item Data
    $scope.foodItems = {
        vegStarters: {
            title: 'Veg Starters',
            items: [
                { name: 'Paneer Tikka', price: 220, plates: 0, image: 'images/veg1.jpeg' },
                { name: 'Veg Spring Roll', price: 180, plates: 0, image: 'images/veg2.jpeg' },
                { name: 'Panner Manchuriyan', price: 140, image: 'images/veg3.jpeg', quantity: 0 },
                { name: 'Panner Chilli', price: 120, image: 'images/veg4.jpeg', quantity: 0 },
                { name: 'Panner 65', price: 140, image: 'images/veg5.jpeg', quantity: 0 },
                { name: 'Baby Corn', price: 100, image: 'images/veg6.jpeg', quantity: 0 },
                { name: 'Baby Corn 65', price: 120, image: 'images/veg7.jpeg', quantity: 0 },
                { name: 'Chinese Bhel', price: 110, image: 'images/veg8.jpeg', quantity: 0 },
                { name: 'Paneer Crispy', price: 140, image: 'images/veg9.jpeg', quantity: 0 },
                { name: 'Chesse Kabab', price: 160, image: 'images/veg10.jpeg', quantity: 0 },
                { name: 'Pani Puri', price: 80, image: 'images/veg11.jpeg', quantity: 0 },
                { name: 'Aloo Papdi Chaat', price: 80, image: 'images/veg12.jpeg', quantity: 0 }
            ]
        },
        nonVegStarters: {
            title: 'Non-Veg Starters',
            items: [
                { name: 'Chicken Tikka', price: 220, plates: 0, image: 'images/non1.jpeg' },
                { name: 'Fish Fry', price: 240, plates: 0, image: 'images/non2.jpeg' },
                { name: 'Chicken spring rolls', price: 450, image: 'images/non3.jpeg', quantity: 0 },
                { name: 'Fish and chicken pakora', price: 250, image: 'images/non4.jpeg', quantity: 0 },
                { name: 'Chilli Prawns', price: 500, image: 'images/non5.jpeg', quantity: 0 },
                { name: 'Crispy baked Rangoon', price: 450, image: 'images/non6.jpeg', quantity: 0 },
                { name: 'Vegetable cheese omelet', price: 200, image: 'images/non7.jpeg', quantity: 0 },
                { name: 'Meatballs', price: 550, image: 'images/non8.jpeg', quantity: 0 },
                { name: 'Chicken Patties', price: 600, image: 'images/non9.jpeg', quantity: 0 }
            ]
        },
        drinks: {
            title: 'Drinks',
            items: [
                { name: 'Vanilla special', price: 150, image: 'images/shake1.webp', quantity: 0 },
                { name: 'Paan Shake', price: 170, image: 'images/shake2.jpg', quantity: 0 },
                { name: 'Blueberry cheesecake', price: 200, image: 'images/shake3.webp', quantity: 0 },
                { name: 'Raspberry and white chocolate', price: 210, image: 'images/shake4.webp', quantity: 0 },
                { name: 'Pina colada', price: 150, image: 'images/shake5.webp', quantity: 0 },
                { name: 'Triple nut caramel', price: 250, image: 'images/shake7.webp', quantity: 0 },
                { name: 'Neapolitan', price: 150, image: 'images/shake8.webp', quantity: 0 }
            ]
        },
        desserts: {
            title: 'Desserts',
            items: [
                { name: 'Gulab Jamun', price: 180, image: 'images/sweet1.jpg', quantity: 0 },
                { name: 'Kalakand', price: 250, image: 'images/sweet2.jpg', quantity: 0 },
                { name: 'Sheera', price: 180, image: 'images/sweet3JPG.JPG', quantity: 0 },
                { name: 'Ghevar', price: 200, image: 'images/sweet4.webp', quantity: 0 }
            ]
        },
        iceCreams: {
            title: 'Ice Creams',
            items: [
                { name: 'Choclate Ice cream', price: 180, image: 'images/ice1.jpeg', quantity: 0 },
                { name: 'Butter scotch', price: 250, image: 'images/ice2.jpeg', quantity: 0 },
                { name: 'Paan Ice cream', price: 180, image: 'images/ice3.jpeg', quantity: 0 },
                { name: 'Malai Kulfi', price: 200, image: 'images/ice4.jpeg', quantity: 0 }
            ]
        },
        vegMainCourse: {
            title: 'Veg Main Course',
            items: [
                { name: 'Panner Tikka Masala', price: 180, image: 'images/main1.jpeg', quantity: 0 },
                { name: 'Panner butter Masala', price: 250, image: 'images/main2.jpeg', quantity: 0 },
                { name: 'Panner Lavabdar', price: 180, image: 'images/main3.jpeg', quantity: 0 },
                { name: 'Chakki ki Sabzi', price: 200, image: 'images/main5.jpeg', quantity: 0 },
                { name: 'Dal fry', price: 180, image: 'images/main6.jpeg', quantity: 0 },
                { name: 'Dal Makhani', price: 170, image: 'images/main7.jpeg', quantity: 0 },
                { name: 'Dal Tadka', price: 200, image: 'images/main8.jpeg', quantity: 0 },
                { name: 'Ghee Roti', price: 80, image: 'images/main9.jpeg', quantity: 0 },
                { name: 'Butter Tandoori', price: 200, image: 'images/main10.jpeg', quantity: 0 },
                { name: 'Butter Naan', price: 200, image: 'images/main11.jpeg', quantity: 0 }
            ]
        },
        nonVegMainCourse: {
            title: 'Non-Veg Main Course',
            items: [
                { name: 'Keema Curry', price: 180, image: 'images/nm1.jpeg', quantity: 0 },
                { name: 'Butter Chicken ', price: 250, image: 'images/nm2.jpeg', quantity: 0 },
                { name: 'Chicken Tikka Masala', price: 180, image: 'images/nm3.jpeg', quantity: 0 },
                { name: 'Chicken Vindaloo', price: 200, image: 'images/nm4.jpeg', quantity: 0 },
                { name: 'Chicken Dum Biryani', price: 180, image: 'images/nm5.jpeg', quantity: 0 },
                { name: 'Achari Chicken', price: 170, image: 'images/nm6.jpeg', quantity: 0 }
            ]
        },
        extraSupplies: {
            title: 'Extra Supplies',
            items: [
                { name: 'Water Bottle(100 ml)', price: 30, image: 'images/refresh1.jpg', quantity: 0 },
                { name: 'Paan', price: 100, image: 'images/refresh2.jpg', quantity: 0 },
                { name: 'Small Plates(for staters)', price: 180, image: 'images/refresh3.jpg', quantity: 0 }
            ]
        }
    };

    $scope.selectedFoodType = '';
    $scope.activeFoodItems = null;

    // Function to toggle food items based on selected type
    $scope.toggleFoodItems = function(type) {
        if ($scope.activeFoodItems && $scope.activeFoodItems.title === $scope.foodItems[type].title) {
            $scope.activeFoodItems = null; // Collapse if it's already open
        } else {
            $scope.activeFoodItems = $scope.foodItems[type]; // Set active food items
        }
    };

    $scope.cart = [];
    $scope.venues = [];
    $scope.selectedCity = '';
    $scope.selectedVenue = '';
    $scope.eventStartDate = '';
    $scope.eventEndDate = '';
    $scope.totalDays = 0;
    $scope.venueCost = 0;

    // Venue data based on location
    $scope.venueData = {
        jodhpur: [
            { name: 'Umaid Bhawan Palace', price: 500000, image: 'images/jodhpur1.jpeg' },
            { name: 'Ajit Bhawan Palace', price: 400000, image: 'images/jodhpur2.jpeg' }
        ],
        mumbai: [
            { name: 'Taj Mahal Palace', price: 700000, image: 'images/mumbai2.jpeg' },
            { name: 'The Oberoi', price: 600000, image: 'images/mumbai3.jpeg' }
        ],
        jaipur: [
            { name: 'Rambagh Palace', price: 5500000, image: 'images/indore1.webp' },
            { name: 'Jai Mahal Palace', price: 450000, image: 'images/indore2.webp' }
        ]
    };

    $scope.selectedLocation = '';
    $scope.venues = [];
    $scope.totalDays = 0;

    // Load venues based on selected location
    $scope.loadVenues = function(location) {
        $scope.venues = $scope.venueData[location] || [];
    };

    // Calculate the number of days between start and end dates
    $scope.calculateDays = function() {
        if ($scope.startDate && $scope.endDate) {
            var start = new Date($scope.startDate);
            var end = new Date($scope.endDate);
            var timeDiff = end.getTime() - start.getTime();
            $scope.totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // Include both start and end day
        } else {
            $scope.totalDays = 0;
        }
    };

    $scope.loggedIn = false;  // Track login state
$scope.username = '';     // Initialize username

$scope.login = function() {
    if ($scope.username && $scope.password && $scope.email && $scope.phone && $scope.location) {
        // Send login data to backend
        $http.post('/api/login', {
            username: $scope.username,
            password: $scope.password,
            email: $scope.email,
            phone: $scope.phone,
            location: $scope.location
        }).then(function(response) {
            $scope.loggedIn = true;
            alert('Welcome, ' + $scope.username + '!');
        }).catch(function(error) {
            alert('Login failed. Please try again.');
        });
    } else {
        alert('Please fill in all required fields.');
    }
};


    $scope.closeLogin = function() {
        $scope.showLoginModal = false;
    };

    $scope.setActiveSection = function(section) {
        $scope.activeSection = section;  // Set the active section based on user click
    };

    $scope.updateVenues = function() {
        $scope.venues = $scope.venueData[$scope.selectedCity] || [];
    };

    $scope.addVenueToCart = function(venue) {
        if ($scope.totalDays > 0) {
            var totalPrice = venue.price * $scope.totalDays;
            $scope.cart.push({
                type: 'Venue',
                name: venue.name,
                unitPrice: venue.price,
                quantity: $scope.totalDays,
                totalPrice: totalPrice
            });
            alert(venue.name + ' added to cart for ' + $scope.totalDays + ' days.');
        } else {
            alert('Please select both start and end dates.');
        }
    };

    // Add Food to Cart with detailed info
    $scope.addToCart = function(item) {
        var totalPrice = item.price * item.plates;
        $scope.cart.push({
            type: 'Food',
            name: item.name,
            unitPrice: item.price,
            quantity: item.plates,
            totalPrice: totalPrice
        });
        alert(item.name + ' added to cart.');
    };

    // Remove item from Cart
    $scope.removeFromCart = function(index) {
        $scope.cart.splice(index, 1);
    };

    // Calculate total price of the cart
    $scope.calculateTotal = function() {
        var total = 0;
        $scope.cart.forEach(function(item) {
            total += item.totalPrice;
        });
        return total;
    };

    // Checkout functionality (placeholder for now)
    $scope.checkout = function() {
        alert('Proceeding to checkout.');
    };

    $scope.addVenueToCart = function(venue) {
        if ($scope.totalDays > 0) {
            var totalPrice = venue.price * $scope.totalDays;
            $scope.cart.push({
                type: 'Venue',
                name: venue.name,
                totalPrice: totalPrice,
                days: $scope.totalDays
            });
            alert(venue.name + ' added to cart for ' + $scope.totalDays + ' days.');
        } else {
            alert('Please select both start and end dates.');
        }
    };

    // Function to add selected item to cart
    $scope.addToCart = function(item) {
        if (item.plates > 0) {
            $scope.cart.push({
                type: 'Food',
                name: item.name,
                totalPrice: item.price * item.plates,
                quantity: item.plates
            });
            alert(item.name + ' added to cart');
            item.plates = 0; // Reset plates count after adding to cart
        } else {
            alert('Please specify the number of plates required.');
        }
    };
    $scope.checkout = function() {
        $http.post('/api/checkout', {
            username: $scope.username,
            cartItems: $scope.cart
        }).then(function(response) {
            alert('Checkout successful!');
            $scope.cart = []; // Clear the cart after checkout
        }).catch(function(error) {
            alert('Checkout failed. Please try again.');
        });
    };
}]);