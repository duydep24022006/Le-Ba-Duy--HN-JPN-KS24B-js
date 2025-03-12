let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

let cart = [];


function showProducts() {
    alert("danh sách sản phẩm có sẵn:")
    products.forEach(p=>alert(`${p[0]} - Số lượng :${p[1]} - Giá: ${p[2]} VND`))
}

function addToCart(productName) {
    let product = products.find(p => p[0] === productName);
    if (!product) {
        alert("sản phẩm không tồn tại trong của hàng!")
        return;
    }
    if (product[1] === 0) {
        alert("sản phẩm đã hết hàng")
        return;
    }
    product[1]--;
    cartItem = cart.find(c => c[0] === productName);
    if (cartItem) {
        cartItem[1]++;
    } else {
        cart.push([productName, 1, product[2]]);
    }
    alert(`${productName} đã đc thêm vào giỏ hàng.`);
}

function showCart() {
    alert("giỏ hàng hiện tại:")
    cart.forEach(p=>alert(`${p[0]} - Số lượng :${p[1]} - Giá: ${p[2]} VND`))
}
function checkout() {
    let total = cart.reduce((sum, item)=> sum + item[1] * item[2], 0);
    showCart();
    alert(`Tổng tiền: ${total} VND`);
}
function main() {
    while (true) {
        let choice = +prompt(`Chọn chức năng:
                        1.Xem sản phẩm
                        2.Mua hàng 
                        3.Hóa đơn 
                        4.Thoát`);
        switch (choice) {
            case 1:
                showProducts();
                break;
            case 2:
                let productName = prompt("Nhập tên sản phẩm muốn mua:");
                addToCart(productName);
                break;
            case 3:
                checkout();
                break;
            case 4:
                alert("Thoát chương trình.");
                return;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}

main();
