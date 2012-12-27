exports.BattleFormats = {

	// formats

	randombattle: {
		effectType: 'Format',
		name: "Random Battle",
		team: 'random',
		canUseRandomTeam: true,
		searchDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause']
	},
	unratedrandombattle: {
		effectType: 'Format',
		name: "Unrated Random Battle",
		team: 'random',
		canUseRandomTeam: true,
		searchShow: true,
		ruleset: ['Random Battle']
	},
	challengecup: {
		effectType: 'Format',
		name: "Challenge Cup",
		team: 'randomCC',
		canUseRandomTeam: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		ruleset: ['Pokemon']
	},
	ubers: {
		effectType: 'Format',
		name: "Ubers",
		rated: true,
		// challengeShow: true,
		// searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	legendary: {
		effectType: 'Format',
		name: "Legends ON",
		challengeDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew']
	},
	ou: {
		effectType: 'Format',
		name: "OU",
		challengeDefault: true,
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Legendary']
	},
	uu: {
		effectType: 'Format',
		name: "UU",
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['OU'],
		banlist: ['OU', 'BL']
	},
	ru: {
		effectType: 'Format',
		name: "RU",
		rated: true,
		// challengeShow: true,
		// searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['UU'],
		banlist: ['UU', 'BL2']
	},
	nu: {
		effectType: 'Format',
		name: "NU",
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['RU'],
		banlist: ['RU','BL3']
	},
	pu: {
		effectType: 'Format',
		name: "PU",
		challengeShow: true,
		ruleset: ['NU'],
		banlist: ["Charizard", "Wartortle", "Kadabra", "Golem", "Haunter", "Exeggutor", "Weezing", "Kangaskhan", "Pinsir", "Lapras", "Ampharos", "Misdreavus", "Piloswine", "Miltank", "Ludicolo", "Swellow", "Gardevoir", "Ninjask", "Camerupt", "Torkoal", "Cacturne", "Altaria", "Armaldo", "Absol", "Gorebyss", "Regirock", "Regice", "Torterra", "Bastiodon", "Floatzel", "Drifblim", "Skuntank", "Lickilicky", "Probopass", "Rotom-Fan", "Serperior", "Emboar", "Samurott", "Musharna", "Gurdurr", "Sawk", "Carracosta", "Garbodor", "Cinccino", "Sawsbuck", "Amoonguss", "Alomomola", "Golurk", "Braviary", "Rapidash", "Articuno"]
	},
	lc: {
		effectType: 'Format',
		name: "LC",
		rated: true,
		challengeShow: true,
		searchShow: true,
		isTeambuilderFormat: true,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
	},
	lcubers: {
		effectType: 'Format',
		name: "LC Ubers",
		challengeShow: true,
		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview', 'Little Cup', 'Evasion Clause'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Soul Dew']
	},
	lcuu: {
		effectType: 'Format',
		name: "LC UU",
		challengeShow: true,
		ruleset: ['LC'],
		banlist: ['Abra', 'Aipom', 'Archen', 'Aron', 'Axew', 'Bronzor', 'Chinchou', 'Clamperl', 'Cottonee', 'Cranidos', 'Croagunk', 'Cubone', 'Diglett', 'Dratini', 'Drifloon', 'Drilbur', 'Duskull', 'Dwebble', 'Elekid', 'Ferroseed', 'Foongus', 'Frillish', 'Gastly', 'Hippopotas', 'Houndour', 'Larvesta', 'Lileep', 'Machop', 'Magnemite', 'Mienfoo', 'Misdreavus', 'Munchlax', 'Murkrow', 'Natu', 'Onix', 'Pawniard', 'Ponyta', 'Porygon', 'Scraggy', 'Shellder', 'Slowpoke', 'Snover', 'Staryu', 'Taillow', 'Timburr', 'Zorua']
	},
	customgame: {
		effectType: 'Format',
		name: "Custom Game",
		challengeShow: true,
		canUseRandomTeam: true,
		debug: true,
		// no restrictions, for serious
		ruleset: ['Team Preview']
	},
	customgamenoteampreview: {
		effectType: 'Format',
		name: "Custom Game (no Team Preview)",
		challengeShow: true,
		canUseRandomTeam: true,
		debug: true,
		// no restrictions, for serious
		ruleset: []
	},
	doublesrandombattledev: {
		effectType: 'Format',
		section: 'doubles',
		gameType: 'doubles',
		name: "Doubles Random Battle (dev)",
		team: 'random',
		canUseRandomTeam: true,
		rated: true,
		challengeShow: true,
		debug: true,
		ruleset: ['PotD', 'Pokemon']
	},
	doubleschallengecup: {
		effectType: 'Format',
		section: 'doubles',
		gameType: 'doubles',
		name: "Doubles Challenge Cup",
		team: 'randomCC',
		canUseRandomTeam: true,
		rated: true,
		challengeShow: true,
		debug: true,
		ruleset: ['Pokemon']
	},
	doublesvgc2013dev: {
		effectType: 'Format',
		section: 'doubles',
		gameType: 'doubles',
		name: "Doubles VGC 2013 (dev)",
		rated: true,
		challengeShow: true,
		searchShow: true,
		debug: true,
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		validateSet: function(set) {
			if (!set.level || set.level >= 50) {
				set.forcedLevel = 50;
			}
		},
		// no restrictions, for serious
		ruleset: ['Pokemon', 'VGC Team Preview', 'Species Clause'],
		banlist: ['Unreleased', 'Illegal',
			'Mewtwo', 
			'Mew', 
			'Lugia', 
			'Ho-Oh', 
			'Celebi', 
			'Kyogre', 
			'Groudon', 
			'Rayquaza', 
			'Jirachi', 
			'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
			'Chatot', 
			'Dialga', 
			'Palkia', 
			'Giratina', 
			'Phione', 
			'Manaphy', 
			'Darkrai', 
			'Shaymin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water', 
			'Victini', 
			'Reshiram', 
			'Zekrom', 
			'Kyurem', 'Kyurem-Black', 'Kyurem-White', 
			'Keldeo', 'Keldeo-Resolute',
			'Meloetta', 
			'Genesect',
			'Sky Drop', 'Dark Void', 'Soul Dew'
		]
	},

	// rules

	standard: {
		effectType: 'Banlist',
		ruleset: ['Sleep Clause', 'Species Clause', 'OHKO Clause', 'Item Clause'],
		banlist: ['Unreleased', 'Illegal', 'Spikes + Sleep Powder + Roserade'],
		validateSet: function(set) {
			// limit one of each move in Standard
			var moves = [];
			if (set.moves) {
				var hasMove = {};
				for (var i=0; i<set.moves.length; i++) {
					var move = this.getMove(set.moves[i]);
					var moveid = move.id;
					if (hasMove[moveid]) continue;
					hasMove[moveid] = true;
					moves.push(set.moves[i]);
				}
			}
			set.moves = moves;
		}
	},
	standardubers: {
		effectType: 'Banlist',
		ruleset: ['Sleep Clause', 'Species Clause', 'OHKO Clause', 'Item Clause'],
		banlist: ['Unreleased', 'Illegal'],
		validateSet: function(set) {
			// limit one of each move in Standard
			var moves = [];
			if (set.moves) {
				var hasMove = {};
				for (var i=0; i<set.moves.length; i++) {
					var move = this.getMove(set.moves[i]);
					var moveid = move.id;
					if (hasMove[moveid]) continue;
					hasMove[moveid] = true;
					moves.push(set.moves[i]);
				}
			}
			set.moves = moves;
		}
	},
	standarddw: {
		effectType: 'Banlist',
		ruleset: ['Sleep Clause', 'Species Clause', 'OHKO Clause', 'Item Clause'],
		banlist: ['Illegal', 'Moody'],
		validateSet: function(set) {
			// limit one of each move in Standard
			var moves = [];
			if (set.moves) {
				var hasMove = {};
				for (var i=0; i<set.moves.length; i++) {
					var move = this.getMove(set.moves[i]);
					var moveid = move.id;
					if (hasMove[moveid]) continue;
					hasMove[moveid] = true;
					moves.push(set.moves[i]);
				}
			}
			set.moves = moves;
		}
	},
	pokemon: {
		effectType: 'Banlist',
		validateSet: function(set, format) {
			var item = this.getItem(set.item);
			var template = this.getTemplate(set.species);
			var problems = [];

			if (set.species === set.name) delete set.name;
			if (template.num == 493) { // Arceus
				if (set.ability === 'Multitype' && item.onPlate) {
					set.species = 'Arceus-'+item.onPlate;
				} else {
					set.species = 'Arceus';
				}
			}
			if (template.num == 487) { // Giratina
				if (item.id === 'griseousorb') {
					set.species = 'Giratina-Origin';
					if (format.banlistTable && format.banlistTable['illegal']) set.ability = 'Levitate';
				} else {
					set.species = 'Giratina';
					if (format.banlistTable && format.banlistTable['illegal']) set.ability = 'Pressure';
				}
			}
			if (template.num == 555) { // Darmanitan
				set.species = 'Darmanitan';
			}
			if (template.num == 648) { // Meloetta
				set.species = 'Meloetta';
			}
			if (template.num == 351) { // Castform
				set.species = 'Castform';
			}
			if (template.num == 421) { // Cherrim
				set.species = 'Cherrim';
			}
			if (template.num == 647) { // Keldeo
				if (set.species === 'Keldeo-Resolution' && set.moves.indexOf('Secret Sword') < 0) {
					set.species = 'Keldeo';
				}
			}
			if (template.isNonstandard) {
				problems.push(set.species+' is not a real Pokemon.');
			}
			if (set.moves) for (var i=0; i<set.moves.length; i++) {
				var move = this.getMove(set.moves[i]);
				if (move.isNonstandard) {
					problems.push(move.name+' is not a real move.');
				}
			}
			if (set.moves && set.moves.length > 4) {
				problems.push((set.name||set.species) + ' has more than four moves.');
			}
			return problems;
		}
	},
	legal: {
		effectType: 'Banlist',
		banlist: ['Crobat+BraveBird+Hypnosis']
	},
	potd: {
		effectType: 'Rule',
		onPotD: '',
		onStart: function() {
			if (this.effect.onPotD) {
				this.add('rule', 'Pokemon of the Day: '+this.effect.onPotD);
			}
		}
	},
	vgcteampreview: {
		onStartPriority: -10,
		onStart: function() {
			this.add('clearpoke');
			for (var i=0; i<this.sides[0].pokemon.length; i++) {
				this.add('poke', this.sides[0].pokemon[i].side.id, this.sides[0].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
			}
			for (var i=0; i<this.sides[1].pokemon.length; i++) {
				this.add('poke', this.sides[1].pokemon[i].side.id, this.sides[1].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
			}
		},
		onTeamPreview: function() {
			this.makeRequest('teampreview', 4);
		}
	},
	teampreview: {
		onStartPriority: -10,
		onStart: function() {
			this.add('clearpoke');
			for (var i=0; i<this.sides[0].pokemon.length; i++) {
				this.add('poke', this.sides[0].pokemon[i].side.id, this.sides[0].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
			}
			for (var i=0; i<this.sides[1].pokemon.length; i++) {
				this.add('poke', this.sides[1].pokemon[i].side.id, this.sides[1].pokemon[i].details.replace(/Arceus(\-[a-zA-Z\?]+)?/, 'Arceus-*'));
			}
		},
		onTeamPreview: function() {
			this.makeRequest('teampreview');
		}
	},
	littlecup: {
		effectType: 'Rule',
		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			
			if (template.prevo) {
				return [set.species+" isn't the first in its evolution family."];
			}
			if (!template.nfe) {
				return [set.species+" doesn't have an evolution family."];
			}
			if (!set.level || set.level > 5) {
				set.level = 5;
			}
		}
	},
	speciesclause: {
		effectType: 'Rule',
		onStart: function() {
			this.add('rule', 'Species Clause');
		},
		validateTeam: function(team, format) {
			var speciesTable = {};
			for (var i=0; i<team.length; i++) {
				var template = this.getTemplate(team[i].species);
				if (speciesTable[template.num]) {
					return ["You are limited to one of each pokemon by Species Clause.","(You have at least two "+template.name+")"];
				}
				speciesTable[template.num] = true;
			}
		}
	},
	itemclause: {
		effectType: 'Rule',
		onStart: function() {
			this.add('rule', 'Item Clause');
		},
		validateTeam: function(team, format) {
			var itemTable = {};
			for (var i=0; i<team.length; i++) {
				var item = toId(team[i].item);
				if (!item) continue;
				if (itemTable[item]) {
					return ["You are limited to one of each item by Item Clause.","(You have at least two "+this.getItem(item).name+")"];
				}
				itemTable[item] = true;
			}
		}
	},
	ohkoclause: {
		effectType: 'Rule',
		onStart: function() {
			this.add('rule', 'OHKO Clause');
		},
		validateSet: function(set) {
			var problems = [];
			if (set.moves) {
				for (var i in set.moves) {
					var move = this.getMove(set.moves[i]);
					if (move.ohko) problems.push(move.name+' is banned by OHKO Clause.');
				}
			}
			return problems;
		}
	},
	evasionclause: {
		effectType: 'Banlist',
		name: 'Evasion Clause',
		banlist: ['Minimize', 'Double Team'],
		onStart: function() {
			this.add('rule', 'Evasion Clause');
		}
	},
	sleepclause: {
		effectType: 'Rule',
		onStart: function() {
			this.add('rule', 'Sleep Clause');
		},
		onSetStatus: function(status, target, source) {
			if (source && source.side === target.side) {
				return;
			}
			if (status.id === 'slp') {
				for (var i=0; i<target.side.pokemon.length; i++) {
					var pokemon = target.side.pokemon[i];
					if (pokemon.status === 'slp') {
						if (!pokemon.statusData.source ||
							pokemon.statusData.source.side !== pokemon.side) {
							this.add('-message', 'Sleep Clause activated.');
							return false;
						}
					}
				}
			}
		}
	},
	freezeclause: {
		effectType: 'Rule',
		onStart: function() {
			this.add('rule', 'Freeze Clause');
		},
		onSetStatus: function(status, target, source) {
			if (source && source.side === target.side) {
				return;
			}
			if (status.id === 'frz') {
				for (var i=0; i<target.side.pokemon.length; i++) {
					var pokemon = target.side.pokemon[i];
					if (pokemon.status === 'frz') {
						this.add('-message', 'Freeze Clause activated.');
						return false;
					}
				}
			}
		}
	}
};
