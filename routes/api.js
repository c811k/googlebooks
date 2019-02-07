const router = require("express").Router();
const Book = require("../models/Book.js");

router.get("/api/books", (req, res) => {
    Book.find({}).then( (data) => {
        res.json(data);
    }).catch( (err) => {
        res.json(err);
    });
});

router.post("/api/books", (req, res) => {
    Book.create(req.body).then( () => {
        res.end();
    });
});

router.delete("/api/books/:id", (req, res) => {
    Book.findOneAndDelete({ 
        _id: req.params.id 
    }).then( (data) => {
        res.json(data);
    }).catch( (err) => {
        res.json(err);
    });
});

// router.get("*", (req, res) => {

// });

module.exports = router;