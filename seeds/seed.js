const userSeeded = require('./userData.js');
const postSeeded = require('./postData.js');
const commentSeeded = require('./commentData.js');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  try {
      await sequelize.sync({ force: true });
      console.log("DATABASE SYNCED");

      await userSeeded();
      console.log("USER DATA SEEDED");

      await postSeeded();
      console.log("POST DATA SEEDED");

      await commentSeeded();
      console.log("POST DATA SEEDED");
    }

  catch(err) {
    console.log('error');
    process.exit(0);
  }
};


seedDatabase();
