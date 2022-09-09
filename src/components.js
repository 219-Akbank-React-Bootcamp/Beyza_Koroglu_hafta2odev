const renderUserProducts = function (product) {
  let template = userOneProductTemplate;

  const keys = Object.keys(product);
  keys.forEach((key) => {
    template = template.replace("{{" + key + "}}", product[key]);
  });

  const element = document.createElement("tr");
  element.innerHTML = template;
  return element;
};

const renderUserDetail = function () {
  if (selectedUser === "") return;

  let template = `
  <div id="user_detail">
    <h4>${selectedUser.fullName} ${
    userDetailCategory === "products" ? "Ürünleri" : "Hesap Hareketleri"
  }</h4>
  
  </div>`;

  const user_detail_cover = document.getElementById("user_detail_cover");
  user_detail_cover.innerHTML = template;

  if (userDetailCategory === "products") {
    const user_detail = document.getElementById("user_detail");
    let element = document.createElement("table");
    element.classList.add("table");
    element.innerHTML = userProductsTemplate;
    user_detail.appendChild(element);

    const userProducts = document.getElementById("userProducts");
    if (selectedUser.userProducts) {
      selectedUser.userProducts.forEach((product) => {
        const temp = renderUserProducts(product);
        userProducts.appendChild(temp);
      });
    }
  }
};

const renderProduct = function (product) {
  let template = productTemplate;

  const keys = Object.keys(product);
  keys.forEach((key) => {
    template = template.replace("{{" + key + "}}", product[key]);
  });

  const element = document.createElement("tr");
  element.innerHTML = template;

  if (selectedUser !== "" && selectedUser.balance >= product.price) {
    const td = document.createElement("td");
    td.innerHTML = `<button type="button" class="btn btn-link">Seçili kişiye sat</button>`;
    td.addEventListener("click", function () {
      sellProduct(product);
    });
    element.appendChild(td);
  }
  return element;
};

const renderProductList = function () {
  const product_list = document.getElementById("product_list");

  if (products.length !== 0) {
    product_list.innerHTML = productListTemplate;

    const tbody = document.getElementById("products");

    products.forEach((product) => {
      const temp = renderProduct(product);
      tbody.appendChild(temp);
    });
  }
};

const renderUser = function (user) {
  let template = userTemplate;

  const keys = Object.keys(user);
  keys.forEach((key) => {
    template = template.replace("{{" + key + "}}", user[key]);
  });

  const element = document.createElement("tr");
  element.innerHTML = template;
  element.addEventListener("click", function () {
    changeSelectedUser(user);
  });
  return element;
};

const renderUserList = function () {
  const user_list = document.getElementById("user_list");

  if (users.length !== 0) {
    user_list.innerHTML = userListTemplate;

    const tbody = document.getElementById("users");
    users.forEach((user) => {
      const temp = renderUser(user);
      tbody.appendChild(temp);
    });
  }
};

const renderProductForm = function () {
  const template = productFormTemplate;
  const product_form = document.getElementById("product_form");
  product_form.innerHTML = template;
};

const renderUserForm = function () {
  const template = userFormTemplate;
  const user_form = document.getElementById("user_form");
  user_form.innerHTML = template;
};

const renderPage = function () {
  let template = rootTemplate;

  const root = document.getElementById("root");
  root.innerHTML = template;

  renderProductForm();
  renderUserForm();
  renderUserList();
  renderProductList();
  renderUserDetail();
};

renderPage();
