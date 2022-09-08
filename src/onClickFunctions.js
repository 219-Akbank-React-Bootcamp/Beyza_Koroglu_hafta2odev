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
