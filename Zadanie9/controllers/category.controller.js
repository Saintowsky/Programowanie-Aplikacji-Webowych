const Category = require('../models/category.model')

const category = [];

exports.getAll = (req, res) => {
    res.status(200).send(category);
};

exports.add = (req, res) => {
    console.log(req.body);
    const createCategory = new Category(req.body.id, req.body.name, req.body.quantity);
    category.push(createCategory);
    res.status(201).send(createCategory);
}

exports.update = (req, res) => {
    console.log(req.body);
    const updateCategory = new Category(req.body.id, req.body.name, req.body.quantity);
    const categoryIndex = category.findIndex((hamster) => hamster.id === req.body.id);
    category.splice(categoryIndex, 1, updateCategory);
    res.status(200).send(updateCategory);
}

exports.delete = (req, res) => {
    console.log(req.params.id);
    const categoryIndex = category.findIndex((cat) => cat.id === req.param.id)
    const deleted = category.splice(categoryIndex, 1)
    res.status(200).send(deleted)
}