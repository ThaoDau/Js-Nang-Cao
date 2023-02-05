const game ={
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
        ],
        [
            'Anh1',
            'Anh2',
            'Anh3',
            'Anh4',
            'Anh5',
            'Anh6',
            'Anh7',
            'Anh8',
            'Anh9',
            'Anh10',
            'Anh11',
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th,2037',
    odds:{
        team1: 1.33,
        x:3.25,
        team2: 6.5,
    },
  
};
//Đầu tiên sẽ phá hủy cấu trúc mảng của  đội bóng
const [players1, players2] = game.players;
console.log(players1,players2);
//Tạo biến thử môn và các người chơi còn lại
const [gk,...fieldPlayers]= players1;
console.log(gk,fieldPlayers);
//3. Lấy tất cả các cầu thủ 2 đội
const allPlayers = [...players1,...players2];
console.log(allPlayers);
//4. array chứa cầu thủ và thêm cầu thủ mới
const players1Final = [...players1,'Thiago','Coutinho','Perisctic'];

//5.Biến hiện mảng chứa các thông tin hòa thắng thua
const {odds:{team1,x:draw,team2}}= game;
console.log(team1,draw,team2);
// 6.nhan 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
const printGoals = function (...players)  {
    console.log(players);
    console.log(`${players.length} đã ghi bàn`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);
// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà không sử dụng if/else hoặc toán tử 3 ngôi
team1 < team2 && console.log('Team 1 thắng');
team1 > team2 && console.log('Team 2 thắng');


console.log('--------------------BAI2---------------');
// 1.
for ( const [i,player]  of game.scored.entries()) {
    console.log(`Goals ${i +1}: ${player}`);
}
// 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of Object.values(game.odds)){
    average += odd;
}
average /= odds.length;
console.log(average);
// 3.
for (const [team,odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ?'hòa': `thắng ${game[team]}`
    // console.log(team,odd);
    console.log(`Tỉ lệ --> ${teamStr} ${odd}`);
}
//Luu ý : Làm thế nào trong mảng sử dụng được entries để lấy các mục nhâp của mảng nhưng trong đối tượng phải dùng đối tượng và chuyển nó vào hàm mà đối tượng chúng ta quan tâm