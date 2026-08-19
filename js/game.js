
const baseCards=[
 {name:"Strike",type:"attack",cost:1,desc:"Deal 7 damage.",rarity:"Starter",effect:()=>damage(7)},
 {name:"Guard",type:"block",cost:1,desc:"Gain 6 block.",rarity:"Starter",effect:()=>block(6)},
 {name:"Power Strike",type:"attack",cost:2,desc:"Deal 10 damage.",rarity:"Starter",effect:()=>damage(10)},
 {name:"Focus",type:"skill",cost:0,desc:"Draw 1 extra card.",rarity:"Starter",effect:()=>drawCard()},
 {name:"Quick Cut",type:"attack",cost:0,desc:"Deal 4 damage.",rarity:"Starter",effect:()=>damage(4)},
 {name:"Stone Guard",type:"block",cost:2,desc:"Gain 9 block.",rarity:"Starter",effect:()=>block(9)}
];

const formerStarterCards=[
 {name:"Heavy Blow",type:"attack",cost:3,desc:"Deal 13 damage.",rarity:"Uncommon",effect:()=>damage(13)},
 {name:"Iron Wall",type:"block",cost:3,desc:"Gain 12 block.",rarity:"Uncommon",effect:()=>block(12)}
];

const temporaryEnergyCards=[
 {name:"Adrenal Surge",type:"skill",cost:1,desc:"Gain +2 temporary Energy this fight.",rarity:"Rare",effect:()=>{state.energy+=2;state.tempEnergy+=2}},
 {name:"Second Wind",type:"skill",cost:0,desc:"Gain +1 temporary Energy this fight.",rarity:"Uncommon",effect:()=>{state.energy+=1;state.tempEnergy+=1}},
 {name:"Overcharge",type:"skill",cost:2,desc:"Gain +4 temporary Energy this fight.",rarity:"Epic",effect:()=>{state.energy+=4;state.tempEnergy+=4}}
];

const collectibleCards=[
 {name:"Twin Slash",type:"attack",cost:2,desc:"Deal 9 damage.",rarity:"Common",effect:()=>damage(9)},
 {name:"Brace",type:"block",cost:2,desc:"Gain 10 block.",rarity:"Common",effect:()=>block(10)},
 {name:"Piercing Jab",type:"attack",cost:2,desc:"Deal 6 damage twice.",rarity:"Common",effect:()=>{damage(6);if(state.combat)damage(6)}},
 {name:"Battle Cry",type:"skill",cost:1,desc:"Gain 3 block and draw 1.",rarity:"Common",effect:()=>{block(3);drawCard()}},
 {name:"Smash",type:"attack",cost:2,desc:"Deal 16 damage.",rarity:"Uncommon",effect:()=>damage(16)},
 {name:"Fortify",type:"block",cost:2,desc:"Gain 17 block.",rarity:"Uncommon",effect:()=>block(17)},
 {name:"Adrenaline",type:"skill",cost:0,desc:"Gain 1 Energy.",rarity:"Uncommon",effect:()=>{state.energy=Math.min(state.maxEnergy,state.energy+1)}},
 {name:"Double Draw",type:"skill",cost:1,desc:"Draw 2 cards.",rarity:"Uncommon",effect:()=>{drawCard();drawCard()}},
 {name:"Flame Strike",type:"attack",cost:2,desc:"Deal 20 damage.",rarity:"Rare",effect:()=>damage(20)},
 {name:"Aegis",type:"block",cost:2,desc:"Gain 24 block.",rarity:"Rare",effect:()=>block(24)},
 {name:"Bloodless Fury",type:"attack",cost:1,desc:"Deal 12 damage.",rarity:"Rare",effect:()=>damage(12)},
 {name:"Meditate",type:"skill",cost:0,desc:"Gain 5 block and draw 1.",rarity:"Rare",effect:()=>{block(5);drawCard()}},
 {name:"Meteor",type:"attack",cost:3,desc:"Deal 32 damage.",rarity:"Epic",effect:()=>damage(32)},
 {name:"Bulwark",type:"block",cost:3,desc:"Gain 35 block.",rarity:"Epic",effect:()=>block(35)},
 {name:"Time Break",type:"skill",cost:1,desc:"Gain 2 Energy and draw 2.",rarity:"Legendary",effect:()=>{state.energy=Math.min(state.maxEnergy,state.energy+2);drawCard();drawCard()}}
];


// 40 additional collectible cards
const extraCards=[
 {name:"Rend",type:"attack",cost:1,desc:"Deal 8 damage and gain 2 Block.",rarity:"Common",effect:()=>{damage(8);if(state.combat)block(2)}},
 {name:"Shield Bash",type:"attack",cost:1,desc:"Deal 5 damage plus your Block.",rarity:"Common",effect:()=>damage(5+state.block)},
 {name:"Guarded Step",type:"block",cost:0,desc:"Gain 5 Block.",rarity:"Common",effect:()=>block(5)},
 {name:"Quick Guard",type:"block",cost:1,desc:"Gain 8 Block and draw 1.",rarity:"Common",effect:()=>{block(8);drawCard()}},
 {name:"Jab",type:"attack",cost:0,desc:"Deal 3 damage.",rarity:"Common",effect:()=>damage(3)},
 {name:"Cleave",type:"attack",cost:1,desc:"Deal 10 damage.",rarity:"Common",effect:()=>damage(10)},
 {name:"Battle Rhythm",type:"skill",cost:1,desc:"Gain 2 Block and 1 temporary Energy.",rarity:"Common",effect:()=>{block(2);state.energy++;state.tempEnergy++}},
 {name:"Brace Up",type:"block",cost:1,desc:"Gain 7 Block.",rarity:"Common",effect:()=>block(7)},
 {name:"Counter",type:"skill",cost:1,desc:"Gain 6 Block.",rarity:"Common",effect:()=>block(6)},
 {name:"Rally",type:"skill",cost:1,desc:"Draw 2 cards.",rarity:"Common",effect:()=>{drawCard();drawCard()}},
 {name:"Crushing Blow",type:"attack",cost:2,desc:"Deal 19 damage.",rarity:"Uncommon",effect:()=>damage(19)},
 {name:"Steel Edge",type:"attack",cost:2,desc:"Deal 15 damage and gain 5 Block.",rarity:"Uncommon",effect:()=>{damage(15);if(state.combat)block(5)}},
 {name:"Iron Guard",type:"block",cost:2,desc:"Gain 15 Block.",rarity:"Uncommon",effect:()=>block(15)},
 {name:"Battle Focus",type:"skill",cost:0,desc:"Draw 1 and gain 1 Energy.",rarity:"Uncommon",effect:()=>{drawCard();state.energy=Math.min(state.maxEnergy,state.energy+1)}},
 {name:"War Cry",type:"skill",cost:2,desc:"Draw 3 cards.",rarity:"Uncommon",effect:()=>{drawCard();drawCard();drawCard()}},
 {name:"Reckless Swing",type:"attack",cost:1,desc:"Deal 15 damage.",rarity:"Uncommon",effect:()=>damage(15)},
 {name:"Stone Skin",type:"block",cost:2,desc:"Gain 20 Block.",rarity:"Uncommon",effect:()=>block(20)},
 {name:"Momentum",type:"skill",cost:1,desc:"Gain 2 temporary Energy.",rarity:"Uncommon",effect:()=>{state.energy+=2;state.tempEnergy+=2}},
 {name:"Riposte",type:"attack",cost:2,desc:"Deal 11 damage and gain 6 Block.",rarity:"Uncommon",effect:()=>{damage(11);if(state.combat)block(6)}},
 {name:"Recovery",type:"skill",cost:1,desc:"Gain 10 Block and draw 1.",rarity:"Uncommon",effect:()=>{block(10);drawCard()}},
 {name:"Inferno",type:"attack",cost:2,desc:"Deal 25 damage.",rarity:"Rare",effect:()=>damage(25)},
 {name:"Dragon Fang",type:"attack",cost:1,desc:"Deal 17 damage.",rarity:"Rare",effect:()=>damage(17)},
 {name:"Mystic Barrier",type:"block",cost:2,desc:"Gain 28 Block.",rarity:"Rare",effect:()=>block(28)},
 {name:"Battle Trance",type:"skill",cost:1,desc:"Draw 3 cards.",rarity:"Rare",effect:()=>{drawCard();drawCard();drawCard()}},
 {name:"Power Surge",type:"skill",cost:1,desc:"Gain 2 Energy.",rarity:"Rare",effect:()=>{state.energy=Math.min(state.maxEnergy,state.energy+2)}},
 {name:"Execution",type:"attack",cost:2,desc:"Deal 30 damage.",rarity:"Rare",effect:()=>damage(30)},
 {name:"Fortress",type:"block",cost:3,desc:"Gain 40 Block.",rarity:"Rare",effect:()=>block(40)},
 {name:"Blood Rush",type:"attack",cost:2,desc:"Deal 14 damage and gain 1 Energy.",rarity:"Rare",effect:()=>{damage(14);if(state.combat)state.energy++}},
 {name:"Arcane Shield",type:"block",cost:2,desc:"Gain 18 Block and draw 1.",rarity:"Rare",effect:()=>{block(18);drawCard()}},
 {name:"Meteoric Slash",type:"attack",cost:3,desc:"Deal 38 damage.",rarity:"Epic",effect:()=>damage(38)},
 {name:"Colossus Guard",type:"block",cost:3,desc:"Gain 50 Block.",rarity:"Epic",effect:()=>block(50)},
 {name:"Overwhelming Force",type:"attack",cost:2,desc:"Deal 35 damage.",rarity:"Epic",effect:()=>damage(35)},
 {name:"War Machine",type:"skill",cost:2,desc:"Gain 3 Energy and draw 1.",rarity:"Epic",effect:()=>{state.energy+=4;state.tempEnergy+=4;drawCard()}},
 {name:"Void Lance",type:"attack",cost:2,desc:"Deal 42 damage.",rarity:"Epic",effect:()=>damage(42)},
 {name:"Guardian Angel",type:"skill",cost:2,desc:"Gain 32 Block and draw 2.",rarity:"Epic",effect:()=>{block(32);drawCard();drawCard()}},
 {name:"Cataclysm",type:"attack",cost:3,desc:"Deal 55 damage.",rarity:"Legendary",effect:()=>damage(55)},
 {name:"Immortal Aegis",type:"block",cost:3,desc:"Gain 65 Block.",rarity:"Legendary",effect:()=>block(65)},
 {name:"Chrono Blade",type:"skill",cost:1,desc:"Gain 3 Energy and draw 3 cards.",rarity:"Legendary",effect:()=>{state.energy+=4;state.tempEnergy+=4;drawCard();drawCard();drawCard()}},
 {name:"Starfall",type:"attack",cost:3,desc:"Deal 70 damage.",rarity:"Legendary",effect:()=>damage(70)},
 {name:"World Breaker",type:"attack",cost:4,desc:"Deal 90 damage.",rarity:"Legendary",effect:()=>damage(90)}
];
collectibleCards.push(...extraCards);

