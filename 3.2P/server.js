var express = require("express")
var app = express()

const cardList = [
    {
        title: "Lion",
        image: "images/lion.jpg",
        link: "About Lions",
        description: "The lion (Panthera leo) is a large cat of the genus Panthera, currently ranging only in Sub-Saharan Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a dark, hairy tuft at the tip of its tail. It is sexually dimorphic; adult male lions are larger than females and have a more prominent mane that usually obscures the ears and extends to the shoulders."
    },
    {
        title: "Tiger",
        image: "images/tiger.png",
        link: "About Tigers",
        description: "The tiger (Panthera tigris) is a large cat and a member of the genus Panthera native to Asia. It has a powerful, muscular body with a large head and paws, a long tail and orange fur with black, mostly vertical stripes. It is traditionally classified into nine recent subspecies, though some recognise only two subspecies, mainland Asian tigers and the island tigers of the Sunda Islands."
    },
    {
        title: "Elephant",
        image: "images/elephant.jpg",
        link: "About Elephant",
        description: "Elephants are the largest land mammals on earth and have distinctly massive bodies, large ears, and long trunks. They use their trunks to pick up objects, trumpet warnings, greet other elephants, or suck up water for drinking or bathing, among other uses. Both male and female African elephants grow tusks and each individual can either be left- or right-tusked, and the one they use more is usually smaller because of wear and tear. Elephant tusks serve many purposes. These extended teeth can be used to protect the elephant's trunk, lift and move objects, gather food, and strip bark from trees. They can also be used for defense. During times of drought, elephants even use their tusks to dig holes to find water underground."
    }
]

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/animals', (req, res) => {
    res.json({ statusCode: 200, data: cardList });
});

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port)
})
