let product = [];
let cart = [];
let idproduct = 1;
function main() {
  let choice;

  do {
    choice = showMenu(choice);
    switch (choice) {
      case 1:
        showCategory(product);
        break;
      case 2:
        let newBook = addBook(product);
        product.push(newBook);
        break;
      case 3:
        
        break;
      case 4:
        seachCart(product, cart);
        break;
      case 5:
        sortProduct(product);
        break;
        case 6:
            checkOut(cart);
        break;
      case 7:
        break;
      case 8:
        break;
      default:
        alert("lỗi cú pháp mời bạn nhập lại");
        break;
    }
  } while (choice !== 8);
}
function showMenu(choice) {
  choice = +prompt(`
    1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
    2.Thêm sách mới vào kho
    3.Tìm kiếm sách theo tên hoặc id.
    4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
    5.Sắp xếp sách theo giá.
    6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng.
    7.Hiển thị tổng số lượng sách trong kho.
    8.Thoát chương trình.
          Mời bạn chọn chức năng:
    `);
  return choice;
}
function showCategory(product) {
  let seachCategory;
  do {
    seachCategory = prompt("mời bạn nhập tên danh mục");
    if (
      seachCategory !== "" &&
      seachCategory !== null &&
      seachCategory.length > 0
    ) {
      break;
    }
    alert("mời bạn nhập lại đúng dnah mục sản phẩm");
  } while (1);
  let productCategory = product.filter(
    (product) => product.category.toLowerCase() === seachCategory.toLowerCase()
  );
  if (productCategory.length === 0) {
    alert("danh mục sản phẩm không tồn tại");
    return;
  }
  for (let key of productCategory) {
    alert(
      `id: ${key.id}\nname: ${key.name}\nprice: ${key.price}\nquantity: ${key.quantity}\n\n`
    );
  }
}
function addBook(product) {
  let id, name, price, quantity, category;
  do {
    name = prompt("Mời bạn nhập tên sản phẩm");
    if (name !== null || name.trim() !== "") {
      break;
    }
    alert("mời bạn nhập lại tên của sách hợp lệ");
  } while (1);

  do {
    price = +prompt("mời bạn nhập giá của sản phẩm");
    if (Number.isFinite(price) && price !== null && price > 0) {
      break;
    }
    alert("mời bạn nhập lại giá hợp lệ");
  } while (1);
  do {
    quantity = +prompt("mời bạn nhập giá của sản phẩm");
    if (Number.isFinite(quantity) && quantity !== null && quantity > 0) {
      break;
    }
    alert("mời bạn nhập lại giá hợp lệ");
  } while (1);
  do {
    category = prompt("Mời bạn nhập thể loại sách");
    if (category !== null || category.trim() !== "") {
      break;
    }
    alert("mời bạn nhập lại thể loại của sách hợp lệ");
  } while (1);
  id = idProduct;
  idproduct++;
  return {
    id: id,
    name: name,
    price: price,
    quantity: quantity,
    category: category,
  };
}
function seachCart(product, cart) {
  let idProduct, cartQuantity;
  do {
    idProduct = +prompt("mời bạn nhập id sản phẩm");
    if (idProduct > 0 || Number.isInteger(idProduct)) break;
    alert("mời bạn nhập id là số nguyên");
  } while (1);
  let result = product.find((element) => element.id === idProduct);
  if (!result) {
    alert("id không tồn tại");
  }
  if (result.quantity === 0) {
    alert("sản phẩm đã hết hàng");
  }
  do {
    cartQuantity = +prompt("Mời bạn nhập số lượng sản phẩm muốn mua");
    if (cartQuantity <= 0 || !Number.isInteger(cartQuantity)) {
      alert("mời bạn nhập số lượng sản phẩm là số nguyên");
    }
    if (result.quantity < cartQuantity) {
      alert(
        "số lượng sản phẩm không đủ để bán !kho hiện tải chỉ còn" +
          result.quantity
      );
    }
    break;
  } while (1);
  result.quantity -= cartQuantity;

  cart.push({
    name: result.name,
    price: result.price,
    quantity: cartQuantity,
    category: "món ăn dân tộc Kinh",
  });
}
function sortInput(choice) {
  choice = +prompt(`
    1. Tăng dần.
    2. Giảm dần.
      Mời bạn chọn chức năng:
    `);
  return choice;
}
function sortProduct(product) {
  let choice;
  choice = sortInput(choice);
  if (choice === 1) {
    product.sort((a, b) => a.price - b.price);
  } else if (choice === 2) {
    product.sort((a, b) => b.price - a.price);
  } else {
    alert("lỗi cú pháp mời bạn nhập lại");
  }
}
function showCart(cart) {
  alert("giỏ hàng hiện tại:");let list = [];
  let choise;
  let cart = [];
  do {
    console.log(`
        1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
        2. Thêm sách mới vào kho
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
        5. Sắp xếp sách theo giá:
            a. Tăng dần.
            b. Giảm dần.
        6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát chương trình.    
    `);

    choise = +prompt("nhap thao tac");

    switch (choise) {
      case 1:
        showList();
        break;
      case 2:
        addBook();
        break;
      case 3:
        findBook();
        break;
      case 4:
        buyBook();
        break;
      case 5:
        sortBooks();
        break;
      case 6:
        totalCart();
        break;
      case 7:
        totalStock();
        break;
      case 8:
        console.log("thoat");
        break;
      default:
        console.log("sai thao tac");
    }
  } while (choise !== 8);

  function showList() {
    let category = prompt("the loai:");
    let f = list.filter((book) => book.category == category);
    console.log(f);
  }

  function addBook() {
    let name, price, quantity, category;

    do {
      name = prompt("Nhập tên sách:");
    } while (!name.trim());

    do {
      price = +prompt("Nhập giá tiền:");
    } while (price <= 0);

    do {
      quantity = +prompt("Nhập số lượng:");
    } while (quantity < 0);

    do {
      category = prompt("Nhập thể loại:");
    } while (!category.trim());

    let id = list.length > 0 ? list[list.length - 1].id + 1 : 1;

    list.push({ id, name, price, quantity, category });
    console.log("Đã thêm sách:", list);
  }

  function findBook() {
    let keyword = prompt("Nhập tên hoặc ID sách:");
    let result = list.filter(
      (book) => book.name.includes(keyword) || book.id == keyword
    );

    if (result.length > 0) {
      console.log("Kết quả tìm kiếm:", result);
    } else {
      console.log("Không tìm thấy sách.");
    }
  }

  function buyBook() {
    let bookId = +prompt("Nhập ID sách cần mua:");
    let quantity = +prompt("Nhập số lượng:");

    let book = list.find((b) => b.id === bookId);

    if (!book) {
      console.log("Không tìm thấy sách.");
      return;
    }

    if (book.quantity < quantity) {
      console.log("Số lượng không đủ.");
      return;
    }
    book.quantity -= quantity;

    let cartItem = cart.find((b) => b.id === bookId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({ id: book.id, name: book.name, price: book.price, quantity });
    }

    console.log("Đã mua sách thành công. Giỏ hàng hiện tại:", cart);
  }

  function sortBooks() {
    let option = prompt("Nhập 'a' để sắp xếp tăng dần, 'b' để giảm dần:");

    if (option === "a") {
      list.sort((a, b) => a.price - b.price);
    } else if (option === "b") {
      list.sort((a, b) => b.price - a.price);
    } else {
      console.log("Lựa chọn không hợp lệ.");
    }

    console.log("Danh sách sách sau khi sắp xếp:", list);
  }

  function totalCart() {
    let totalQuantity = cart.reduce((sum, book) => sum + book.quantity, 0);
    let totalPrice = cart.reduce(
      (sum, book) => sum + book.price * book.quantity,
      0
    );

    console.log(`Tổng số lượng sách đã mua: ${totalQuantity}`);
    console.log(`Tổng tiền: ${totalPrice} VND`);
  }

  function totalStock() {
    let total = list.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${total}`);
  }
  cart.forEach((p) =>
    alert(`${p.name} \n Số lượng :${p.quantity} \n Giá: ${p.price} VND`)
  );
}
function checkOut(cart) {
  let total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  showCart(cart);
  alert(`Tổng tiền: ${total} VND`);
}

main();
