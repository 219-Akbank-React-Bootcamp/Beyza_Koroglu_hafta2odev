let users = [];
let products = [];

const renderProduct = function (product) {
  let template = `<div class="product_cover">
      <span class="product_name">{{product}}</span>
      <span class="product_price">{{price}}</span>
      <span class="product_stock">{{stock}}</span>
    </div>`;

  const keys = Object.keys(product);
  keys.forEach((key) => {
    template = template.replace("{{" + key + "}}", product[key]);
  });

  const element = document.createElement("div");
  element.innerHTML = template;
  return element;
};

const renderProductList = function () {
  const product_list = document.getElementById("product_list");
  product_list.innerHTML = "";
  products.forEach((product) => {
    const temp = renderProduct(product);
    product_list.appendChild(temp);
  });
};

const renderUser = function (user) {
  let template = `<div class="user_cover">
      <span class="user_name">{{fullName}}</span>
      <span class="user_balance">{{balance}}</span>
    </div>`;

  const keys = Object.keys(user);
  keys.forEach((key) => {
    template = template.replace("{{" + key + "}}", user[key]);
  });

  const element = document.createElement("div");
  element.innerHTML = template;
  return element;
};

const renderUserList = function () {
  const user_list = document.getElementById("user_list");
  user_list.innerHTML = "";
  users.forEach((user) => {
    const temp = renderUser(user);
    user_list.appendChild(temp);
  });
};

const renderPage = function () {
  let template = `<div id="first-row" class="row border">
  <div class="col-3 border">
    <form id="add_user">
      <input name="fullName" placeholder="İsim giriniz" />
      <input name="balance" placeholder="Bakiye giriniz" />
      <br />
      <button onclick="javascript:addUser()" type="button">Ekle</button>
    </form>
  </div>
  <div class="col-6 border">Column</div>
  <div class="col-3 border">
    <form id="add_product">
      <input name="product" placeholder="Ürün giriniz" />
      <input name="price" placeholder="Fiyat giriniz" />
      <input name="stock" placeholder="Stok giriniz" />
      <br />
      <button onclick="javascript:addProduct()" type="button">Ekle</button>
    </form>
  </div>
</div>
<div id="second-row" class="row border">
  <div id="user_list" class="col-3 border"></div>
  <div class="col-6 border">Column</div>
  <div id="product_list" class="col-3 border"></div>
</div>`;
  const root = document.getElementById("root");
  root.innerHTML = template;
  renderUserList();
  renderProductList();
};

renderPage();
