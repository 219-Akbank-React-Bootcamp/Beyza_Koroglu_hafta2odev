const formToKeyValuePair = (formId) => {
  const form = document.getElementById(formId);
  const formValues = Array.from(form.childNodes)
    .filter((e) => e.tagName === "INPUT")
    .reduce((prev, current) => {
      prev[current.name] = current.value;
      return prev;
    }, {});
  return formValues;
};

const addProduct = () => {
  console.log("dfo")
  const productValues = formToKeyValuePair("add_product");
  products.push(productValues);

  renderPage();
}

const addUser = () => {
  const userValues = formToKeyValuePair("add_user");
  users.push(userValues);

  renderPage();
};
