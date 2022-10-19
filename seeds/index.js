const seedMonsters = require('./monster-seeds');
const seedRiddles = require('./riddle-seeds');
const seedMonsterRiddles = require('./monster-riddle-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    console.log('---Begining seeding process---')
    await sequelize.sync({ force: true });
    console.log('---Connected to DB---');
    await seedMonsters();
    console.log('---Monsters seeded---');
    await seedRiddles();
    console.log('---Riddles seeded---');
    await seedMonsterRiddles();
    console.log('---Monster Riddle associations seeded---');
    console.log('\n---Your Dungeon is now ready!---\n');
    process.exit(0);
};

seedAll();