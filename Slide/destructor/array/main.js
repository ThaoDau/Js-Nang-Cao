 'user strict';

 const restaurant = {
    name: '5 sao',
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
    order : function(startIndex, mainIndex){
      return [this.startedMenu[startIndex], this.mainMenu[mainIndex]];
    }
 };

 //muốn phá hủy cấu trúc chúng ta cần cho một tên biến mới
//  const [first, second] = restaurant.categories;
//  console.log(first, second);
 //muốn chọn phần tử thứ 1 và phần tử thứ 3, chúng ta bỏ qua phần tử thứ hai bằng phương pháp lỗ hổng vd:
 const [first, ,second] =  restaurant.categories;
 console.log(first, second);

 //mục đíh phá hủy cấu trúc: thay đổi dễ dàng phần tử bên trong hoặc có thể hoán vị hai phần tử 
 // khi thêm một method , vd method order chúng ta cần lấy ra những phần tử mới gộp lại một mảng mới như sau: 

 // khi đó nó sẽ thực hiện lấy ra phần tử thứ 2 của startmenu và phần tử thứ 0 của mainmenu
//  console.log(restaurant.order(2,0));
//cho một biến mới để cơ cấu lại , cho biến đó có hai phần tử bằng với tham số đã cho:
const [start, end] = restaurant.order(2,0);
console.log(start, end);
