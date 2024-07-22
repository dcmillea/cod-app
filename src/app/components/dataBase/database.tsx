import wawCoverArt from "../../images/home/WAW_Cover_Art.jpg";

export const database = () => {
  return [
    {
      title: "World at War",
      release_date: "2008-11-11",
      game_description:
        "Confront new and ruthless enemies across the Pacific and European battlefields in the final days of WW2. Jump into enhanced infantry and vehicle-based multiplayer action with persistent stats, upgradable weapons, and more Perks than ever before. Harness the power of the online four-player Co-op Campaign Mode.",
      rating: 84,
      trailer: "https://www.youtube.com/watch?v=ondfCsioE0E",
      coverArt: wawCoverArt,
      gameModes: [
        {
          zombies: {
            maps: [
              {
                name: "Nacht der Untoten",
                description: `Translated from German, the name is ${"Night of the Undead."} It is the first zombies map ever made and it begins with a short cutscene where your character sees a swarm of Nazi zombies heading towards him after his plane (which was carrying 1-4 people depending on how many players are in the game) crashes in ${"No Man's Land"} near an abandoned bunker. Nacht der Untoten features many weapons from both the campaign and multiplayer modes (although there are no Japanese weapons available), and introduced the Ray Gun.`,
                map_type: "casual",
                image:
                  "https://static.wikia.nocookie.net/callofduty/images/2/2b/Nacht_Der_Untoten_Menu_Selection_WaW.png/revision/latest?cb=20161009103531",
                rating: {
                  overall: "24.5/60",
                  atmosphere: "6.5/10",
                  layout: "2/10",
                  replayability: "1/10",
                  story: "1/10",
                  innovation: "10/10",
                  gameplay: "4/10",
                },
              },
              {
                name: "Verrukt",
                description: `Verrückt translates from German into the word "insane" or "crazy". and is set in an abandoned insane asylum that was originally used by the Nazis. The player character is a US Marine, like in Nacht der Untoten, with up to four Marines depending on the number of players. Verruckt introduced the Electro-Shock Defenses, the Perk-a-cola machines, and the power switch used to restore the electricity in the asylum. It also made it possible to purchase Bouncing Betties.`,
                map_type: "casual",
                image:
                  "https://static.wikia.nocookie.net/callofduty/images/a/a1/Verruckt_Menu_Selection_WaW.png/revision/latest?cb=20161009103542",
                rating: {
                  overall: "29.4/60",
                  atmosphere: "7.2/10",
                  layout: "4.7/10",
                  replayability: "2/10",
                  story: "1/10",
                  innovation: "8/10",
                  gameplay: "6.5/10",
                },
              },
              {
                name: "Shi No Numa",
                description: `Shi No Numa translates from Japanese to English as "Swamp of Death". Set in a swamp in the Pacific, this map features the reanimated corpses of Imperial Japanese Army troops. Nikolai Belinski, Tank Dempsey, Takeo Masaki and Edward Richtofen are introduced in this map, and serve as the player characters: Player 1 (the host) plays as Dempsey, Player 2 plays as Nikolai, Player 3 plays as Takeo, and Player 4 plays as Richtofen. A meteor fell somewhere in the swamp, and contained Element 115 (ununpentium) in it, and there is some speculation that the group is there to extract a sample of this. Shi No Numa features the Wunderwaffe DG-2 (Created by Edward Richtofen), a powerful Wonder Weapon capable of firing electricity at the player's targets (including friendly fire, so be careful). The Hellhounds, a special enemy fought during certain rounds, also debuted here.`,
                map_type: "casual",
                image:
                  "https://static.wikia.nocookie.net/callofduty/images/2/2f/Shi_No_Numa_Menu_Selection_WaW.png/revision/latest?cb=20161009103553",
                rating: {
                  overall: "36/60",
                  atmosphere: "6.9/10",
                  layout: "6/10",
                  replayability: "1.8/10",
                  story: "5.5/10",
                  innovation: "9/10",
                  gameplay: "6.8/10",
                },
              },
              {
                name: "Der Reise",
                description: `Der Riese (German for The Giant) is the fourth map in the Zombies game mode. It is the final Zombies map in Call of Duty: World at War. It is set in Group 935's main base of operations known as Waffenfabrik Der Riese, in Lower Silesia near Breslau, Germany (now Wrocław in Poland), and was the debut of the teleporters and the Pack-a-Punch Machine, a machine that for 5000 points allows players to upgrade their weapon. It was released in Map Pack 3 along with three multiplayer maps, on August 6, 2009.`,
                map_type: "casual",
                image:
                  "https://static.wikia.nocookie.net/callofduty/images/8/86/Der_Riese_Menu_Selection_WaW.png/revision/latest?cb=20161009103603",
                rating: {
                  overall: "45.4/60",
                  atmosphere: "6.6/10",
                  layout: "8/10",
                  replayability: "6.5/10",
                  story: "8/10",
                  innovation: "9/10",
                  gameplay: "7.3/10",
                },
              },
            ],
          },
        },
        { multiplayer: {} },
      ],
    },
    {
      title: "Black Ops 1",
      release_date: "2010-11-9",
      game_description: "",
      rating: 88,
      trailer: "https://www.youtube.com/watch?v=OPTOVQFRggI",
      gameModes: [],
      guns: [],
    },
    {
      title: "Black Ops 2",
      release_date: "2012-11-13",
      game_description: "",
      rating: 90,
      trailer: "https://www.youtube.com/watch?v=F6vOWbJ46XU",
      gameModes: [],
    },
    {
      title: "Black Ops 3",
      release_date: "2015-11-6",
      game_description: "",
      rating: 92,
      trailer: "https://www.youtube.com/watch?v=qAUYNIDEJ6o",
      gameModes: [],
      guns: [],
    },
    {
      title: "Black Ops 4",
      release_date: "2018-10-12",
      game_description: "",
      rating: 86,
      trailer: "https://www.youtube.com/watch?v=6kqe2ICmTxc",
      gameModes: [],
      guns: [],
    },
  ];
};

