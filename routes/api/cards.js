const express = require("express");
const router = express.Router();

// Card Model
const Card = require("../../models/Card");

// @route   GET api/cards
// @desc    Get all cards
// @access  Public
router.get("/", (req, res) => {
  Card.find()
    .sort({ id: -1 })
    .then(card => res.json(card))
    .catch(err => res.json({ statue: false, err }));
});

// @route   POST api/cards
// @desc    post cards
// @access  Public
router.post("/", (req, res) => {
  Card.find().then(cards => {
    card = cards[cards.length - 1];

    const newCard = new Card({
      id: req.body.id || card.id + 1,
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      github: req.body.github,
      live: req.body.live
    });

    newCard
      .save()
      .then(() => res.json(newCard))
      .catch(err => res.status(400).json({ err }));
  });
});

module.exports = router;
