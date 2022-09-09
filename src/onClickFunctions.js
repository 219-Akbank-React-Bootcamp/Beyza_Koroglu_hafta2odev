const sellProduct = (product) => {
  if (!selectedUser.userProducts) selectedUser.userProducts = [];

  const userProduct = selectedUser.userProducts.find(
    (e) => e.id === product.id
  );

  if (userProduct) {
    userProduct.quantity += 1;
    selectedUser.balance -= product.price;
    product.stock -= 1;
  } else {
    selectedUser.userProducts.push({
      id: product.id,
      product: product.product,
      quantity: 1,
    });
    selectedUser.balance -= product.price;
    product.stock -= 1;
  }

  if (product.stock <= 0) {
    products = products.filter((e) => e !== product);
  }

  renderPage();
};

const changeSelectedUser = (user) => {
  selectedUser = user;

  renderPage();
};

const changeDetailPage = (category) => {
  userDetailCategory = category;

  renderPage();
};

const addProduct = () => {
  const productValues = formToKeyValuePair("add_product");
  products.push(productValues);

  renderPage();
};

const addUser = () => {
  const userValues = formToKeyValuePair("add_user");
  users.push(userValues);

  renderPage();
};