const classCards={
 warden:[
  {name:"Shield Wall",type:"block",cost:1,desc:"Gain 10 Block.",rarity:"Common",effect:()=>block(10)},
  {name:"Knight's Strike",type:"attack",cost:1,desc:"Deal 8 damage and gain 3 Block.",rarity:"Common",effect:()=>{damage(8);if(state.combat)block(3)}},
  {name:"Heavy Guard",type:"block",cost:2,desc:"Gain 18 Block.",rarity:"Common",effect:()=>block(18)},
  {name:"Shield Bash",type:"attack",cost:2,desc:"Deal 7 damage plus half your Block (rounded down).",rarity:"Common",effect:()=>damage(7+Math.floor(state.block/2))},
  {name:"Hold the Line",type:"skill",cost:1,desc:"Gain 6 Block and draw 1.",rarity:"Common",effect:()=>{block(6);drawCard()}},
  {name:"Fortified Stance",type:"block",cost:1,desc:"Gain 8 Block and 1 temporary Energy.",rarity:"Common",effect:()=>{block(8);state.energy++;state.tempEnergy++}},
  {name:"Hammer Tap",type:"attack",cost:1,desc:"Deal 10 damage.",rarity:"Common",effect:()=>damage(10)},
  {name:"Guard Breaker",type:"attack",cost:2,desc:"Deal 17 damage.",rarity:"Uncommon",effect:()=>damage(17)},
  {name:"Iron Fortress",type:"block",cost:2,desc:"Gain 23 Block.",rarity:"Uncommon",effect:()=>block(23)},
  {name:"Shield Charge",type:"attack",cost:2,desc:"Deal 14 damage and gain 7 Block.",rarity:"Uncommon",effect:()=>{damage(14);if(state.combat)block(7)}},
  {name:"Royal Guard",type:"block",cost:1,desc:"Gain 12 Block.",rarity:"Uncommon",effect:()=>block(12)},
  {name:"Bulwark Stance",type:"skill",cost:2,desc:"Gain 20 Block and draw 1.",rarity:"Uncommon",effect:()=>{block(20);drawCard()}},
  {name:"Counterstrike",type:"attack",cost:1,desc:"Deal 6 damage and gain 8 Block.",rarity:"Uncommon",effect:()=>{damage(6);if(state.combat)block(8)}},
  {name:"Steel Resolve",type:"skill",cost:0,desc:"Gain 5 Block.",rarity:"Rare",effect:()=>block(5)},
  {name:"Titan Hammer",type:"attack",cost:3,desc:"Deal 30 damage.",rarity:"Rare",effect:()=>damage(30)},
  {name:"Aegis Wall",type:"block",cost:2,desc:"Gain 28 Block.",rarity:"Rare",effect:()=>block(28)},
  {name:"Last Stand",type:"skill",cost:1,desc:"Gain 18 Block and draw 2.",rarity:"Rare",effect:()=>{block(18);drawCard();drawCard()}},
  {name:"Crushing Shield",type:"attack",cost:2,desc:"Deal 20 damage and gain 10 Block.",rarity:"Epic",effect:()=>{damage(20);if(state.combat)block(10)}},
  {name:"Colossus",type:"block",cost:3,desc:"Gain 45 Block.",rarity:"Epic",effect:()=>block(45)},
  {name:"Unbreakable",type:"skill",cost:3,desc:"Gain 28 Block, draw 2, and gain 2 temporary Energy.",rarity:"Legendary",effect:()=>{block(28);drawCard();drawCard();state.energy+=2;state.tempEnergy+=2}}
 ],
 rogue:[
  {name:"Backstab",type:"attack",cost:0,desc:"Deal 5 damage.",rarity:"Common",effect:()=>damage(5)},
  {name:"Dagger Flurry",type:"attack",cost:1,desc:"Deal 4 damage twice.",rarity:"Common",effect:()=>{damage(4);if(state.combat)damage(4)}},
  {name:"Smoke Step",type:"skill",cost:0,desc:"Gain 4 Block and draw 1.",rarity:"Common",effect:()=>{block(4);drawCard()}},
  {name:"Quick Hands",type:"skill",cost:1,desc:"Draw 2 cards.",rarity:"Common",effect:()=>{drawCard();drawCard()}},
  {name:"Poisoned Edge",type:"attack",cost:1,desc:"Deal 11 damage.",rarity:"Common",effect:()=>damage(11)},
  {name:"Shadow Guard",type:"block",cost:1,desc:"Gain 7 Block.",rarity:"Common",effect:()=>block(7)},
  {name:"Lunge",type:"attack",cost:1,desc:"Deal 13 damage.",rarity:"Common",effect:()=>damage(13)},
  {name:"Twin Daggers",type:"attack",cost:1,desc:"Deal 6 damage twice.",rarity:"Uncommon",effect:()=>{damage(6);if(state.combat)damage(6)}},
  {name:"Vanish",type:"skill",cost:1,desc:"Gain 10 Block and draw 1.",rarity:"Uncommon",effect:()=>{block(10);drawCard()}},
  {name:"Assassin's Mark",type:"attack",cost:2,desc:"Deal 22 damage.",rarity:"Uncommon",effect:()=>damage(22)},
  {name:"Evasive Roll",type:"block",cost:0,desc:"Gain 6 Block.",rarity:"Uncommon",effect:()=>block(6)},
  {name:"Ambush",type:"attack",cost:2,desc:"Deal 26 damage.",rarity:"Uncommon",effect:()=>damage(26)},
  {name:"Shadow Dance",type:"skill",cost:1,desc:"Draw 3 cards.",rarity:"Rare",effect:()=>{drawCard();drawCard();drawCard()}},
  {name:"Deadly Precision",type:"attack",cost:1,desc:"Deal 20 damage.",rarity:"Rare",effect:()=>damage(20)},
  {name:"Ghost Step",type:"skill",cost:1,desc:"Gain 14 Block and 1 temporary Energy.",rarity:"Rare",effect:()=>{block(14);state.energy++;state.tempEnergy++}},
  {name:"Fan of Blades",type:"attack",cost:2,desc:"Deal 10 damage three times.",rarity:"Rare",effect:()=>{damage(10);if(state.combat)damage(10);if(state.combat)damage(10)}},
  {name:"Executioner's Knife",type:"attack",cost:2,desc:"Deal 36 damage.",rarity:"Epic",effect:()=>damage(36)},
  {name:"Phantom Barrage",type:"attack",cost:2,desc:"Deal 15 damage three times.",rarity:"Epic",effect:()=>{damage(15);if(state.combat)damage(15);if(state.combat)damage(15)}},
  {name:"Master of Shadows",type:"skill",cost:2,desc:"Draw 3 cards and gain 1 Energy.",rarity:"Epic",effect:()=>{drawCard();drawCard();drawCard();state.energy=Math.min(state.maxEnergy,state.energy+1)}},
  {name:"Death's Dance",type:"attack",cost:3,desc:"Deal 65 damage.",rarity:"Legendary",effect:()=>damage(65)}
 ],
 arcanist:[
  {name:"Arcane Bolt",type:"attack",cost:1,desc:"Deal 8 damage.",rarity:"Common",effect:()=>damage(8)},
  {name:"Mana Shield",type:"block",cost:1,desc:"Gain 8 Block.",rarity:"Common",effect:()=>block(8)},
  {name:"Spark",type:"attack",cost:0,desc:"Deal 3 damage.",rarity:"Common",effect:()=>damage(3)},
  {name:"Meditative Focus",type:"skill",cost:0,desc:"Draw 1 card.",rarity:"Common",effect:()=>drawCard()},
  {name:"Frost Ward",type:"block",cost:1,desc:"Gain 11 Block.",rarity:"Common",effect:()=>block(11)},
  {name:"Mana Burst",type:"attack",cost:2,desc:"Deal 17 damage.",rarity:"Common",effect:()=>damage(17)},
  {name:"Arcane Insight",type:"skill",cost:1,desc:"Draw 2 cards.",rarity:"Common",effect:()=>{drawCard();drawCard()}},
  {name:"Fireball",type:"attack",cost:2,desc:"Deal 22 damage.",rarity:"Uncommon",effect:()=>damage(22)},
  {name:"Ice Barrier",type:"block",cost:2,desc:"Gain 22 Block.",rarity:"Uncommon",effect:()=>block(22)},
  {name:"Mana Surge",type:"skill",cost:1,desc:"Gain 2 temporary Energy.",rarity:"Uncommon",effect:()=>{state.energy+=2;state.tempEnergy+=2}},
  {name:"Lightning Arc",type:"attack",cost:1,desc:"Deal 8 damage twice.",rarity:"Uncommon",effect:()=>{damage(8);if(state.combat)damage(8)}},
  {name:"Rune Ward",type:"block",cost:1,desc:"Gain 14 Block and draw 1.",rarity:"Uncommon",effect:()=>{block(14);drawCard()}},
  {name:"Spell Echo",type:"skill",cost:2,desc:"Draw 3 cards and gain 1 Energy.",rarity:"Uncommon",effect:()=>{drawCard();drawCard();drawCard();state.energy=Math.min(state.maxEnergy,state.energy+1)}},
  {name:"Arcane Nova",type:"attack",cost:2,desc:"Deal 28 damage.",rarity:"Rare",effect:()=>damage(28)},
  {name:"Astral Armor",type:"block",cost:2,desc:"Gain 30 Block.",rarity:"Rare",effect:()=>block(30)},
  {name:"Mana Well",type:"skill",cost:1,desc:"Gain 1 Energy.",rarity:"Rare",effect:()=>{state.energy=Math.min(state.maxEnergy,state.energy+1)}},
  {name:"Chain Lightning",type:"attack",cost:2,desc:"Deal 16 damage twice.",rarity:"Rare",effect:()=>{damage(16);if(state.combat)damage(16)}},
  {name:"Meteor Storm",type:"attack",cost:3,desc:"Deal 48 damage.",rarity:"Epic",effect:()=>damage(48)},
  {name:"Time Weaver",type:"skill",cost:2,desc:"Gain 2 temporary Energy and draw 2.",rarity:"Epic",effect:()=>{state.energy+=2;state.tempEnergy+=2;drawCard();drawCard()}},
  {name:"Arcane Apocalypse",type:"attack",cost:3,desc:"Deal 75 damage.",rarity:"Legendary",effect:()=>damage(75)}
 ]
};


