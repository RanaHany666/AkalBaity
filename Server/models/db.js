const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.n9sb7.mongodb.net/Registration?retryWrites=true&w=majority')
.then(()=> console.log('Connected Successfuly...'))
.catch(()=>console.log('Error'))

require('./user.model');
require('./product.model');