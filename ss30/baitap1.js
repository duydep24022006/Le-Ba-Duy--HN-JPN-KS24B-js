let product = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mô  ng",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
let cart = [];
function main() {
  let choice;

  do {
    choice = showMenu(choice);
    switch (choice) {
      case 1:
        showCategory(product);
        break;
      case 2:
        seachCart(product, cart);
        break;
      case 3:
        sortProduct(product);
        break;
      case 4:
        checkOut(cart);
        break;
      case 5:
        break;
      default:
        alert("lỗi cú pháp mời bạn nhập lại");
        break;
    }
  } while (choice !== 5);
}
function showMenu(choice) {
  choice = +prompt(`
    1.Hiển thị các sản phẩm theo tên danh mục.
    2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
    3.Sắp xếp các sản phẩm trong cửa hàng theo giá.
    4.Tính số tiền thanh toán trong giỏ hàng.
    5.Thoát.
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
  alert("giỏ hàng hiện tại:");
  cart.forEach((p) => alert(`${p.name} \n Số lượng :${p.quantity} \n Giá: ${p.price} VND`));
}
function checkOut(cart) {
  let total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  showCart(cart);
  alert(`Tổng tiền: ${total} VND`);
}

main();