// --- Survivor expansion: American, Canadian, Bigfoot ---
const survivorInfo={
 american:{name:"American",role:"Guns & Grit",desc:"Backwoods survivalist. Uses firearms, traps, supplies, and stubborn determination.",relic:{name:"Supply Cooler",rarity:"Starting",desc:"Heal 5 HP when each battle begins.",effect:"supplycooler"},hp:75,theme:"american"},
 canadian:{name:"Canadian",role:"Hockey & Maple",desc:"Hockey fighter who mixes hard hits, maple recovery, and northern grit.",relic:{name:"Maple Flask",rarity:"Starting",desc:"Heal 3 HP at the start of each player turn.",effect:"mapleflask"},hp:72,theme:"canadian"},
 bigfoot:{name:"Bigfoot",role:"Nature & Melee",desc:"Ancient forest guardian. Crushes enemies with raw strength and nature's power.",relic:{name:"Stone Shard",rarity:"Starting",desc:"Gain 3 temporary Block at the start of each player turn.",effect:"stoneshard"},hp:90,theme:"bigfoot"}
};

classCards.american=[
 {name:"Buckshot",type:"attack",cost:1,desc:"Deal 9 damage.",rarity:"Common",effect:()=>damage(9)},
 {name:"Hunting Knife",type:"attack",cost:1,desc:"Deal 8 damage and gain 3 Block.",rarity:"Common",effect:()=>{damage(8);if(state.combat)block(3)}},
 {name:"Field Dressing",type:"skill",cost:1,desc:"Heal 6 HP.",rarity:"Common",effect:()=>{state.hp=Math.min(state.maxHp,state.hp+6)}},
 {name:"Tripwire",type:"block",cost:1,desc:"Gain 9 Block.",rarity:"Common",effect:()=>block(9)},
 {name:"Deadeye",type:"attack",cost:2,desc:"Deal 16 damage.",rarity:"Common",effect:()=>damage(16)},
 {name:"Supply Drop",type:"skill",cost:1,desc:"Draw 2 cards.",rarity:"Common",effect:()=>{drawCard();drawCard()}},
 {name:"Lever Action",type:"attack",cost:2,desc:"Deal 12 damage twice.",rarity:"Uncommon",effect:()=>{damage(12);if(state.combat)damage(12)}},
 {name:"Bear Trap",type:"attack",cost:1,desc:"Deal 13 damage.",rarity:"Uncommon",effect:()=>damage(13)},
 {name:"Campfire Guard",type:"block",cost:1,desc:"Gain 13 Block.",rarity:"Uncommon",effect:()=>block(13)},
 {name:"Adrenal Shot",type:"skill",cost:1,desc:"Gain 2 temporary Energy.",rarity:"Uncommon",effect:()=>{state.energy+=2;state.tempEnergy+=2}},
 {name:"Buckshot Volley",type:"attack",cost:2,desc:"Deal 24 damage.",rarity:"Uncommon",effect:()=>damage(24)},
 {name:"Trail Rations",type:"skill",cost:0,desc:"Heal 4 HP and draw 1.",rarity:"Uncommon",effect:()=>{state.hp=Math.min(state.maxHp,state.hp+4);drawCard()}},
 {name:"Barbed Wire",type:"block",cost:2,desc:"Gain 22 Block.",rarity:"Rare",effect:()=>block(22)},
 {name:"Magnum",type:"attack",cost:2,desc:"Deal 30 damage.",rarity:"Rare",effect:()=>damage(30)},
 {name:"Ambush",type:"attack",cost:1,desc:"Deal 18 damage and gain 1 temporary Energy.",rarity:"Rare",effect:()=>{damage(18);if(state.combat){state.energy++;state.tempEnergy++}}},
 {name:"Emergency Cache",type:"skill",cost:1,desc:"Draw 3 cards.",rarity:"Rare",effect:()=>{drawCard();drawCard();drawCard()}},
 {name:"Explosive Shell",type:"attack",cost:3,desc:"Deal 42 damage.",rarity:"Epic",effect:()=>damage(42)},
 {name:"Fortified Camp",type:"block",cost:2,desc:"Gain 35 Block and draw 1.",rarity:"Epic",effect:()=>{block(35);drawCard()}},
 {name:"Last Stand",type:"attack",cost:2,desc:"Deal 38 damage. Heal 5 HP.",rarity:"Epic",effect:()=>{damage(38);state.hp=Math.min(state.maxHp,state.hp+5)}},
 {name:"Freedom Shot",type:"attack",cost:3,desc:"Deal 65 damage.",rarity:"Legendary",effect:()=>damage(65)}
];
classCards.canadian=[
 {name:"Slap Shot",type:"attack",cost:1,desc:"Deal 8 damage.",rarity:"Common",effect:()=>damage(8)},
 {name:"Body Check",type:"attack",cost:1,desc:"Deal 7 damage and gain 5 Block.",rarity:"Common",effect:()=>{damage(7);if(state.combat)block(5)}},
 {name:"Maple Sip",type:"skill",cost:0,desc:"Heal 4 HP.",rarity:"Common",effect:()=>{state.hp=Math.min(state.maxHp,state.hp+4)}},
 {name:"Goalie Guard",type:"block",cost:1,desc:"Gain 10 Block.",rarity:"Common",effect:()=>block(10)},
 {name:"Wrist Shot",type:"attack",cost:2,desc:"Deal 16 damage.",rarity:"Common",effect:()=>damage(16)},
 {name:"Line Change",type:"skill",cost:1,desc:"Draw 2 cards.",rarity:"Common",effect:()=>{drawCard();drawCard()}},
 {name:"Crosscheck",type:"attack",cost:2,desc:"Deal 20 damage.",rarity:"Uncommon",effect:()=>damage(20)},
 {name:"Ice Wall",type:"block",cost:1,desc:"Gain 14 Block.",rarity:"Uncommon",effect:()=>block(14)},
 {name:"Maple Rush",type:"skill",cost:1,desc:"Gain 2 temporary Energy.",rarity:"Uncommon",effect:()=>{state.energy+=2;state.tempEnergy+=2}},
 {name:"Slap Pass",type:"skill",cost:1,desc:"Gain 6 Block and draw 1.",rarity:"Uncommon",effect:()=>{block(6);drawCard()}},
 {name:"Hat Trick",type:"attack",cost:2,desc:"Deal 28 damage.",rarity:"Uncommon",effect:()=>damage(28)},
 {name:"Hot Cocoa",type:"skill",cost:1,desc:"Heal 8 HP and draw 1.",rarity:"Uncommon",effect:()=>{state.hp=Math.min(state.maxHp,state.hp+8);drawCard()}},
 {name:"Frozen Edge",type:"attack",cost:1,desc:"Deal 17 damage.",rarity:"Rare",effect:()=>damage(17)},
 {name:"Northern Wall",type:"block",cost:2,desc:"Gain 28 Block.",rarity:"Rare",effect:()=>block(28)},
 {name:"Maple Surge",type:"skill",cost:1,desc:"Heal 5 HP and gain 1 temporary Energy.",rarity:"Rare",effect:()=>{state.hp=Math.min(state.maxHp,state.hp+5);state.energy++;state.tempEnergy++}},
 {name:"Overtime",type:"attack",cost:2,desc:"Deal 34 damage and draw 1.",rarity:"Rare",effect:()=>{damage(34);if(state.combat)drawCard()}},
 {name:"Avalanche",type:"attack",cost:3,desc:"Deal 48 damage.",rarity:"Epic",effect:()=>damage(48)},
 {name:"Maple Fortress",type:"block",cost:2,desc:"Gain 40 Block and heal 4 HP.",rarity:"Epic",effect:()=>{block(40);state.hp=Math.min(state.maxHp,state.hp+4)}},
 {name:"Northern Lights",type:"skill",cost:2,desc:"Draw 3 cards and gain 2 temporary Energy.",rarity:"Epic",effect:()=>{drawCard();drawCard();drawCard();state.energy+=2;state.tempEnergy+=2}},
 {name:"Stanley Cup",type:"attack",cost:3,desc:"Deal 70 damage and heal 8 HP.",rarity:"Legendary",effect:()=>{damage(70);state.hp=Math.min(state.maxHp,state.hp+8)}}
];
classCards.bigfoot=[
 {name:"Claw Swipe",type:"attack",cost:1,desc:"Deal 9 damage.",rarity:"Common",effect:()=>damage(9)},
 {name:"Log Smash",type:"attack",cost:2,desc:"Deal 15 damage.",rarity:"Common",effect:()=>damage(15)},
 {name:"Barkskin",type:"block",cost:1,desc:"Gain 11 Block.",rarity:"Common",effect:()=>block(11)},
 {name:"Forest Breath",type:"skill",cost:1,desc:"Heal 6 HP.",rarity:"Common",effect:()=>{state.hp=Math.min(state.maxHp,state.hp+6)}},
 {name:"Stone Fist",type:"attack",cost:1,desc:"Deal 12 damage.",rarity:"Common",effect:()=>damage(12)},
 {name:"Root Snare",type:"block",cost:1,desc:"Gain 8 Block and draw 1.",rarity:"Common",effect:()=>{block(8);drawCard()}},
 {name:"Thunder Stomp",type:"attack",cost:2,desc:"Deal 22 damage.",rarity:"Uncommon",effect:()=>damage(22)},
 {name:"Moss Armor",type:"block",cost:2,desc:"Gain 20 Block.",rarity:"Uncommon",effect:()=>block(20)},
 {name:"Wild Growth",type:"skill",cost:1,desc:"Gain 2 temporary Energy.",rarity:"Uncommon",effect:()=>{state.energy+=2;state.tempEnergy+=2}},
 {name:"Boulder Toss",type:"attack",cost:2,desc:"Deal 25 damage.",rarity:"Uncommon",effect:()=>damage(25)},
 {name:"Bear Hug",type:"block",cost:1,desc:"Gain 15 Block.",rarity:"Uncommon",effect:()=>block(15)},
 {name:"River Stone",type:"skill",cost:0,desc:"Gain 6 Block.",rarity:"Uncommon",effect:()=>block(6)},
 {name:"Earthquake",type:"attack",cost:2,desc:"Deal 31 damage.",rarity:"Rare",effect:()=>damage(31)},
 {name:"Ancient Bark",type:"block",cost:2,desc:"Gain 30 Block.",rarity:"Rare",effect:()=>block(30)},
 {name:"Primal Roar",type:"skill",cost:1,desc:"Draw 3 cards.",rarity:"Rare",effect:()=>{drawCard();drawCard();drawCard()}},
 {name:"Mountain Slam",type:"attack",cost:2,desc:"Deal 38 damage.",rarity:"Rare",effect:()=>damage(38)},
 {name:"Healing Grove",type:"skill",cost:2,desc:"Heal 12 HP and gain 18 Block.",rarity:"Epic",effect:()=>{state.hp=Math.min(state.maxHp,state.hp+12);block(18)}},
 {name:"Forest Titan",type:"attack",cost:3,desc:"Deal 55 damage.",rarity:"Epic",effect:()=>damage(55)},
 {name:"Avalanche Fist",type:"attack",cost:2,desc:"Deal 44 damage and gain 10 Block.",rarity:"Epic",effect:()=>{damage(44);if(state.combat)block(10)}},
 {name:"Ancient Guardian",type:"skill",cost:3,desc:"Gain 50 Block and heal 10 HP.",rarity:"Legendary",effect:()=>{block(50);state.hp=Math.min(state.maxHp,state.hp+10)}}
];

