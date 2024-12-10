let products = [];
let cart = [];

function adminLogin() {
    const password = document.getElementById("password").value;
    if (password === "Mahmoud33") {
        document.getElementById("admin-panel").style.display = "block";
        alert("تم تسجيل الدخول بنجاح");
    } else {
        alert("كلمة المرور خاطئة");
    }
}

function addProduct() {
    const productName = document.getElementById("product-name").value;
    if (productName) {
        products.push(productName);
        document.getElementById("product-name").value = "";
        renderProducts();
    }
}

function renderProducts() {
    const productList = document.getElementById("product-list");
    const adminProductList = document.getElementById("admin-product-list");
    productList.innerHTML = "";
    adminProductList.innerHTML = "";

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product-item";
        productDiv.innerHTML = `
            <p>${product}</p>
            <button onclick="addToCart('${product}')">إضافة للسلة</button>
        `;
        productList.appendChild(productDiv);

        const adminItem = document.createElement("li");
        adminItem.innerHTML = `
            ${product} <button onclick="removeProduct(${index})">حذف</button>
        `;
        adminProductList.appendChild(adminItem);
    });
}

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const cartDiv = document.createElement("div");
        cartDiv.className = "cart-item";
        cartDiv.innerHTML = `
            <p>${item}</p>
            <button onclick="removeFromCart(${index})">إزالة</button>
        `;
        cartItems.appendChild(cartDiv);
    });
}

function removeProduct(index) {
    products.splice(index, 1);
    renderProducts();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}
