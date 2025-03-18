const readlineSync = require("readline-sync");

let courses = []; 
let users = []; 
function mainMenu() {
  while (true) {
    console.log("\n========== MENU CHÍNH ==========");
    console.log("1. Quản lý khóa học");
    console.log("2. Quản lý người dùng");
    console.log("3. Thoát");
    console.log("==========================");

    let choice = readlineSync.question("Chọn chức năng: ").trim();

    if (choice === "1") {
      courseMenu();
    } else if (choice === "2") {
      userMenu();
    } else if (choice === "3") {
      console.log(" Thoát chương trình.");
      return;
    } else {
      console.log(" Lựa chọn không hợp lệ.");
    }
  }
}


function courseMenu() {
  while (true) {
    console.log("\n========== QUẢN LÝ KHÓA HỌC ==========");
    console.log("1. Thêm khóa học");
    console.log("2. Tìm kiếm khóa học");
    console.log("3. Xóa khóa học");
    console.log("4. Quay lại menu chính");
    console.log("==========================");

    let choice = readlineSync.question("Chọn chức năng: ").trim();

    if (choice === "1") {
      addCourse();
    } else if (choice === "2") {
      findCourse();
    } else if (choice === "3") {
      removeCourse();
    } else if (choice === "4") {
      return;
    } else {
      console.log("Lựa chọn không hợp lệ.");
    }
  }
}

function addCourse() {
  let name = readlineSync.question("Nhập tên khóa học: ").trim();
  let instructor = readlineSync.question("Nhập tên giảng viên: ").trim();

  if (!name || !instructor) {
    console.log(" Lỗi: Không được để trống thông tin.");
    return;
  }

  let id = "C" + (courses.length + 1);
  courses.push({ id, name, instructor, students: [] });
  console.log(` Đã thêm khóa học: ID = ${id}, Tên = "${name}"`);
}

function findCourse() {
  let keyword = readlineSync
    .question("Nhập tên khóa học cần tìm: ")
    .trim()
    .toLowerCase();
  let results = courses.filter((course) =>
    course.name.toLowerCase().includes(keyword)
  );

  if (results.length === 0) {
    console.log(" Không tìm thấy khóa học.");
  } else {
    console.log(" Kết quả tìm kiếm:");
    results.forEach((course) =>
      console.log(
        `- ID: ${course.id}, Tên: ${course.name}, GV: ${course.instructor}`
      )
    );
  }
}

function removeCourse() {
  let courseId = readlineSync.question("Nhập ID khóa học cần xóa: ").trim();
  let index = courses.findIndex((course) => course.id === courseId);

  if (index === -1) {
    console.log("⚠ Không tìm thấy khóa học.");
    return;
  }


  users.forEach((user) => {
    user.registeredCourses = user.registeredCourses.filter(
      (id) => id !== courseId
    );
  });

  courses.splice(index, 1);
  console.log(" Đã xóa khóa học.");
}

function userMenu() {
  while (true) {
    console.log("\n========== QUẢN LÝ NGƯỜI DÙNG ==========");
    console.log("1. Thêm người dùng");
    console.log("2. Đăng ký khóa học");
    console.log("3. Hủy đăng ký khóa học");
    console.log("4. Hiển thị khóa học của người dùng");
    console.log("5. Quay lại menu chính");
    console.log("==========================");

    let choice = readlineSync.question("Chọn chức năng: ").trim();

    if (choice === "1") {
      addUser();
    } else if (choice === "2") {
      registerUserToCourse();
    } else if (choice === "3") {
      unregisterUserFromCourse();
    } else if (choice === "4") {
      listUserCourses();
    } else if (choice === "5") {
      return;
    } else {
      console.log(" Lựa chọn không hợp lệ.");
    }
  }
}

function addUser() {
  let name = readlineSync.question("Nhập tên người dùng: ").trim();
  if (!name) {
    console.log("⚠ Lỗi: Tên không được để trống.");
    return;
  }

  let id = "U" + (users.length + 1);
  users.push({ id, name, registeredCourses: [] });
  console.log(`Đã thêm người dùng: ID = ${id}, Tên = "${name}"`);
}


function registerUserToCourse() {
  let userId = readlineSync.question("Nhập ID người dùng: ").trim();
  let courseId = readlineSync.question("Nhập ID khóa học: ").trim();

  let user = users.find((u) => u.id === userId);
  let course = courses.find((c) => c.id === courseId);

  if (!user || !course) {
    console.log("Lỗi: Người dùng hoặc khóa học không tồn tại.");
    return;
  }

  if (user.registeredCourses.includes(courseId)) {
    console.log("Người dùng đã đăng ký khóa học này.");
    return;
  }

  user.registeredCourses.push(courseId);
  course.students.push(userId);
  console.log(
    ` Người dùng "${user.name}" đã đăng ký khóa học "${course.name}".`
  );
}


function unregisterUserFromCourse() {
  let userId = readlineSync.question("Nhập ID người dùng: ").trim();
  let courseId = readlineSync.question("Nhập ID khóa học: ").trim();

  let user = users.find((u) => u.id === userId);
  let course = courses.find((c) => c.id === courseId);

  if (!user || !course) {
    console.log(" Lỗi: Người dùng hoặc khóa học không tồn tại.");
    return;
  }

  user.registeredCourses = user.registeredCourses.filter(
    (id) => id !== courseId
  );
  course.students = course.students.filter((id) => id !== userId);
  console.log(
    ` Người dùng "${user.name}" đã hủy đăng ký khóa học "${course.name}".`
  );
}


function listUserCourses() {
  let userId = readlineSync.question("Nhập ID người dùng: ").trim();
  let user = users.find((u) => u.id === userId);

  if (!user) {
    console.log("Lỗi: Không tìm thấy người dùng.");
    return;
  }

  let coursesList = user.registeredCourses.map(
    (id) => courses.find((c) => c.id === id)?.name || "Không tồn tại"
  );
  console.log(
    `Khóa học của ${user.name}: ${
      coursesList.length ? coursesList.join(", ") : "Chưa đăng ký khóa nào"
    }`
  );
}


mainMenu();
