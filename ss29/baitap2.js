let ID = 1;
function main() {
  let choice;
  let product = [];
  do {
    choice = showMenu();
    switch (choice) {
      case 1:
        const newUser = addUser(product);
        product.push(newUser);
        break;
      case 2:
        showProduct(product);
        break;
      case 3:
        searchId(product);
        break;
      case 4:
        updateProduct(product);
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        alert("Tạm biệt!");
        break;

      default:
        alert("lỗi cú pháp mời bạn nhập lại");
        break;
    }
  } while (choice !== 7);
}
function showMenu() {
  let choice = +prompt(`
            ===================MENU=====================
        1.Thêm sản phẩm vào danh sách sản phẩm.
        2.Hiển thị tất cả sản phẩm.
        3.Hiển thị chi tiết sản phẩm theo id.
        4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5.Xóa sản phẩm theo id.
        6.Lọc sản phẩm theo khoảng giá.
        7.Thoát.
            ============================================
            Mời bạn nhập lựa chọn:
        `);
  return choice;
}
function addUser(product) {
  let name, price, category, quantity;
  do {
    name = prompt("mời bạn nhập tên sản phẩm");
    if (name.trim() !== "") {
      break;
    }
    alert("mời bạn nhập lại tên sản phẩm");
  } while (1);
  do {
    price = +prompt("mời bạn nhập giá sản phẩm");
    if (price > 0) {
      break;
    }
    alert("mời bạn nhập giá sản phẩm");
  } while (1);

  do {
    category = prompt("mời bạn nhập danh mục sản phẩm");
    if (category.trim() !== "") {
      break;
    }
    alert("mời bạn nhập lại danh mục sản phẩm");
  } while (1);
  do {
    quantity = +prompt("mời bạn nhập số lượng sản phẩm");
    if (Number.isInteger(quantity) && quantity > 0) {
      break;
    }
    alert("mời bạn nhập số lượng sản phẩm");
  } while (1);
  let id = ID;
  ID++;
  return { id, name, price, category, quantity };
}
function showProduct(product) {
  let output = "";
  for (const id in product) {
    output += `ID: ${product[id].id}\nTên: ${product[id].name}\n giá: ${product[id].price}\n danh mục: ${product[id].category}\n số lượng: ${product[id].quantity}\n\n`;
  }
  alert(output || "Danh sách trống!");
}
function searchId(product) {
  do {
    let search = prompt("Nhập ID cần tìm");
    let productChill = Object.values(product).find(
      (element) => element.id == search
    );
    if (productChill) {
      alert(
        `ID: ${productChill.id}\nTên: ${productChill.name}\n giá: ${productChill.price}\n danh mục: ${productChill.category}\n số lượng: ${productChill.quantity}\n\n`
      );
      break;
    }
    alert("Không tìm thấy id");
  } while (1);
}
function updateProduct(product) {
  const id = +prompt("Nhập ID sản phẩm cần cập nhật:");
  const productToUpdate = product.find((p) => p.id === id);

  if (!productToUpdate) {
    alert("Không tìm thấy sản phẩm với ID này!");
    return;
  }

  let newName = prompt("Nhập tên sản phẩm mới:").trim();
  if (newName) productToUpdate.name = newName;

  let newPrice = +prompt("Nhập giá sản phẩm mới:");
  if (!isNaN(newPrice) && newPrice > 0) productToUpdate.price = newPrice;

  let newCategory = prompt("Nhập danh mục sản phẩm mới:").trim();
  if (newCategory) productToUpdate.category = newCategory;

  let newQuantity = +prompt("Nhập số lượng sản phẩm mới:");
  if (Number.isInteger(newQuantity) && newQuantity > 0)
    productToUpdate.quantity = newQuantity;

  alert("Cập nhật sản phẩm thành công!");
}

main();
