const mongoose = require('mongoose');
const Product = mongoose.model('Product');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports.getProduct = (req, res, next) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2)); }
});
}

module.exports.getProductId = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.postProduct = (req, res, next) => {
    var product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category:req.body.category,
        image:req.body.image,
        inc:req.body.inc,
        qnt:req.body.qnt
    });
    product.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product Save :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.editProduct = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var product = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category:req.body.category,
            image:req.body.image,
        });
    Product.findByIdAndUpdate(req.params.id, { $set: product }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.deleteProduct = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product Delete :' + JSON.stringify(err, undefined, 2)); }
    });
}