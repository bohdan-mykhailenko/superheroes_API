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
        images: ['superman1.webp', 'superman2.webp', 'superman3.webp'],
      },
      {
        nickname: 'Spider Man',
        real_name: 'Peter Parker',
        origin_description: 'Bitten by a radioactive spider',
        superpowers: 'Wall-crawling, web-shooting, spider-sense',
        catch_phrase: 'With great power comes great responsibility.',
        images: ['spiderman1.webp', 'spiderman2.webp', 'spiderman3.webp'],
      },
      {
        nickname: 'Wonder Woman',
        real_name: 'Diana Prince',
        origin_description: 'Amazonian warrior',
        superpowers: 'Super strength, agility, lasso of truth',
        catch_phrase: 'I am Diana, Princess of Themyscira!',
        images: ['wonderwoman1.webp', 'wonderwoman2.webp', 'wonderwoman3.webp'],
      },
      {
        nickname: 'Batman',
        real_name: 'Bruce Wayne',
        origin_description: 'Billionaire vigilante',
        superpowers: 'Intelligence, martial arts, gadgets',
        catch_phrase: 'I am vengeance. I am the night.',
        images: ['batman1.webp', 'batman2.webp', 'batman3.webp'],
      },
      {
        nickname: 'The Flash',
        real_name: 'Barry Allen',
        origin_description: 'Struck by lightning with chemicals',
        superpowers: 'Super speed, time manipulation',
        catch_phrase: 'Fastest man alive!',
        images: ['flash1.webp', 'flash2.webp', 'flash3.webp'],
      },
      {
        nickname: 'Aquaman',
        real_name: 'Arthur Curry',
        origin_description: 'Half-Atlantean king',
        superpowers: 'Super strength, underwater communication',
        catch_phrase: 'Ruler of the Seven Seas!',
        images: ['aquaman1.webp', 'aquaman2.webp', 'aquaman3.webp'],
      },
      {
        nickname: 'Green Lantern',
        real_name: 'Hal Jordan',
        origin_description: 'Chosen by the Green Lantern ring',
        superpowers: 'Willpower, energy constructs',
        catch_phrase: 'In brightest day, in blackest night...',
        images: [
          'green_lantern1.webp',
          'green_lantern2.webp',
          'green_lantern3.webp',
        ],
      },
      {
        nickname: 'Thor',
        real_name: 'Thor Odinson',
        origin_description: 'Asgardian god of thunder',
        superpowers: 'Super strength, Mjolnir hammer',
        catch_phrase: "By Odin's beard!",
        images: ['thor1.webp', 'thor2.webp', 'thor3.webp'],
      },
      {
        nickname: 'Black Widow',
        real_name: 'Natasha Romanoff',
        origin_description: 'Spy and assassin',
        superpowers: 'Master spy, martial artist',
        catch_phrase: "I'm always picking up after you, boys.",
        images: ['black_widow1.webp', 'black_widow2.webp', 'black_widow3.webp'],
      },
      {
        nickname: 'Captain America',
        real_name: 'Steve Rogers',
        origin_description: 'Super-soldier',
        superpowers: 'Enhanced strength, shield',
        catch_phrase: 'I can do this all day.',
        images: [
          'captain_america1.webp',
          'captain_america2.webp',
          'captain_america3.webp',
        ],
      },
    ];

    await queryInterface.bulkInsert('Superheroes', superheroesData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Superheroes', null, {});
  },
};
