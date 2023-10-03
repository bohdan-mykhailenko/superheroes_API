'use strict';

module.exports = {
  up: async (queryInterface) => {
    const superheroesData = [
      {
        nickname: 'Superman',
        real_name: 'Clark Kent',
        origin_description: 'Kryptonian superhero',
        superpowers: 'Super strength, flight, heat vision, etc.',
        catch_phrase: 'Up, up, and away!',
        images: ['superman1.jpg', 'superman2.jpg'],
      },
      {
        nickname: 'Spider Man',
        real_name: 'Peter Parker',
        origin_description: 'Bitten by a radioactive spider',
        superpowers: 'Wall-crawling, web-shooting, spider-sense',
        catch_phrase: 'With great power comes great responsibility.',
        images: ['spiderman1.jpg', 'spiderman2.jpg'],
      },
      {
        nickname: 'Wonder Woman',
        real_name: 'Diana Prince',
        origin_description: 'Amazonian warrior',
        superpowers: 'Super strength, agility, lasso of truth',
        catch_phrase: 'I am Diana, Princess of Themyscira!',
        images: ['wonderwoman1.jpg', 'wonderwoman2.jpg'],
      },
      {
        nickname: 'Batman',
        real_name: 'Bruce Wayne',
        origin_description: 'Billionaire vigilante',
        superpowers: 'Intelligence, martial arts, gadgets',
        catch_phrase: 'I am vengeance. I am the night.',
        images: ['batman1.jpg', 'batman2.jpg'],
      },
      {
        nickname: 'The Flash',
        real_name: 'Barry Allen',
        origin_description: 'Struck by lightning with chemicals',
        superpowers: 'Super speed, time manipulation',
        catch_phrase: 'Fastest man alive!',
        images: ['flash1.jpg', 'flash2.jpg'],
      },
      {
        nickname: 'Aquaman',
        real_name: 'Arthur Curry',
        origin_description: 'Half-Atlantean king',
        superpowers: 'Super strength, underwater communication',
        catch_phrase: 'Ruler of the Seven Seas!',
        images: ['aquaman1.jpg', 'aquaman2.jpg'],
      },
      {
        nickname: 'Green Lantern',
        real_name: 'Hal Jordan',
        origin_description: 'Chosen by the Green Lantern ring',
        superpowers: 'Willpower, energy constructs',
        catch_phrase: 'In brightest day, in blackest night...',
        images: ['greenlantern1.jpg', 'greenlantern2.jpg'],
      },
      {
        nickname: 'Thor',
        real_name: 'Thor Odinson',
        origin_description: 'Asgardian god of thunder',
        superpowers: 'Super strength, Mjolnir hammer',
        catch_phrase: "By Odin's beard!",
        images: ['thor1.jpg', 'thor2.jpg'],
      },
      {
        nickname: 'Black Widow',
        real_name: 'Natasha Romanoff',
        origin_description: 'Spy and assassin',
        superpowers: 'Master spy, martial artist',
        catch_phrase: "I'm always picking up after you, boys.",
        images: ['blackwidow1.jpg', 'blackwidow2.jpg'],
      },
      {
        nickname: 'Captain America',
        real_name: 'Steve Rogers',
        origin_description: 'Super-soldier',
        superpowers: 'Enhanced strength, shield',
        catch_phrase: 'I can do this all day.',
        images: ['captainamerica1.jpg', 'captainamerica2.jpg'],
      },
    ];

    await queryInterface.bulkInsert('Superheroes', superheroesData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Superheroes', null, {});
  },
};
