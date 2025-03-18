let ID = 1;
function main() {
  let choice;
  let users = {};
  do {
    choice = showMenu();
    switch (choice) {
      case 1:
        const newUser = addUser(users);
        users[newUser.id] = newUser;
        newUser;
        break;
      case 2:
        showUsers(users);
        break;
      case 3:
        phoneSearch(users);
        break;
      case 4:
        updateUser(users);
        break;
      case 5:
        users = deleteUsers(users);
        break;
      case 6:
        alert("Tạm biệt!");
        break;

      default:
        alert("lỗi cú pháp mời bạn nhập lại");
        break;
    }
  } while (choice !== 6);
}
function showMenu() {
  let choice = +prompt(`
            ===================MENU=====================
        1.Thêm đối tượng Contact vào danh sách liên hệ.
        2.Hiển thị danh sách danh bạ.
        3.Tìm kiếm thông tin Contact theo số điện thoại.
        4.Cập nhật thông tin Contact(name, email, phone) theo id.
        5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6.Thoát.
            ============================================
            Mời bạn nhập lựa chọn:
        `);
  return choice;
}
function addUser(User) {
  let name;
  let email;
  let phone;
  do {
    name = prompt("mời bạn nhập tên của người liên hệ");
    if (name.trim() !== "") {
      break;
    }
    alert("mời bạn nhập lại tên");
  } while (1);
  do {
    email = prompt("mời bạn nhập email của người liên hệ");
    if (email.trim() !== "") {
      break;
    }
    alert("mời bạn nhập lại tên");
  } while (1);

  do {
    phone = prompt("mời bạn nhập số điện thoại của người liên hệ");
    if (phone.length === 10 && Number.isInteger(+phone)) {
      break;
    }
    alert("số điện thoại phải có 10 số");
  } while (1);
  let id = ID;
  ID++;
  return { id, name, email, phone };
}
function showUsers(users) {
  let output = "";
  for (const id in users) {
    const user = users[id];
    output += `ID: ${user.id}\nTên: ${user.name}\nEmail: ${user.email}\nSĐT: ${user.phone}\n\n`;
  }
  alert(output || "Danh sách trống!");
}
function phoneSearch(user) {
  do {
    let search = prompt("Nhập số điện thoại cần tìm");
    let User = Object.values(user).find((element) => element.phone == search);
    if (User) {
      alert(
        `ID: ${User.id}\nName: ${User.name}\nEmail: ${User.email}\nPhone: ${User.phone}`
      );
      break;
    }
    alert("Không tìm thấy số điện thoại");
  } while (1);
}
function updateUser(users) {
  let id = +prompt("Nhập ID cần cập nhật");
  let User = Object.values(users).findIndex((item) => item.id === id);
  if (User === -1) {
    alert("Không tìm thấy ID");
    return;
  } else {
    do {
      users[id].name = prompt("mời bạn nhập tên của người liên hệ");
      if (users[id].name.trim() !== "") {
        break;
      }
      alert("mời bạn nhập lại tên");
    } while (1);
    do {
      users[id].email = prompt("mời bạn nhập email của người liên hệ");
      if (users[id].email.trim() !== "") {
        break;
      }
      alert("mời bạn nhập lại email");
    } while (1);

    do {
      users[id].phone = prompt("mời bạn nhập số điện thoại của người liên hệ");
      if (users[id].phone.length === 10 && Number.isInteger(+users[id].phone)) {
        break;
      }
      alert("số điện thoại phải có 10 số");
    } while (1);
  }
}
function deleteUsers(users) {
  let id = +prompt("Nhập ID cần xóa");
  if (!users[id]) {
    alert("Không tìm thấy ID");
    return users;
  }

  const newUsers = {};
  for (let key in users) {
    if (+key !== id) {
      newUsers[key] = users[key];
    }
  }

  alert("Xóa thành công!");
  return newUsers;
}


main();
