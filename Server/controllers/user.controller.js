const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');
// const Product = mongoose.model('Product');


module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.city = req.body.city;
    user.streetAddress = req.body.streetAddress;
    user.number = req.body.number;
    
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email','city','streetAddress','number']) });
        }
    );
}

// module.exports.getProducts = (req,res) =>{
//     Product.find({},
//         (err, product) => {
//             if (err) throw err;
//             // console.log(product.name);
//             else return res.status(200).json({ status: true, product });
//         }
//     );
// }

// module.exports.dashboard = (req, res, next) => {
//     var product = new Product();
//     console.log(req.file)
//     product.name = req.body.name;
//     product.price = req.body.price;
//     product.description = req.body.description;
//     product.category = req.body.category;
//     product.productImage = req.file.path

//     product.save((err, doc) => {
//         if (!err)
//             res.send(doc);
//         else {
//             if (err.code == 11000)
//                 res.status(422).send(['Duplicate Name found.']);
//             else
//                 return next(err);
//         }

//     });
// }