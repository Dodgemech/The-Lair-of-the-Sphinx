const { Monster } = require('../models');

const monsterData = [
    {
        name: 'Gorgon',
        level: 1,
        strength: 1,
        image: 'Default',
        description:"This hideous beast is able to turn people to stone with a single glare! Make sure to answer any riddles it poses correctly or you will find yourself defeated instantly!"
    },
    {
        name: 'Ghost',
        level: 1,
        strength: 2,
        image: 'Default',
        description:"A spooky spirit haunting the halls. Its wails echo up and down the corridors. Even though it is dangerous, isn’t there something a little cute about it?"
    },
    {
        name: 'Angry Ghost',
        level: 1,
        strength: 3,
        image: 'Default',
        description:"Pretty much the same as a normal ghost, but PISSED off! Watch yourself! It may try to possess you!"
    },
    {
        name: 'Unusually Sized Rodent',
        level: 1,
        strength: 4,
        image: 'Default',
        description:"Usually found in more swampy environments it appears one of these plus size vermin made its way into this dungeon. Watch out for its sharp incisors!"
    },
    {
        name: 'Slime',
        level: 1,
        strength: 5,
        image: 'Default',
        description:"Slime are found in nearly every dungeon. This guy shouldn’t give you much trouble!"
    },
    {
        name: 'Bat',
        level: 1,
        strength: 6,
        image: 'Default',
        description:"Scree! Scree!! Scree!!!"
    },
    {
        name: 'Dragon',
        level: 1,
        strength: 7,
        image: 'Default',
        description:"A ferocious dragon prowls these halls. Its fiery breath has spelled the end for many a treasure hunting hero. Solve the riddles it poses to slay the beast and proceed."
    },
    {
        name: 'Goblin',
        level: 1,
        strength: 8,
        image: 'Default',
        description:"Gobah-lins, Gobah-lins, Gobah-lins! While they may look small don’t be fooled. These little guys can really pack a punch!"
    },
    {
        name: 'Gains Goblin',
        level: 1,
        strength: 9,
        image: 'Default',
        description:"The Gains Goblin is a goblin that has grown far stronger than its kin by stealing the hard earned gains of human beings. Beware the giant lollipop it wields! While it may look like a tasty treat, it can really pack a wallop!"
    },
    {
        name: 'Skeleton',
        level: 1,
        strength: 10,
        image: 'Default',
        description:"Both spooky and scary, these bags of bones  are the remains of former adventurers reanimated by dark magic."
    },
    {
        name: 'Snake',
        level: 1,
        strength: 11,
        image: 'Default',
        description:"Why did it have to be snakes?!?"
    },
    {
        name: 'Floating Eye',
        level: 1,
        strength: 12,
        image: 'Default',
        description:"These creepy peepers love to hide just behind corners and spy on people before ambushing them. Luckily you spotted it before it got the drop on you. Solve its riddle to send it on its way"
    },{
        name: 'Death Spider',
        level: 1,
        strength: 13,
        image: 'Default',
        description:"Is that a giant floating skull in the dark corridor ahead? No! It’s a giant spider, which I would argue is much worse!"
    },
    {
        name: 'Vampire',
        level: 1,
        strength: 14,
        image: 'Default',
        description:"It would seem that a coven of vampires has also taken shelter within the Sphinx’s lair. Beware these ferocious bloodsuckers! They are known for their high intelligence."
    },
    {
        name: 'Cursed Dragon',
        level: 1,
        strength: 15,
        image: 'Default',
        description:"An ancient and ferocious dragon befallen by a terrible curse. Although it appears to be in pain, it has tremendous strength and wields fell magic. Be extremely careful fighting this beast!"
    },
    {
        name: 'Blob',
        level: 1,
        strength: 16,
        image: 'Default',
        description:"While it may look a bit simmilar to the slime, the blob as significantly more deadly. Its body is capable of absorbing and disolving almost anything."
    },
    {
        name: 'Tri-Death',
        level: 1,
        strength: 17,
        image: 'Default',
        description:"A horrible amalgamation of skulls and black magic. Its breath carries death and can make plants wither and die. Beware!"
    },
    {
        name: 'Cursed Sword',
        level: 1,
        strength: 18,
        image: 'Default',
        description:"A hero’s lost blade inhabited by an angry poltergeist! While it looks pretty old, the edge is still sharp as a razor!"
    },
    {
        name: 'Mandrake',
        level: 1,
        strength: 19,
        image: 'Default',
        description:"The screeching wails of the mandarake are almost loud enough to make your ears bleed. The voice of the plant-like being is so loud it is difficult to make out the riddle it asks, but you manage…"
        
    },
    {
        name: 'Sphinx',
        level: 1,
        strength: 20,
        image: 'Default',
        description:"The Mighty Sphinx, Master of this dungeon and wielder of many powerful and ancient magics, stands before you. You ready your blade and prepare your mind as she utters her riddle. This is it. Defeat her and the treasure is yours brave hero!"
    }
]

const seedMonsters = () => Monster.bulkCreate(monsterData);

module.exports = seedMonsters;