export const mapRanker = () => {
  return [
    {
      key: Math.random() - Math.random(),
      name: "Nacht der Untoten",
      description: `Translated from German, the name is ${"Night of the Undead."} It is the first zombies map ever made and it begins with a short cutscene where your character sees a swarm of Nazi zombies heading towards him after his plane (which was carrying 1-4 people depending on how many players are in the game) crashes in ${"No Man's Land"} near an abandoned bunker. Nacht der Untoten features many weapons from both the campaign and multiplayer modes (although there are no Japanese weapons available), and introduced the Ray Gun.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/2/2b/Nacht_Der_Untoten_Menu_Selection_WaW.png/revision/latest?cb=20161009103531",
      rating: {
        atmosphere: 6.5,
        layout: 2,
        replayability: 1,
        quest: 1,
        innovation: 10,
        gameplay: 4,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Verrukt",
      description: `Verrückt translates from German into the word "insane" or "crazy". and is set in an abandoned insane asylum that was originally used by the Nazis. The player character is a US Marine, like in Nacht der Untoten, with up to four Marines depending on the number of players. Verruckt introduced the Electro-Shock Defenses, the Perk-a-cola machines, and the power switch used to restore the electricity in the asylum. It also made it possible to purchase Bouncing Betties.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/a/a1/Verruckt_Menu_Selection_WaW.png/revision/latest?cb=20161009103542",
      rating: {
        atmosphere: 7.2,
        layout: 4.7,
        replayability: 2,
        quest: 1,
        innovation: 8,
        gameplay: 6.5,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Shi No Numa",
      description: `Shi No Numa translates from Japanese to English as "Swamp of Death". Set in a swamp in the Pacific, this map features the reanimated corpses of Imperial Japanese Army troops. Nikolai Belinski, Tank Dempsey, Takeo Masaki and Edward Richtofen are introduced in this map, and serve as the player characters: Player 1 (the host) plays as Dempsey, Player 2 plays as Nikolai, Player 3 plays as Takeo, and Player 4 plays as Richtofen. A meteor fell somewhere in the swamp, and contained Element 115 (ununpentium) in it, and there is some speculation that the group is there to extract a sample of this. Shi No Numa features the Wunderwaffe DG-2 (Created by Edward Richtofen), a powerful Wonder Weapon capable of firing electricity at the player's targets (including friendly fire, so be careful). The Hellhounds, a special enemy fought during certain rounds, also debuted here.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/2/2f/Shi_No_Numa_Menu_Selection_WaW.png/revision/latest?cb=20161009103553",
      rating: {
        atmosphere: 6.9,
        layout: 6,
        replayability: 1.8,
        quest: 5.5,
        innovation: 9,
        gameplay: 6.8,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Der Reise",
      description: `Der Riese (German for The Giant) is the fourth map in the Zombies game mode. It is the final Zombies map in Call of Duty: World at War. It is set in Group 935's main base of operations known as Waffenfabrik Der Riese, in Lower Silesia near Breslau, Germany (now Wrocław in Poland), and was the debut of the teleporters and the Pack-a-Punch Machine, a machine that for 5000 points allows players to upgrade their weapon. It was released in Map Pack 3 along with three multiplayer maps, on August 6, 2009.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/8/86/Der_Riese_Menu_Selection_WaW.png/revision/latest?cb=20161009103603",
      rating: {
        atmosphere: 6.6,
        layout: 8,
        replayability: 6.5,
        quest: 8,
        innovation: 9,
        gameplay: 7.3,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Kino Der Toten",
      description: `Kino der Toten (German for Cinema/Theater of the Dead) is the fifth Zombies map overall, featured in Call of Duty: Black Ops and Call of Duty: Black Ops III. The map takes place in at Group 935's Kino Facility, at an abandoned theater in Germany, and it is the first map available to the player in Call of Duty: Black Ops. The map introduces some new components to the Zombies mode, including Crawler Zombies and the Fire Pit trap. The Thundergun is introduced in this map as a new Wonder Weapon. The cast of Shi No Numa and Der Riese return as the playable characters: "Tank" Dempsey, Nikolai Belinski, Takeo Masaki, and Edward Richtofen.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/9/97/Kino_Der_Toten_Menu_Selection_BO.png/revision/latest?cb=20240710065123",
      rating: {
        atmosphere: 7,
        layout: 7.5,
        replayability: 6,
        quest: 1.5,
        innovation: 2.7,
        gameplay: 7.2,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Five",
      description: `"Five" is the sixth Zombies map, and the second in Call of Duty: Black Ops. The map is unlocked after completing the final campaign mission, "Redemption", on any difficulty, or by entering the code '3ARC UNLOCK' on the computer terminal in the main menu, which will also unlock Dead Ops Arcade. It takes place in The Pentagon, the United States Military Defense building, located in Arlington, Virginia.`,
      map_type: "competitive",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/3/34/Five_Menu_Selection_BO.png/revision/latest?cb=20240710065748",
      rating: {
        atmosphere: 8.2,
        layout: 3,
        replayability: 5.5,
        quest: 1,
        innovation: 6.7,
        gameplay: 6,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Ascension",
      description: `Ascension is the eighth Zombies map overall and is available in Call of Duty: Black Ops and Call of Duty: Black Ops III. First released in the First Strike map pack for Call of Duty: Black Ops, the map takes place in an abandoned Soviet Cosmodrome in the Soviet Union. The map introduces some new components to the Zombies mode, including Space Monkeys, which replace Hellhounds from the previous maps, and the first easter egg quest.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/f/fd/Ascension_Menu_Selection_BO.png/revision/latest?cb=20240710071357",
      rating: {
        atmosphere: 7,
        layout: 6.8,
        replayability: 7.5,
        quest: 5,
        innovation: 10,
        gameplay: 8.6,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Call of the Dead",
      description: `Call of the Dead is the ninth Call of Duty: Black Ops Zombies map. Treyarch called it "a unique Zombies experience" and is "a very special creation for all Zombie fans". The level is the first to feature actual celebrities fighting off zombies and features George A. Romero as one of the zombies. Call of the Dead occurs in an abandoned Group 935 Siberian outpost, which features a shipwrecked freighter, a vibrant lighthouse, and a sparse coast.`,
      map_type: "competitive",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/7/78/Call_of_the_Dead_Menu_Selection_BO.png/revision/latest?cb=20240710073620",
      rating: {
        atmosphere: 7.3,
        layout: 8.5,
        replayability: 8,
        quest: 5.5,
        innovation: 7,
        gameplay: 7.5,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Shangri-La",
      description: `Shangri-La, colloquially known as Paradise, is the Zombies map featured in Call of Duty: Black Ops and Call of Duty: Black Ops III's Zombies Chronicles. It is the tenth Zombies map released, and was first released as apart of the Annihilation map pack in Call of Duty: Black Ops. The map takes place in an unknown mountain range in the Himalayas. The map introduces some new components to the Zombies mode, including speciality zombies and brand new traps and utilities such as the Mine Cart.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/d/d5/Shangri-La_Menu_Selection_BO.png/revision/latest?cb=20240710075204",
      rating: {
        atmosphere: 9,
        layout: 5.9,
        replayability: 4,
        quest: 6,
        innovation: 6.8,
        gameplay: 5.5,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Moon",
      description: `Moon is the eleventh and final Zombies map included in Call of Duty: Black Ops in the Rezurrection map pack. It was released on August 23, 2011 for Xbox 360 and September 22, 2011 on PS3 and PC. The Ultimis characters, Dempsey, Nikolai, Takeo and Richtofen, once again return. Moon is the largest Zombies map in Call of Duty: Black Ops, and the third largest zombies map in terms of playable area after Green Run and Origins.`,
      map_type: "competitive",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/c/cc/Moon_Menu_Selection_BO.png/revision/latest?cb=20240710075602",
      rating: {
        atmosphere: 8,
        layout: 3.8,
        replayability: 7.4,
        quest: 9.1,
        innovation: 9,
        gameplay: 7,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Green Run",
      description: `Green Run is a Zombies map that is featured in Call of Duty: Black Ops II, and the twelfth Zombies map overall. Primarily, it is the map in which TranZit is a playable game mode that connects all the Survival maps and other areas consisting of the zombie maps set in Green Run into one large "campaign" mode, with an optional objective to complete. The map is split into five locations: Bus Depot, Diner, Farm, Power Plant, and Town, four of which are playable as separate maps in the Survival, Grief or Turned mode maps. The Power Plant can only be accessed in TranZit mode. The events in the map are set after the events of Richtofen's Grand Scheme from the previous zombie map in Call of Duty: Black Ops, Moon.`,
      map_type: "competitive",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/2/23/TranZit_menu_icon_BOII.png/revision/latest?cb=20130508210139",
      rating: {
        atmosphere: 5,
        layout: 0.5,
        replayability: 1,
        quest: 2,
        innovation: 7,
        gameplay: 2.8,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Nuketown",
      description: `Nuketown Zombies, also known as Nuketown in-game, and Nuke'dTown Zombies! in concept art, is a Zombies map that is featured in Call of Duty: Black Ops II, and the thirteenth Zombies map overall. It is based on Nuketown, a multiplayer map from Call of Duty: Black Ops and Call of Duty: Black Ops II.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/7/74/Nuketown_menu_selection_BO2.png/revision/latest?cb=20161102222934",
      rating: {
        atmosphere: 4,
        layout: 4.7,
        replayability: 6.6,
        quest: 1,
        innovation: 0.6,
        gameplay: 7.3,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Die Rise",
      description: `Die Rise, also known as Great Leap Forward and Skyscraper, is the fourteenth Zombies map. It is included in the Call of Duty: Black Ops II downloadable content pack, Revolution. It was released on January 29, 2013, for Xbox 360 and February 28, 2013, for PlayStation 3 and PC. The downloadable content pack costs $14.99 (1200 Microsoft Points) but is also a part of the Season Pass.`,
      map_type: "competitive",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/6/60/Die_Rise_menu_selection_BO2.png/revision/latest?cb=20161102222915",
      rating: {
        atmosphere: 7.2,
        layout: 4.1,
        replayability: 3.6,
        quest: 3.3,
        innovation: 6.1,
        gameplay: 6.3,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Mob of the Dead",
      description: `Mob of the Dead occurs within the infamous Alcatraz Island and includes the Golden Gate Bridge; the juncture of the map is set during the Prohibition-era of America. The four playable characters are Finn O'Leary, Albert Arlington, Salvatore DeLuca, and Billy Handsome. These mobsters are inmates of Alcatraz and attempt to execute an escape plan during the night of the zombie outbreak.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/a/aa/Mob_of_the_Dead_menu_selection_BO2.png/revision/latest?cb=20161102222825",
      rating: {
        atmosphere: 9,
        layout: 7.8,
        replayability: 7.8,
        quest: 7,
        innovation: 10,
        gameplay: 9,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Buried",
      description: `Buried, also known as Resolution 1295 and Processing, is a Zombies map included in the Vengeance downloadable content pack for Call of Duty: Black Ops II. It is the sixteenth Zombies map in the Zombies storyline, and chronologically the last on the original timeline.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/7/71/Buried_menu_BOII.png/revision/latest?cb=20161102222409",
      rating: {
        atmosphere: 8.7,
        layout: 6.6,
        replayability: 5,
        quest: 7.5,
        innovation: 9,
        gameplay: 8.7,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Origins",
      description: `Origins, also known as Excavation Site 64 and Dig Site, is a Zombies map included in the Apocalypse downloadable content for Call of Duty: Black Ops II released on August 27, 2013, for the Xbox 360 and on September 26, 2013, for the PlayStation 3 and PC. It is the seventeenth Zombies level to be released, and the first to feature the Primis crew.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/b/b2/Origins_Lobby_Icon_BO2.png/revision/latest?cb=20161102222425",
      rating: {
        atmosphere: 9,
        layout: 7.9,
        replayability: 9.1,
        quest: 9.8,
        innovation: 9,
        gameplay: 9,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Shadows of Evil",
      description: `Shadows of Evil is the eighteenth (chronologically the third) Zombies map. It is the first Zombies map in Call of Duty: Black Ops III and was released along with the game on November 6, 2015, for PlayStation 4, Xbox One, PlayStation 3, Xbox 360 and PC.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/1/14/Shadows_of_Evil_Menu_Selection_BO3.png/revision/latest/scale-to-width-down/1000?cb=20240702060940",
      rating: {
        atmosphere: 9.8,
        layout: 9.7,
        replayability: 8.8,
        quest: 8.8,
        innovation: 9.2,
        gameplay: 8.8,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Der Eisendrache",
      description: `Der Eisendrache (German for The Iron Dragon) is a Zombies map that was released February 2, 2016 for the PlayStation 4, and March 3, 2016 for PC and Xbox One in the DLC map pack Awakening. It was released on April 5th, 2016 for PlayStation 3 and May 5th on Xbox 360. It is set in Austria within the Griffin Castle, also known as Eagle's nest. The size of the map is 50% bigger than The Giant. Two Wonder Weapons are introduced, the Ragnarok DG-4 which is based on the Gravity Spikes from multiplayer, and the Wrath of the Ancients, which is based on the Sparrow, a multiplayer specialist weapon.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/e/e4/Der_Eisendrache_Menu_Selection_BO3.png/revision/latest/scale-to-width-down/1000?cb=20240702061147",
      rating: {
        atmosphere: 9,
        layout: 8.9,
        replayability: 8.2,
        quest: 9.7,
        innovation: 7.8,
        gameplay: 8.4,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Zetsubou No Shima",
      description: `Zetsubou No Shima (Japanese: 絶望の島; English: Island of Despair) is a Zombies map released on April 19, 2016 first on PlayStation 4, and May 19, 2016 for Xbox One and PC, as part of the Eclipse DLC map pack. It takes place on an abandoned island in the Pacific Ocean, where the ruins of Division 9's research roam the island. Mutated plants and animals serve as the enemies. Primis returns, setting out to kill the original Takeo to change the events of the original timeline much like the original Richtofen and Dempsey in the previous maps.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/0/06/Zetsubou_No_Shima_Menu_Selection_BO3.png/revision/latest/scale-to-width-down/1000?cb=20240702061314",
      rating: {
        atmosphere: 9.6,
        layout: 7,
        replayability: 7.2,
        quest: 7.8,
        innovation: 7.9,
        gameplay: 8.1,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Gorod Krovi",
      description: `Gorod Krovi (Russian: Город Крови; English: City of Blood) is a Zombies map for Call of Duty: Black Ops III, released on July 12, 2016 for the Playstation 4, and released on August 11th for the Xbox One and PC, and is part of the Descent DLC map pack. It features the return of the Origins crew as they set out to kill the original Nikolai Belinski and preserve his soul in the Summoning Key.`,
      map_type: "competitive",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/7/72/Gorod_Krovi_Menu_Selection_BO3.png/revision/latest/scale-to-width-down/1000?cb=20240702061419",
      rating: {
        atmosphere: 7.5,
        layout: 8.6,
        replayability: 7.9,
        quest: 9.5,
        innovation: 7.7,
        gameplay: 8.9,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Revelations",
      description: `Revelations is the twenty-fourth Zombies map and the final map featured in Call of Duty: Black Ops III. The map takes place within Agartha after the release of the Shadowman from the Summoning Key. In contrast to other maps, the cosmic appearance of Revelations is distinct from other previous maps. The map features recurring gameplay elements such as the Guard of Fafnir and the Ragnarok DG-4s, but introduced new features such as the Corruption Engines and a new type of enemy, the Fury. Furthermore, fragments of past maps such as Shangri-La and Origins feature as structural components of the map.`,
      map_type: "casual",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/d/de/Revelations_Menu_Selection_BO3.png/revision/latest/scale-to-width-down/1000?cb=20240702061505",
      rating: {
        atmosphere: 9,
        layout: 8.1,
        replayability: 6,
        quest: 4.6,
        innovation: 2.2,
        gameplay: 7.3,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Blood of the Dead",
      description: `Blood of the Dead is the third Zombies map that is featured in Call of Duty: Black Ops 4, and the twenty-seventh map overall. It is a reimagined version, as well as a sequel of the fan-favorite map Mob of the Dead from Call of Duty: Black Ops II.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/f/f5/BOTD_Loading_Screen_BO4.jpg/revision/latest/scale-to-width-down/1000?cb=20181026122702",
      rating: {
        atmosphere: 8.5,
        layout: 6,
        replayability: 4,
        quest: 6.8,
        innovation: 3,
        gameplay: 6.1,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Classified",
      description: `Classified is a Zombies map that is included with the Black Ops Pass for Call of Duty: Black Ops 4. The fourth map featured in the game and the twenty-eighth map overall, it is a reimagining of the map "Five", which was previously featured in Call of Duty: Black Ops.`,
      map_type: "competitive",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/f/f0/Classified_Loading_Screen.jpg/revision/latest/scale-to-width-down/1000?cb=20181218012248",
      rating: {
        atmosphere: 6,
        layout: 3.5,
        replayability: 4.5,
        quest: 1.5,
        innovation: 2,
        gameplay: 5,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Tag der Toten",
      description: `Tag der Toten (German: Day of the Dead) is the eighth and final Zombies map for Call of Duty: Black Ops 4, the twenty-fifth and final Aether Story map, and the thirty-second map overall. It released on September 23rd, 2019 for PlayStation 4, and was released September 30th, 2019 on Xbox One and PC.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/e/ee/TagDerToten_LoadingScreen_BO4.png/revision/latest/scale-to-width-down/1000?cb=20190927170817",
      rating: {
        atmosphere: 8.3,
        layout: 7,
        replayability: 6,
        quest: 7.9,
        innovation: 3.9,
        gameplay: 6,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "IX",
      description: `IX (pronounced Nine) is the second Zombies map featured in Call of Duty: Black Ops 4, and the twenty-sixth map overall. Chronologically, it is the third map in the Chaos story. This map introduces two new special enemies: the Destroyers and the Marauders. There are also Zombified Tigers that appear randomly throughout the map. The map also introduces a new wonder weapon, the Death of Orion, as well as a new variant of the shield, the Brazen Bull.`,
      map_type: "competitive",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/6/61/IX_Loading_Screen_BO4.jpg/revision/latest/scale-to-width-down/1000?cb=20181026003523",
      rating: {
        atmosphere: 8.8,
        layout: 7.9,
        replayability: 6.1,
        quest: 8.3,
        innovation: 5,
        gameplay: 7.8,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Voyage of Despair",
      description: `Voyage of Despair is the first Zombies map featured in Call of Duty: Black Ops 4, and the twenty-fifth map overall. Chronologically, it is the second map in the Chaos story. The map is set on the RMS Titanic, after an attempt to steal an ancient artifact known as the Sentinel Artifact goes wrong. This map also introduces three new enemies; the Catalyst, Stoker, and Blightfather.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/6/65/Voyage_loading_screen.jpg/revision/latest/scale-to-width-down/1000?cb=20181026122650",
      rating: {
        atmosphere: 8.2,
        layout: 1.9,
        replayability: 3.3,
        quest: 7,
        innovation: 5.9,
        gameplay: 6,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Dead of the Night",
      description: `Dead of the Night is the fifth Zombies map featured in Call of Duty: Black Ops 4, and the twenty-ninth map overall. Chronologically, it is the first map in the Chaos story. It was released on December 11th, 2018 first for PlayStation 4, and a week later on December 18th, 2018 for Xbox One and PC. The map is available through the Black Ops Pass.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/4/4c/Dead_of_the_Night_BO4.jpg/revision/latest/scale-to-width-down/1000?cb=20181208224019",
      rating: {
        atmosphere: 8.9,
        layout: 8.7,
        replayability: 6.6,
        quest: 8.4,
        innovation: 6,
        gameplay: 6.9,
      },
    },
    {
      key: Math.random() - Math.random(),
      name: "Ancient Evil",
      description: `Ancient Evil is the sixth Zombies map featured in Call of Duty: Black Ops 4, and the thirtieth map overall. Chronologically, it is the fourth and final map in the Chaos story. The map was released on March 26th, 2019 on PlayStation 4, and was released on April 2nd, 2019 for Xbox One and PC.`,
      map_type: "hardcore",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/6/6e/AncientEvil_LoadingScreen_Zombies_BO4.jpg/revision/latest/scale-to-width-down/1000?cb=20190327093059",
      rating: {
        atmosphere: 9.5,
        layout: 8.8,
        replayability: 7.9,
        quest: 9.3,
        innovation: 7,
        gameplay: 8.5,
      },
    },
  ];
};

export const bossRanker = () => {
  return [
    {
      key: Math.random() - Math.random(),
      name: "Panzersoldat",
      description: `The Panzersoldat (German: Armoured Soldier), also known as Mech Z[1] is an enemy that appears on the maps Origins, Der Eisendrache and Revelations. It takes the appearance of a zombie in an armored suit, and will jump in from outside the map boundaries using a rocket pack to attack players.`,
      map_fit: "good fit",
      reward: "random power up, fire staff piece",
      innovation: 10,
      boss_type: "Tank",
      image:
        "https://static.wikia.nocookie.net/callofduty/images/5/5c/Panzersoldat_Origins_BO3.jpg/revision/latest/scale-to-width-down/1000?cb=20170623063041",
    },
  ];
};

// Types:
// Tank, Ranged, Speedster, Support,
