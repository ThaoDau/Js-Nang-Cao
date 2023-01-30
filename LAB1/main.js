const team1 = {
    players1: 'Van Lam',
    players2 :[
        'Quang Hai',
        'Ban A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G'
    ],
};
const team2 = {
    players1: 'Van Lam1',
    players2 :[
        'Quang Hai1',
        'Ban A1',
        'B1',
        'C1',
        'D1',
        'E1',
        'F1',
        'G1'
    ],
};
const allPlayers = {...team1, ...team2};
console.log(allPlayers);