for(const [key,pool] of Object.entries(classCards)) pool.forEach(c=>c.classKey=key);

let state;

const relicPool=[
 // Common (60% of chest rolls)
 {name:"Iron Ring",rarity:"Common",desc:"+5 Max HP.",effect:"maxhp5"},
 {name:"Lucky Coin",rarity:"Common",desc:"Gain 10 extra gold.",effect:"gold10"},
 {name:"Guardstone",rarity:"Common",desc:"Start each battle with 4 Block.",effect:"startblock4"},
 {name:"Ember Charm",rarity:"Common",desc:"Basic Attack deals +2 damage.",effect:"attack2"},
 {name:"Traveler's Map",rarity:"Common",desc:"Gain +10 XP after each battle.",effect:"xp10"},
 {name:"Healing Herb",rarity:"Common",desc:"Heal 3 HP after each battle.",effect:"heal3"},
 {name:"Copper Buckle",rarity:"Common",desc:"Gain +1 Block whenever you play a Block card.",effect:"blockcard1"},
 {name:"Hunter's Fang",rarity:"Common",desc:"Gain +2 gold after defeating a normal monster.",effect:"normalgold2"},
 {name:"Stone Shard",rarity:"Common",desc:"Gain 3 temporary Block at the start of each turn.",effect:"turnblock3"},
 {name:"Warm Cloak",rarity:"Common",desc:"Resting restores 16 HP instead of 12.",effect:"rest16"},
 {name:"Silver Needle",rarity:"Common",desc:"Start each battle with +1 card.",effect:"startdraw1"},
 {name:"Old Coin",rarity:"Common",desc:"Gain 1 gold whenever you enter a new dungeon.",effect:"dungeongold1"},

 // Uncommon (25%)
 {name:"Wolf Fang",rarity:"Uncommon",desc:"Basic Attack deals +4 damage.",effect:"attack4"},
 {name:"Knight's Crest",rarity:"Uncommon",desc:"Start each battle with 8 Block.",effect:"startblock8"},
 {name:"Mana Crystal",rarity:"Uncommon",desc:"+1 maximum Energy.",effect:"maxenergy1"},
 {name:"Vampire's Mark",rarity:"Uncommon",desc:"Heal 4 HP after defeating an enemy.",effect:"heal4"},
 {name:"Battle Standard",rarity:"Uncommon",desc:"Start each battle with 2 temporary Energy.",effect:"tempenergy2"},
 {name:"Gold Magnet",rarity:"Uncommon",desc:"Gain 25% more gold from enemies.",effect:"gold25"},
 {name:"Scholar's Quill",rarity:"Uncommon",desc:"Gain 25% more XP from enemies.",effect:"xp25"},
 {name:"Reinforced Boots",rarity:"Uncommon",desc:"Resting restores 22 HP.",effect:"rest22"},

 // Rare (10%)
 {name:"Dragon Scale",rarity:"Rare",desc:"+12 Max HP and start battles with 6 Block.",effect:"dragon"},
 {name:"Phoenix Feather",rarity:"Rare",desc:"The first time you would fall below 1 HP in a battle, survive at 1 HP.",effect:"phoenix"},
 {name:"Berserker Rune",rarity:"Rare",desc:"Basic Attack deals +8 damage.",effect:"attack8"},
 {name:"Aegis Core",rarity:"Rare",desc:"Start each battle with 12 Block.",effect:"startblock12"},
 {name:"Arcane Battery",rarity:"Rare",desc:"+1 maximum Energy and draw 1 extra card each battle.",effect:"battery"},

 // Epic (4%)
 {name:"Titan's Heart",rarity:"Epic",desc:"+25 Max HP.",effect:"maxhp25"},
 {name:"Void Crown",rarity:"Epic",desc:"Basic Attack deals +12 damage.",effect:"attack12"},
 {name:"Eternal Flame",rarity:"Epic",desc:"Heal 8 HP after every battle.",effect:"heal8"},

 // Legendary (1%)
 {name:"Crown of Kings",rarity:"Legendary",desc:"+2 maximum Energy and +20 Max HP.",effect:"crown"},
 {name:"Worldstone",rarity:"Legendary",desc:"Start battles with 15 Block, draw 2 extra cards, and gain 2 temporary Energy.",effect:"worldstone"}
];

const relicWeights=[
 ...Array(60).fill("Common"),
 ...Array(25).fill("Uncommon"),
 ...Array(10).fill("Rare"),
 ...Array(4).fill("Epic"),
 "Legendary"
];

