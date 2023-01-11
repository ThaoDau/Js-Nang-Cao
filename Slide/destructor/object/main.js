 'user strict';

 const restaurant = {
    nameRestaurant: '5 sao',
    location: 'Hanoi',
    categories: [
      'Bánh xèo',
      'Bánh bèo',
      'Bánh đậu xanh',
      'Bánh mì'
    ],
    startedMenu: [
      'Nước uống ',
      'Bánh',
      'Combo nước banh'
    ],
    mainMenu : [
      'Mon Tráng miệng',
      'Nước lọc'
    ],
    openingHours: {
      t5: {
        open: 12,
        close: 22,
      },
      t6: {
        open: 8,
        close: 20,
      },
      t7: {
        open: 0,
        close: 14,
      },
    },
    order : function(startIndex, mainIndex){
      return [this.startedMenu[startIndex], this.mainMenu[mainIndex]];
    },
    // ordership: function(obj){
    //   console.log(obj);
    // }
    // hoặc 
    ordership: function({time,adress,menu, startIndex, mainIndex}){
        console.log(`Được ship đơn hàng vào thời gian ${time} lấy hàng tại ${adress} và menu gồm có ${menu} thời gian mở cửa là ${this.startedMenu[startIndex]} va dong cua ${this.mainMenu[mainIndex]}`);
    },  
 };
//  KHI PHÁ VỠ CẤU TRÚC CỦA MỘT OBJECT THÌ BIẾN MỚI PHẢI CÓ DẤU NGOẶC NHỌN 

//  const {nameRestaurant, openingHours, categories} = restaurant;
//  console.log(nameRestaurant, openingHours, categories);

 //THAY ĐỔI TÊN THUỘC TÍNH MỚI BẰNG CÁCH: 
//  const {nameRestaurant: name, openingHours: hours, categories: cates} = restaurant;
//  console.log(name, hours, cates);
 //THÊM MỘT THUỘC TÍNH MỚI VÀO TRONG MẢNG MÀ KHÔNG CẦN ĐỤNG TỚI OBJECT CŨ / default values
//  const {menu = ['khoaitaychien','hacao'],categories:cates = []} = restaurant;
//  console.log(menu,cates);

 //khi muốn thay đổi giá trị biến thì không nên có dấu bằng ở {}(dấu block) nên sẽ phải thêm vào dấu ngoặc khi làm khối mã này ()
//  let a = 55;
//  let b = 20;
//  const object = {a :111, b: 2222, c:5} ;
//  ({a,b} = object);
//  console.log(a,b);
 //kq: 111 2222

// ----------- ĐỐI TƯỢNG LỒNG NHAU-------------
const {openingHours} = restaurant; //log : mảng 
const {t7} = openingHours;//log : mảng t7
// const {open , close } = t7;//log : 0 14
// thay đổi tên giá trị trong obj 
const {open:a , close:b } = t7;
console.log(a,b);

// ----------- ĐỐI TƯỢNG có hàm-------------
restaurant.ordership({
  time: '20:33:35',
  adress: 'Ha Tinh',
  menu: '1 cai',
  startedIndex: 5,
  mainIndex: 6,
});







 
