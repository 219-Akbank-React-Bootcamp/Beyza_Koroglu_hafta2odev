const renderProduct = function (product) {
  let template = productTemplate;

  const keys = Object.keys(product);
  keys.forEach((key) => {
    template = template.replace("{{" + key + "}}", product[key]);
  });

  const element = document.createElement("tr");
  element.innerHTML = template;
  return element;
};

const renderProductList = function () {
  const product_list = document.getElementById("product_list");
  product_list.innerHTML = productListTemplate;

  const tbody = document.getElementById("products");

  products.forEach((product) => {
    const temp = renderProduct(product);
    tbody.appendChild(temp);
  });
};

const renderUser = function (user) {
  let template = userTemplate;

  const keys = Object.keys(user);
  keys.forEach((key) => {
    template = template.replace("{{" + key + "}}", user[key]);
  });

  const element = document.createElement("tr");
  element.innerHTML = template;
  return element;
};

const renderUserList = function () {
  const user_list = document.getElementById("user_list");
  user_list.innerHTML = userListTemplate;

  const tbody = document.getElementById("users");
  users.forEach((user) => {
    const temp = renderUser(user);
    tbody.appendChild(temp);
  });
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
};

renderPage();