function randomRelic(){
 const owned=new Set(state.relics.map(r=>typeof r==="string"?r:r.name));
 const available=relicPool.filter(r=>!owned.has(r.name));
 if(!available.length)return null;
 let rarity;
 const availableRarities=[...new Set(available.map(r=>r.rarity))];
 do{
  rarity=relicWeights[Math.floor(Math.random()*relicWeights.length)];
 }while(!availableRarities.includes(rarity));
 const pool=available.filter(r=>r.rarity===rarity);
 return pool[Math.floor(Math.random()*pool.length)];
}

function hasRelic(effect){
 return state.relics.some(r=>r && typeof r==="object" && r.effect===effect);
}

function relicText(r){
 return `<div class="item" data-tooltip="${r.name}\n${r.rarity}\n\n${r.desc}" style="border-color:${rarityColor(r.rarity)}"><b style="color:${rarityColor(r.rarity)}">${r.name}</b><small>${r.rarity}</small><div>${r.desc}</div></div>`;
}

function grantRelic(relic){
 if(!relic)return;
 state.relics.push(relic);
 if(relic.effect==="maxhp5"){state.maxHp+=5;state.hp+=5}
 if(relic.effect==="maxhp25"){state.maxHp+=25;state.hp+=25}
 if(relic.effect==="dragon"){state.maxHp+=12;state.hp+=12}
 if(relic.effect==="crown"){state.maxHp+=20;state.hp+=20;state.maxEnergy+=2}
 if(relic.effect==="maxenergy1"||relic.effect==="battery")state.maxEnergy+=1;
 log(`Relic acquired: ${relic.name}.`);
}

function showRelicChest(){
 const relic=randomRelic();
 if(!relic){resumeExploration();return}
 modal("RELIC CHEST",`${relic.rarity} RELIC\n\n${relic.name}\n${relic.desc}`,[
  ["Take Relic",()=>{grantRelic(relic);closeModal();resumeExploration();}]
 ]);
}

function resumeExploration(){
 if(!state.explore || state.explore.monsters.length===0){ nextRoom(); return; }
 state.exploring=true;
 state.combat=false;
 state.playerTurn=true;
 state.enemy=null;
 state.energy=state.maxEnergy;
 state.tempEnergy=0;
 state.block=0;
 state.hand=[];
 state.draw=shuffle(state.deck);
 state.discard=[];
 render();
 log(`There ${state.explore.monsters.length===1?"is":"are"} ${state.explore.monsters.length} monster${state.explore.monsters.length===1?"":"s"} remaining in this room.`);
}

function shuffle(a){
 a=[...a];
 for(let i=a.length-1;i>0;i--){
  const j=Math.floor(Math.random()*(i+1));
  [a[i],a[j]]=[a[j],a[i]];
 }
 return a;
}

function newState(classKey="warden"){
 const info=survivorInfo[classKey]||{name:"Warden",hp:70,relic:{name:"Knight's Crest",rarity:"Starting",desc:"Start each battle with 8 Block.",effect:"startblock8"}};
 const legacy={warden:{name:"Warden",hp:70,relic:{name:"Knight's Crest",rarity:"Starting",desc:"Start each battle with 8 Block.",effect:"startblock8"}},rogue:{name:"Rogue",hp:70,relic:{name:"Wolf Fang",rarity:"Starting",desc:"Basic Attack deals +4 damage.",effect:"attack4"}},arcanist:{name:"Arcanist",hp:70,relic:{name:"Mana Crystal",rarity:"Starting",desc:"Gain +1 maximum Energy.",effect:"maxenergy1"}}};
 const data=legacy[classKey]||info;
 return {
  floor:1,gold:20,level:1,hp:data.hp,maxHp:data.hp,xp:0,nextXp:20,
  block:0,energy:3,maxEnergy:3,tempEnergy:0,rooms:[],room:0,
  deck:[...baseCards,...baseCards],draw:[],hand:[],discard:[],
  enemy:null,combat:false,exploring:false,gameover:false,playerTurn:true,classKey,className:data.name,relics:[],explore:null,shop:null
 };
}

function makeRooms(){
 const maps=[
  ["enemy","shop","enemy","treasure","enemy","event","boss"],
  ["enemy","treasure","elite","shop","enemy","","boss"],
  ["enemy","shop","elite","enemy","treasure","enemy","boss"],
  ["enemy","treasure","enemy","shop","elite","","boss"],
  ["elite","shop","enemy","treasure","elite","","boss"]
 ];
 state.rooms=maps[Math.min(state.floor,5)-1].map(type=>({type,done:false}));
}

function selectClass(classKey){
 restart(classKey);
}

function restart(classKey=state?.classKey||"warden"){
 state=newState(classKey);
 const legacyRelics={warden:"Knight's Crest",rogue:"Wolf Fang",arcanist:"Mana Crystal"};
 let relic;
 if(survivorInfo[classKey]) relic=survivorInfo[classKey].relic;
 else relic=relicPool.find(r=>r.name===legacyRelics[classKey]);
 if(relic)grantRelic({...relic});
 if((classCards[classKey]||[]).length){
  const starter=(classCards[classKey]||[]).slice(0,2);
  state.deck.push(cardCopy(starter[0]),cardCopy(starter[1]));
 }
 makeRooms();
 document.getElementById("overlay").style.display="none";
 document.getElementById("classScreen").style.display="none";
 startRoom();
 log(`${state.className} enters the dungeon.`);
}

function startRoom(){
 const room=state.rooms[state.room];
 state.combat=false;
 state.exploring=false;
 state.playerTurn=true;
 state.energy=state.maxEnergy;
 state.tempEnergy=0;
 state.block=0;
 state.hand=[];
 state.draw=shuffle(state.deck);
 state.discard=[];
 state.enemy=null;

 if(["enemy","","boss"].includes(room.type)){
  beginExploration(room.type);
 }else if(room.type==="shop"){
  state.rooms[state.room].done=false;
  openShop();
 }else if(room.type==="treasure"){
  state.rooms[state.room].done=true;
  treasureRoom();
 }else{
  state.rooms[state.room].done=true;
  eventRoom();
 }
 render();
}

function beginExploration(type){
 state.exploring=true;
 const monsterIcons={enemy:[{name:"Cave Bat"},{name:"Slime"},{name:"Skeleton"},{name:"Goblin"},{name:"Spider"},{name:"Orc"},{name:"Wraith"}],elite:[{name:"Iron Brute"},{name:"Arcane Guard"},{name:"Demon Knight"},{name:"Troll"}],boss:[{name:"Stone Warden"},{name:"Abyssal Dragon"},{name:"Dread King"},{name:"Dungeon Lord"}]};
 const iconPool=monsterIcons[type];
 const player={x:5,y:6};
 const walls=[];
 for(let i=0;i<10;i++){
  const x=1+Math.floor(Math.random()*9), y=1+Math.floor(Math.random()*5);
  if(x===player.x&&y===player.y)continue;
  if(!walls.some(w=>w.x===x&&w.y===y))walls.push({x,y});
 }
 const count=type==="boss"?1:3;
 const monsters=[];
 for(let i=0;i<count;i++){
  let mx,my,tries=0;
  do{
   mx=1+Math.floor(Math.random()*9); my=1+Math.floor(Math.random()*5); tries++;
  }while(tries<100 && ((mx===player.x&&my===player.y)||walls.some(w=>w.x===mx&&w.y===my)||monsters.some(m=>m.x===mx&&m.y===my)));
  const chosen=iconPool[Math.floor(Math.random()*iconPool.length)]; monsters.push({x:mx,y:my,icon:chosen,name:chosen.name||chosen});
 }
 let chest=null;
 if(Math.random()<0.20){
  let cx,cy,tries=0;
  do{
   cx=1+Math.floor(Math.random()*9); cy=1+Math.floor(Math.random()*5); tries++;
  }while(tries<100 && ((cx===player.x&&cy===player.y)||walls.some(w=>w.x===cx&&w.y===cy)||monsters.some(m=>m.x===cx&&m.y===cy)));
  chest={x:cx,y:cy};
  log(" You sense that a hidden chest may be nearby.");
 }
 state.explore={type,player,monsters,chest,walls,width:11,height:7};
 log(type==="boss"?"The boss awaits in this room.":`Explore the area. ${count} monsters are roaming this room.`);
}
function spriteClass(name, kind="enemy"){
 const n=(name||"").toLowerCase();
 if(kind==="player") return "sprite-"+(state?.classKey||"warden");
 if(kind==="chest") return "sprite-chest";
 if(kind==="boss") return "sprite-boss";
 if(kind==="elite") return "sprite-elite";
 if(n.includes("bat")) return "sprite-bat";
 if(n.includes("slime")) return "sprite-slime";
 if(n.includes("skeleton")) return "sprite-skeleton";
 if(n.includes("goblin")) return "sprite-goblin";
 if(n.includes("spider")) return "sprite-spider";
 if(n.includes("orc")) return "sprite-orc";
 if(n.includes("wraith")) return "sprite-wraith";
 if(n.includes("iron brute")) return "sprite-ironbrute";
 if(n.includes("arcane guard")) return "sprite-arcane";
 if(n.includes("demon knight")) return "sprite-demon";
 if(n.includes("troll")) return "sprite-troll";
 if(n.includes("stone warden")) return "sprite-stone";
 if(n.includes("abyssal dragon")) return "sprite-dragon";
 if(n.includes("dread king")) return "sprite-king";
 if(n.includes("dungeon lord")) return "sprite-lord";
 return kind==="enemy" ? "sprite-elite" : "sprite-boss";
}
function spriteHTML(name,kind="enemy"){ return `<span class="pixelSprite ${spriteClass(name,kind)}" aria-label="${name||kind}"></span>`; }

