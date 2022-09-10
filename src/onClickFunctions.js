const productTransfer = () => {
  const transferValues = formToKeyValuePair("product_transfer_form");

  const sender = users.find((user) => user.id === transferValues.productSender);
  const receiver = users.find(
    (user) => user.id === transferValues.productReceiver
  );

  const transferProduct = sender.userProducts.find(
    (product) => product.id === transferValues.transferProduct
  );
  sender.balance += transferProduct.price;
  transferProduct.quantity -= 1;
  if (transferProduct.quantity === 0) {
    sender.userProducts = sender.userProducts.filter(
      (product) => product !== transferProduct
    );
  }

  if (!receiver.userProducts) receiver.userProducts = [];

  const receiverProduct = receiver.userProducts.find(
    (product) => product.id === transferProduct.id
  );
  if (receiverProduct) receiverProduct.quantity += 1;
  else {
    receiver.userProducts.push({
      id: transferProduct.id,
      product: transferProduct.product,
      quantity: 1,
      price: transferProduct.price,
    });
  }
  receiver.balance -= transferProduct.price;

  renderPage();
};

const moneyTransfer = () => {
  const transferValues = formToKeyValuePair("money_transfer_form");

  const sender = users.find((user) => user.id === transferValues.moneySender);
  const receiver = users.find(
    (user) => user.id === transferValues.moneyReceiver
  );

  if (sender.balance < transferValues.transferMoney)
    alert("Yeterli bakiye bulunmamaktadır.");
  else {
    sender.balance -= transferValues.transferMoney;
    receiver.balance += transferValues.transferMoney;

    renderPage();
  }
};

const sellProduct = (product) => {
  if (!selectedUser.userProducts) selectedUser.userProducts = [];

  const userProduct = selectedUser.userProducts.find(
    (e) => e.id === product.id
  );

  if (userProduct) userProduct.quantity += 1;
  else {
    selectedUser.userProducts.push({
      id: product.id,
      product: product.product,
      quantity: 1,
      price: product.price,
    });
  }
  selectedUser.balance -= product.price;
  product.stock -= 1;

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
