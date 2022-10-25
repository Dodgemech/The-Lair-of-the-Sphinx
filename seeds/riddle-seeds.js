const { Riddle } = require('../models');

const riddleData = [
    {
        // Easy Riddles
        question: "What has to be broken before you can use it? An ___" ,
        answers: "egg"
    },
    {

        question: "I’m tall when I’m young, and I’m short when I’m old. What am I? A _____",
        answers: "apple"
    },
    {
        question: "What is full of holes but still holds water? A ______",
        answers: "sponge"
    },
    {
        question: "What is always in front of you but can’t be seen? The ______",
        answers: "future"
    },
    {
        question: "What can you break, even if you never pick it up or touch it? A _______",
        answers: "promise"
    },
    {
        question: "What gets wet while drying? A _____",
        answers: "towel"
    },
    {
        question: "I shave every day, but my beard stays the same. What am I? A ______",
        answers: "barber"
    },
    {
        question: "You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first? A _____",
        answers: "match"
    },
    {
        question: "I have branches, but no fruit, trunk or leaves. What am I? A ____",
        answers: "bank"
    },
    {
        question: "What can’t talk but will reply when spoken to? An ____",
        answers: "echo"
    },
    {
        question: "The more of this there is, the less you see. What is it?  ________",
        answers: "darkness"
    },
    {
        question: "David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?  _____",
        answers: "david"
    },
    {
        question: "What has many keys but can’t open a single lock? A _____",
        answers: "piano"
    },
    {
        question: "What gets bigger when more is taken away? A ____",
        answers: "hole"
    },
    {
        question: "Where does today come before yesterday? The __________",
        answers: "dictionary"
    },
    {
        question: "If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I? A ______",
        answers: "secret"
    },
    {
        question: "What goes up and down but doesn’t move? A _________",
        answers: "staircase"
    },
    {
        // Funny riddles
        question: "What has lots of eyes, but can’t see? A ______",
        answers: "potato"
    },
    {
        question: "What has one eye, but can’t see? A ______",
        answers: "needle"
    },
    {
        question: "What has hands, but can’t clap? A _____",
        answers: "clock"
    },
    {
        question: "What has legs, but doesn’t walk? A _____",
        answers: "table"
    },
    {
        question: "What has one head, one foot and four legs? A ___",
        answers: "bed"
    },
    {
        question: "What can you catch, but not throw? A ____",
        answers: "cold"
    },
    {
        question: "What has many teeth, but can’t bite? A ____",
        answers: "comb"
    },
    {
        question: "What has words, but never speaks? A ____",
        answers: "book"
    },
    {
        question: "What runs all around a backyard, yet never moves? A _____",
        answers: "fence"
    },
    {
        question: "What can travel all around the world without leaving its corner? A _____",
        answers: "stamp"
    },
    {
        question: "What has a head and a tail but no body? A ____",
        answers: "coin"
    },
    {
        question: "What building has the most stories? The _______",
        answers: "library"
    },
    {
        // Word riddles
        question: "I am an odd number. Take away a letter and I become even. What number am I?  _____",
        answers: "seven"
    },
    {
        question: "What five-letter word becomes shorter when you add two letters to it?  _____",
        answers: "short"
    },
    {
        question: "What begins with an 'e' and only contains one letter? An ________",
        answers: "envelope"
    },
    {
        question: "A word I know, six letters it contains, remove one letter and 12 remains. What is it?  ______",
        answers: "dozens"
    },
    {
        question: "You see me once in June, twice in November and not at all in May. What am I? _",
        answers: "e"
    },
    {
        question: "Two in a corner, one in a room, zero in a house, but one in a shelter. What is it? _",
        answers: "r"
    },
    {
        question: "What 4-letter word can be written forward, backward or upside down, and can still be read from left to right? ____",
        answers: "noon"
    },
    {
        question: "I am a word of letters three; add two and fewer there will be. What word am I? ___",
        answers: "few"
    },
    {
        question: "What word of five letters has one left when two are removed? _____",
        answers: "stone"
    },
    {
        question: "What word is pronounced the same if you take away four of its five letters? _____",
        answers: "queue"
    },
    {
        question: "What word in the English language does the following: The first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word? _______",
        answers: "heroine"
    },
    {
        // Hard riddles
        question: "What is so fragile that saying its name breaks it? _______",
        answers: "silence"
    },
    {
        question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps? A _____",
        answers: "river"
    },
    {
        question: "What can fill a room but takes up no space? _____",
        answers: "light"
    },
    {
        question: "If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I? A ___________",
        answers: "mirror"
    },
    {
        question: "The more you take, the more you leave behind. What are they? _________",
        answers: "footsteps"
    },
    {
        question: "People make me, save me, change me, raise me. What am I? _____",
        answers: "money"
    },
    {
        question: "What goes through cities and fields, but never moves? A ____",
        answers: "road"
    },
    {
        question: " I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I? ____",
        answers: "fire"
    },
    {
        question: "The person who makes it has no need of it; the person who buys it has no use for it. The person who uses it can neither see nor feel it. What is it? A ______",
        answers: "coffin"
    },
    {
        question: "With pointed fangs I sit and wait; with piercing force I crunch out fate; grabbing victims, proclaiming might; physically joining with a single bite. What am I? A _______",
        answers: "stapler"
    },
    {
        question: "I have lakes with no water, mountains with no stone and cities with no buildings. What am I? A ___",
        answers: "map"
    }
]

const seedRiddles = () => Riddle.bulkCreate(riddleData);

module.exports = seedRiddles;