function movePlayer(dx,dy){
 if(!state.exploring || state.combat || state.gameover || !state.explore)return;
 const ex=state.explore, nx=ex.player.x+dx, ny=ex.player.y+dy;
 if(nx<0||nx>=ex.width||ny<0||ny>=ex.height)return;
 if(ex.walls.some(w=>w.x===nx&&w.y===ny))return;
 ex.player.x=nx; ex.player.y=ny;

 if(ex.chest && nx===ex.chest.x&&ny===ex.chest.y){
  ex.chest=null;
  state.exploring=false;
  showRelicChest();
  render();
  return;
 }

 const hitIndex=ex.monsters.findIndex(m=>m.x===nx&&m.y===ny);
 if(hitIndex!==-1){
  const type=ex.type;
  ex.monsters.splice(hitIndex,1);
  state.exploring=false;
  spawnEnemy(type);
  state.combat=true;
  drawCards(5+(hasRelic("startdraw1")?1:0)+(hasRelic("battery")?1:0)+(hasRelic("worldstone")?2:0));
  if(hasRelic("startblock4"))state.block+=4;
   if(hasRelic("supplycooler"))state.hp=Math.min(state.maxHp,state.hp+5);
  if(hasRelic("startblock8"))state.block+=8;
  if(hasRelic("startblock12"))state.block+=12;
  if(hasRelic("dragon"))state.block+=6;
  if(hasRelic("turnblock3"))state.block+=3;
  if(hasRelic("tempenergy2")){state.energy+=2;state.tempEnergy+=2}
  if(hasRelic("worldstone")){state.energy+=2;state.tempEnergy+=2}
   if(hasRelic("supplycooler"))state.hp=Math.min(state.maxHp,state.hp+5);
  render();
  log(`You encountered ${state.enemy.name}! ${ex.monsters.length} monster${ex.monsters.length===1?"":"s"} remain. You cannot progress until every enemy in this room is defeated.`);
  return;
 }
 render();
}
document.addEventListener("keydown",e=>{
 const keys={ArrowUp:[0,-1],w:[0,-1],W:[0,-1],ArrowDown:[0,1],s:[0,1],S:[0,1],ArrowLeft:[-1,0],a:[-1,0],A:[-1,0],ArrowRight:[1,0],d:[1,0],D:[1,0]};
 if(keys[e.key]&&state&&state.exploring){e.preventDefault();movePlayer(...keys[e.key]);}
});

function spawnEnemy(type){
 const d=Math.max(0,state.floor-1);
 const scale=1+d*0.32;
 const sets={
  enemy:[
   ["Cave Bat","",24,7,8,10],["Slime","",30,6,9,11],["Skeleton","",34,8,10,12],
   ["Goblin","",29,9,11,13],["Spider","",27,10,10,14],["Orc","",40,11,13,16],["Wraith","",36,12,14,18]
  ],
  elite:[
   ["Iron Brute","",48,11,17,25],["Arcane Guard","",43,10,19,25],["Demon Knight","",55,13,21,29],["Troll","",62,14,20,30]
  ],
  boss:[
   ["Stone Warden","",70,13,22,35],["Abyssal Dragon","",92,16,30,45],["Dread King","",115,19,38,55],["Dungeon Lord","",145,23,50,70]
  ]
 };
 const pool=sets[type];
 const e=type==="boss" ? pool[Math.min(state.floor-1,pool.length-1)] : pool[Math.floor(Math.random()*pool.length)];
 const hp=Math.round(e[2]*scale);
 const atk=Math.max(2,Math.round(e[3]*scale));
 state.enemy={name:e[0],icon:e[1],hp:hp,max:hp,atk:atk,gold:Math.round(e[4]*(1+d*0.25)*(hasRelic('gold25')?1.25:1)),xp:Math.round(e[5]*(1+d*0.3)*(hasRelic('xp25')?1.25:1)),intent:atk};
 log(`A ${state.enemy.name} appears in Dungeon ${state.floor}.`);
}

function drawCard(){
 if(state.draw.length===0){
  state.draw=shuffle(state.discard);
  state.discard=[];
 }
 if(state.draw.length)state.hand.push(state.draw.pop());
}

function drawCards(n){
 for(let i=0;i<n;i++)drawCard();
}

function canPlay(card){
 return state.combat && state.playerTurn && state.energy>=card.cost;
}

function useCard(index){
 const card=state.hand[index];
 if(!canPlay(card))return;

 state.energy-=card.cost;
 state.hand.splice(index,1);
 card.effect();
 state.discard.push(card);

 if(!state.combat)return;

 if(state.energy===0 || !state.hand.some(c=>c.cost<=state.energy)){
  endPlayerTurn();
 }else{
  render();
 }
}

function basicAttack(){
 if(!state.combat || !state.playerTurn || state.gameover)return;

 const amount=6+Math.floor((state.level-1)*1.5)+(hasRelic('attack2')?2:0)+(hasRelic('attack4')?4:0)+(hasRelic('attack8')?8:0)+(hasRelic('attack12')?12:0);
 log(`You attack for ${amount} damage.`);
 damage(amount);

 if(state.combat)endPlayerTurn();
}

function endPlayerTurn(){
 if(!state.combat || state.gameover)return;

 state.playerTurn=false;
 render();

 setTimeout(()=>{
  if(!state.combat || state.gameover)return;

  enemyAction();

  if(state.combat && !state.gameover){
   state.energy=state.maxEnergy;
   state.tempEnergy=0;
   state.block=0;
   state.hand.forEach(c=>state.discard.push(c));
   state.hand=[];
   drawCards(5);
   state.playerTurn=true;
  }

  render();
 },250);
}

function enemyAction(){
 if(!state.enemy || !state.combat)return;

 const e=state.enemy;
 const taken=Math.max(0,e.atk-state.block);
 state.hp-=taken;
 state.block=0;
 log(`${e.name} attacks for ${e.atk}. You take ${taken}.`);

 if(state.hp<=0){
  gameOver();
  return;
 }

 e.atk=Math.max(2,e.atk+(Math.random()<0.3?1:0));
 e.intent=e.atk;
}

function damage(amount){
 if(!state.enemy)return;
 state.enemy.hp-=amount;

 if(state.enemy.hp<=0){
  winCombat();
 }
}

function block(amount){
 state.block+=amount;
 if(hasRelic('blockcard1')&&state.combat)state.block+=1;
 log(`You gain ${amount} block.`);
}


function rarityColor(r){
 return {Common:"#b7c2bd",Uncommon:"#62a9e8",Rare:"#b46cff",Epic:"#ff8a45",Legendary:"#ffd34d",Starter:"#ffffff"}[r]||"#fff";
}

function randomCollectible(){
 const weights=[
  ...Array(8).fill("Common"),
  ...Array(5).fill("Uncommon"),
  ...Array(2).fill("Rare"),
  "Epic",
  "Legendary"
 ];
 const rarity=weights[Math.floor(Math.random()*weights.length)];
 const allCollectibleCards=[...collectibleCards,...temporaryEnergyCards,...formerStarterCards];
 const classPool=(classCards[state.classKey]||[]);
 const pool=allCollectibleCards.filter(c=>c.rarity===rarity).concat(classPool.filter(c=>c.rarity===rarity));
 return pool[Math.floor(Math.random()*pool.length)];
}

function cardCopy(card){
 return {...card};
}

function showCardChoice(title,cards,callback){
 modalCardChoices(title,"Choose one card.",cards,callback);
}
function modalCardChoices(title,text,cards,callback){
 const overlay=document.getElementById("overlay"), box=document.getElementById("modalButtons");
 document.getElementById("modalTitle").textContent=title;
 document.getElementById("modalText").textContent=text;
 box.innerHTML="";
 cards.forEach(card=>{
  const btn=document.createElement("button");
  btn.className="choiceCard";
  btn.dataset.tooltip=`${card.name}\\n${card.rarity} • ${card.cost} ENERGY\\n\\n${card.desc}`;
  btn.innerHTML=`<span class="choiceCost">${card.cost}</span><strong>${card.name}</strong><small>${card.rarity} • ${card.type.toUpperCase()}</small><p>${card.desc}</p>`;
  btn.onclick=()=>{callback(card);closeModal();finishCombatRoom();};
  box.appendChild(btn);
 });
 overlay.style.display="flex";
}

