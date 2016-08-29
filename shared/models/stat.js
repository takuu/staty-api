export default {
  player: { type: 'id', ref: 'Player' },
  league: { type: 'id', ref: 'League' },
  season: {type: 'id', ref: 'Season'},
  division: { type: 'id', ref: 'Division' },
  team: { type: 'id', ref: 'Team' },
  vsTeam: { type: 'id', ref: 'Team' },
  game: { type: 'id', ref: 'Game' },
  points: {type: 'number', default: -1},
  assists: {type: 'number', default: -1},
  offensiveRebounds: {type: 'number', default: -1},
  defensiveRebounds: {type: 'number', default: -1},
  totalRebounds: {type: 'number', default: -1},
  steals: {type: 'number', default: -1},
  blocks: {type: 'number', default: -1},
  fieldGoalsAttempted: {type: 'number', default: -1},
  fieldGoalsMade: {type: 'number', default: -1},
  threePointsAttempted: {type: 'number', default: -1},
  threePointsMade: {type: 'number', default: -1},
  freeThrowsAttempted: {type: 'number', default: -1},
  freeThrowsMade: {type: 'number', default: -1},
  fouls: {type: 'number', default: -1},
  turnovers: {type: 'number', default: -1},
  created: { type: 'date', default: Date.now },
  updated: { type: 'date', default: Date.now }
};