function winCombat(){
 const e=state.enemy;
 state.combat=false;
 state.playerTurn=false;
 if(state.explore && state.explore.type!=="boss" && state.explore.monsters.length>0){
  state.rooms[state.room].done=false;
 }else{
  state.rooms[state.room].done=true;
 }
 state.gold+=e.gold+(hasRelic('normalgold2')&&state.rooms[state.room].type==='enemy'?2:0);
 gainXP(e.xp+(hasRelic('xp10')?10:0));
 if(hasRelic('heal3'))state.hp=Math.min(state.maxHp,state.hp+3);
 if(hasRelic('heal4'))state.hp=Math.min(state.maxHp,state.hp+4);
 if(hasRelic('heal8'))state.hp=Math.min(state.maxHp,state.hp+8);
 log(`${e.name} defeated! +${e.gold} gold, +${e.xp} XP.`);

 const healAmount=Math.max(1,Math.ceil(state.maxHp*0.20));

 modal("Victory!","Choose your reward.",[
  ["Add Card",()=>{
   const a=randomCollectible(), b=randomCollectible();
   showCardChoice("Choose a New Card",[a,b],card=>{
    state.deck.push(cardCopy(card));
   });
  }],
  ["Upgrade a Card",()=>{
   if(!state.deck.length){
    closeModal();finishCombatRoom();return;
   }
   showCardChoice(
    "Choose a Card to Upgrade",
    state.deck,
    card=>{
     if(card.name==="Strike"){card.effect=()=>damage(10);card.desc="Deal 10 damage."}
     else if(card.name==="Guard"){card.effect=()=>block(9);card.desc="Gain 9 block."}
     else if(card.name==="Heavy Blow"){card.effect=()=>damage(18);card.desc="Deal 18 damage."}
     else if(card.name==="Iron Wall"){card.effect=()=>block(18);card.desc="Gain 18 block."}
     else if(card.name==="Quick Cut"){card.effect=()=>damage(7);card.desc="Deal 7 damage."}
     else if(card.name==="Focus"){card.desc="Draw 2 cards.";card.effect=()=>{drawCard();drawCard()}}
     else{
      card.cost=Math.max(0,card.cost-1);
      card.desc=card.desc+" (Upgraded)";
     }
    }
   );
  }],
  [`Heal 20%: +${healAmount} HP`,()=>{
   const before=state.hp;
   state.hp=Math.min(state.maxHp,state.hp+healAmount);
   const actual=state.hp-before;
   log(`Recovered ${actual} HP (20% of max HP = ${healAmount}).`);
   closeModal();
   finishCombatRoom();
  }]
 ]);
}
function finishCombatRoom(){
 if(state.explore && state.explore.monsters.length>0){
  closeModal();
  resumeExploration();
 }else{
  closeModal();
  nextRoom();
 }
}

function gainXP(amount){
 state.xp+=amount;
 while(state.xp>=state.nextXp){
  state.xp-=state.nextXp;
  state.level++;
  state.nextXp=Math.ceil(state.nextXp*1.35);
  state.maxHp+=7;
  state.hp=state.maxHp;
  log(`Level ${state.level}! Max HP increased.`);
 }
}

function treasureRoom(){
 const relic=randomRelic();
 if(relic){
  modal("TREASURE CHEST",`${relic.rarity} RELIC\\n\\n${relic.name}\\n${relic.desc}\\n\\nChoose whether to take the relic or take gold instead.`,[
   ["TAKE RELIC",()=>{grantRelic(relic);closeModal();nextRoom();}],
   ["TAKE 15 GOLD",()=>{state.gold+=15;closeModal();nextRoom();}]
  ]);
 }else{
  modal("TREASURE CHEST","The chest contains 15 gold.",[ ["TAKE 15 GOLD",()=>{state.gold+=15;closeModal();nextRoom();}] ]);
 }
}

function shopPrice(base){ return base + Math.max(0,state.floor-1)*Math.floor(base*0.18); }
function randomShopCard(){
 const cards=[...collectibleCards,...temporaryEnergyCards,...formerStarterCards,...(classCards[state.classKey]||[])];
 const rarityWeights={Common:55,Uncommon:28,Rare:12,Epic:4,Legendary:1};
 let roll=Math.random()*100, rarity="Common";
 for(const [r,w] of Object.entries(rarityWeights)){ if((roll-=w)<=0){rarity=r;break;} }
 const pool=cards.filter(c=>c.rarity===rarity);
 return pool[Math.floor(Math.random()*pool.length)];
}
function buildShop(){
 const cards=[randomShopCard(),randomShopCard(),randomShopCard()];
 const relics=[];
 const first=randomRelic();
 if(first)relics.push(first);
 const ownedPlus=new Set([...state.relics.map(r=>typeof r==="string"?r:r.name),...(first?[first.name]:[])]);
 const secondPool=relicPool.filter(r=>!ownedPlus.has(r.name));
 if(secondPool.length){
  let second;
  let guard=0;
  do{second=randomRelic();guard++;}while(second&&ownedPlus.has(second.name)&&guard<20);
  if(second&&!ownedPlus.has(second.name))relics.push(second);
 }
 state.shop={cards,relics,cardBought:[false,false,false],relicBought:[false,false],healBought:false,removeBought:false};
}
function shopCardText(card,i){
 const price=shopPrice(card.rarity==="Common"?45:card.rarity==="Uncommon"?70:card.rarity==="Rare"?105:card.rarity==="Epic"?150:220);
 return `${card.name} — ${card.rarity} — ${card.cost} — ${price}g`;
}
function openShop(){
 if(!state.shop)buildShop();
 const buttons=[];
 state.shop.cards.forEach((card,i)=>{
  if(!state.shop.cardBought[i]) buttons.push([`${shopCardText(card,i)}`,()=>{
   const price=shopPrice(card.rarity==="Common"?45:card.rarity==="Uncommon"?70:card.rarity==="Rare"?105:card.rarity==="Epic"?150:220);
   if(state.gold<price){log("Not enough gold.");return;}
   state.gold-=price; state.deck.push(cardCopy(card)); state.shop.cardBought[i]=true; log(`Bought ${card.name} for ${price} gold.`); render(); openShop();
  }]);
 });
 state.shop.relics.forEach((relic,i)=>{
  if(!state.shop.relicBought[i]) buttons.push([`${relic.name} — ${relic.rarity} — ${shopPrice(relic.rarity==="Common"?75:relic.rarity==="Uncommon"?120:relic.rarity==="Rare"?175:relic.rarity==="Epic"?250:350)}g`,()=>{
   const price=shopPrice(relic.rarity==="Common"?75:relic.rarity==="Uncommon"?120:relic.rarity==="Rare"?175:relic.rarity==="Epic"?250:350);
   if(state.gold<price){log("Not enough gold.");return;}
   state.gold-=price; grantRelic(relic); state.shop.relicBought[i]=true; render(); openShop();
  }]);
 });
 if(!state.shop.healBought) buttons.push([`Heal 25 HP — ${shopPrice(40)}g`,()=>{ const price=shopPrice(40); if(state.gold<price){log("Not enough gold.");return;} state.gold-=price; state.hp=Math.min(state.maxHp,state.hp+25); state.shop.healBought=true; log("The shopkeeper patches you up."); render(); openShop(); }]);
 if(!state.shop.removeBought && state.deck.length>1) buttons.push([`Remove a card — ${shopPrice(90)}g`,()=>{
  const price=shopPrice(90);
  if(state.gold<price){log("Not enough gold.");return;}
  modal("Remove a Card","Choose one card to permanently remove from your deck.",state.deck.map(card=>[`${card.name} — ${card.rarity} — ${card.cost}`,()=>{
   const idx=state.deck.indexOf(card);
   if(idx>=0){state.deck.splice(idx,1);state.gold-=price;state.shop.removeBought=true;log(`Removed ${card.name} from your deck for ${price} gold.`);}
   closeModal();openShop();
  }]));
 }]);
 if(!state.shop.rerolled) buttons.push([`Reroll stock — ${shopPrice(35)}g`,()=>{ const price=shopPrice(35); if(state.gold<price){log("Not enough gold.");return;} state.gold-=price; buildShop(); state.shop.rerolled=true; log("The shopkeeper refreshes the stock."); render(); openShop(); }]);
 buttons.push(["Leave Shop",()=>{ state.rooms[state.room].done=true; state.shop=null; closeModal(); nextRoom(); }]);
 modal("Dungeon Shop",`Spend your gold wisely. Dungeon ${state.floor} prices increase as the run goes deeper.`,buttons);
 render();
}

function eventRoom(){
 modal("Strange Shrine","The shrine offers you a blessing.",[
  ["Restore 20 HP",()=>{
   state.hp=Math.min(state.maxHp,state.hp+20);
   closeModal();nextRoom();
  }],
  ["Gain 2 Max HP",()=>{
   state.maxHp+=2;state.hp+=2;
   closeModal();nextRoom();
  }]
 ]);
}

function nextRoom(){
 if(state.room>=state.rooms.length-1){
  if(state.floor>=5){ victory(); return; }
  state.floor++;
  state.maxHp+=10;
  state.hp=state.maxHp;
  makeRooms();
  state.room=0;
  if(hasRelic("dungeongold1"))state.gold+=1;
  log(`Dungeon ${state.floor} begins. The enemies grow stronger.`);
 }else{
  state.room++;
 }
 startRoom();
}

function victory(){
 state.gameover=true;
 state.combat=false;
 state.playerTurn=false;
 state.enemy=null;
 modal("VICTORY!","You conquered all 5 dungeons and defeated the final boss!",[["New Run",restart]]);
}

function rest(){
 if(state.combat||state.exploring)return;
 const restAmount=hasRelic('rest22')?22:(hasRelic('rest16')?16:12);
 state.hp=Math.min(state.maxHp,state.hp+restAmount);
 log(`You recover ${restAmount} HP.`);
 render();
}

function gameOver(){
 state.gameover=true;
 state.combat=false;
 state.playerTurn=false;
 modal("Run Over",`You reached floor ${state.floor}, level ${state.level}.`,[
  ["Start Again",restart]
 ]);
}

function modal(title,text,buttons){
 document.getElementById("modalTitle").textContent=title;
 document.getElementById("modalText").textContent=text;
 const box=document.getElementById("modalButtons"); box.innerHTML="";
 buttons.forEach(([label,fn])=>{
  const btn=document.createElement("button"); btn.className="modalButton"; btn.textContent=label;
  btn.dataset.tooltip=label.replace(/\s+—\s+/g,"\\n");
  const l=label.toLowerCase();
  btn.style.borderColor=l.includes("legendary")?"#ffd34d":l.includes("epic")?"#ff8a45":l.includes("rare")?"#b46cff":l.includes("uncommon")?"#62a9e8":"#506b5a";
  btn.onclick=fn; box.appendChild(btn);
 });
 document.getElementById("overlay").style.display="flex";
}
function closeModal(){
 document.getElementById("overlay").style.display="none";
}

function log(text){
 const el=document.getElementById("log");
 el.innerHTML+=`<div>› ${text}</div>`;
 el.scrollTop=el.scrollHeight;
}

function render(){
 document.getElementById("floor").textContent=`${state.floor} / 5`;
 document.getElementById("gold").textContent=state.gold;
 document.getElementById("level").textContent=state.level;
 document.getElementById("hp").textContent=`${state.hp} / ${state.maxHp}`;
 document.getElementById("hpfill").style.width=Math.max(0,state.hp/state.maxHp*100)+"%";
 document.getElementById("xp").textContent=`${state.xp} / ${state.nextXp}`;
 document.getElementById("xpfill").style.width=(state.xp/state.nextXp*100)+"%";

  const mini=document.getElementById("miniSurvivor");
  if(mini){
   const info=survivorInfo[state.classKey]||{name:state.className,theme:state.classKey};
   mini.className="miniSurvivor "+state.classKey;
   mini.innerHTML=`<img src="assets/${state.classKey}.svg" alt="${info.name}"><div class="miniName">${info.name.toUpperCase()}</div>`;
   mini.dataset.tooltip=`${info.name}\n${info.desc||""}`;
  }


 const energy=document.getElementById("energy");
 const maxEnergy=document.getElementById("maxEnergy");
 if(energy)energy.textContent=state.energy;
 if(maxEnergy)maxEnergy.textContent=state.maxEnergy;
 const temp=document.getElementById("tempEnergy");
 if(temp)temp.textContent=state.tempEnergy>0 ? ` (+${state.tempEnergy} temporary)` : "";

 const map=document.getElementById("map");
 map.innerHTML="";
 const dungeonNames=["The Shadowed Depths","","The Cursed Catacombs","The Infernal Fortress","The Final Abyss"];
 const dungeonLabel=document.getElementById("dungeonLabel");
 if(dungeonLabel)dungeonLabel.textContent=dungeonNames[state.floor-1];
 state.rooms.forEach((r,i)=>{
  const div=document.createElement("div");
  const future=i>state.room && !r.done;
  div.className="room "+(i===state.room?"current ":"")+(r.done?"done ":"")+(future?"locked future":"");
  const icon=r.type==="enemy"?spriteHTML("Monster","enemy"):r.type==="elite"?spriteHTML("Elite","elite"):r.type==="treasure"?spriteHTML("Treasure","chest"):r.type==="shop"?"SHOP":r.type==="event"?"EVENT":spriteHTML("Boss","boss");
  div.innerHTML=`<div><small style="display:block;text-align:center;color:#8f948f">${i+1}</small>${icon}</div>`;
  div.title=`Room ${i+1}: ${r.type==="shop"?"Shop":r.type==="event"?"Shrine":r.type[0].toUpperCase()+r.type.slice(1)}`;
  map.appendChild(div);
  if(i<state.rooms.length-1){ const arrow=document.createElement("div"); arrow.className="pathArrow"; arrow.textContent="›"; map.appendChild(arrow); }
 });

 const exploreArea=document.getElementById("exploreArea");
 const exploreGrid=document.getElementById("exploreGrid");
 if(exploreArea&&exploreGrid){
  exploreArea.style.display=state.exploring?"block":"none";
  exploreGrid.innerHTML="";
  if(state.exploring&&state.explore){
   const ex=state.explore;
   for(let y=0;y<ex.height;y++){
    for(let x=0;x<ex.width;x++){
     const cell=document.createElement("div"); cell.className="exploreCell";
     if(ex.walls.some(w=>w.x===x&&w.y===y)) cell.classList.add("wall");
     if(ex.player.x===x&&ex.player.y===y){cell.classList.add("player");cell.innerHTML=spriteHTML(state.className,"player");}
     else {
      const monster=ex.monsters.find(m=>m.x===x&&m.y===y);
      if(monster){cell.classList.add("monster");cell.innerHTML=spriteHTML(monster.name,"enemy");}
      else if(ex.chest&&ex.chest.x===x&&ex.chest.y===y){cell.classList.add("chest");cell.innerHTML=spriteHTML("Relic Chest","chest");}
     }
     exploreGrid.appendChild(cell);
    }
   }
  }
 }

 const enemyBox=document.getElementById("enemyBox");
 if(state.enemy && state.combat){
  enemyBox.innerHTML=`
   <div class="enemyIcon">${spriteHTML(state.enemy.name,state.rooms[state.room].type==="boss"?"boss":state.rooms[state.room].type==="elite"?"elite":"enemy")}</div>
   <div>
    <div class="enemyName">${state.enemy.name}</div>
    <div>HP ${state.enemy.hp}/${state.enemy.max}</div>
    <div class="hpbar"><div class="hpfill" style="width:${Math.max(0,state.enemy.hp/state.enemy.max*100)}%"></div></div>
    <b>Intent: ${state.enemy.intent} damage</b>
   </div>`;
  document.getElementById("roomTitle").textContent="Battle";
 }else{
  enemyBox.innerHTML=state.exploring?`<div class="enemyIcon">${spriteHTML(state.explore.type==="boss"?"Boss":"Monster",state.explore.type==="boss"?"boss":"enemy")}</div><div><div class="enemyName">Exploration</div><div>${state.explore.type==="boss"?"Boss Room — defeat the boss to continue.":`${state.explore.monsters.length} enemies remain — defeat them all before you can leave.`}</div></div>`:state.rooms[state.room]?.type==="shop"?`<div class="enemyIcon"></div><div><div class="enemyName">Dungeon Shop</div><div>Spend gold on cards, relics, healing, or deck services.</div></div>`:`<div class="enemyIcon">${spriteHTML("Dungeon","boss")}</div><div><div class="enemyName">Dungeon Path</div><div>Every room on this level is visible on the map. Clear the current room to advance.</div></div>`;
  document.getElementById("roomTitle").textContent=state.exploring?"Explore":state.rooms[state.room]?.type==="shop"?"Shop":"Dungeon";
 }

 const cards=document.getElementById("cards");
 cards.innerHTML="";
 state.hand.forEach((card,i)=>{
  const btn=document.createElement("button");
  btn.className="card "+card.type;
  btn.disabled=!canPlay(card);
  btn.onclick=()=>useCard(i);
  btn.dataset.tooltip=`${card.name}\n${card.rarity} • ${card.cost} ENERGY\n\n${card.desc}`;
   btn.innerHTML=`<span class="cost">${card.cost}</span><div class="name">${card.name}</div><div class="rarity">${card.rarity}</div><div class="desc">${card.desc}</div>`;
  cards.appendChild(btn);
 });

 const attack=document.getElementById("attackBtn");
 if(attack)attack.disabled=!state.combat||!state.playerTurn;

 document.getElementById("deckInfo").innerHTML=
  `Draw pile: ${state.draw.length}<br>Hand: ${state.hand.length}<br>Discard: ${state.discard.length}<br><br>Block: <b>${state.block}</b>`;

 document.getElementById("relics").innerHTML=
  state.relics.map(r=>typeof r==="string"?`<div class="item" data-tooltip="${r}\nStarting relic"> <b>${r}</b><small>STARTING RELIC</small></div>`:relicText(r)).join("");

 document.getElementById("reward").innerHTML=
  state.combat?"Play cards using your energy.":"Choose your reward.";

 const msg=document.getElementById("message");
 if(msg){
  msg.textContent=state.exploring
   ?`Walk around the area and defeat every enemy before progressing. ${state.explore.type==="boss"?"This is the boss room.":`${state.explore.monsters.length} enemies remain.`}`
   :state.combat
   ?`Energy: ${state.energy}/${state.maxEnergy}${state.tempEnergy ? ` (+${state.tempEnergy} temporary)` : ""} — play cards until you cannot play another.`
   :state.rooms[state.room]?.type==="shop"
   ?"Shop open — spend gold on cards, relics, healing, or deck services, then leave when ready."
   :"Explore the dungeon.";
 }
}

document.getElementById("classScreen").style.display="flex";


// Universal hover information for cards, relics, survivors, room tiles, and modal choices.
(function(){
 const tip=document.createElement("div"); tip.id="tooltip"; document.body.appendChild(tip);
 function show(el,e){const text=el?.dataset?.tooltip;if(!text)return;tip.textContent=text;tip.style.display="block";tip.style.left=Math.min(window.innerWidth-340,e.clientX+14)+"px";tip.style.top=Math.min(window.innerHeight-160,e.clientY+14)+"px";}
 document.addEventListener("pointerover",e=>{const el=e.target.closest("[data-tooltip]");if(el)show(el,e)});
 document.addEventListener("pointermove",e=>{if(tip.style.display!=="none"){tip.style.left=Math.min(window.innerWidth-340,e.clientX+14)+"px";tip.style.top=Math.min(window.innerHeight-160,e.clientY+14)+"px"}});
 document.addEventListener("pointerout",e=>{if(e.target.closest("[data-tooltip]"))tip.style.display="none"});
})();
