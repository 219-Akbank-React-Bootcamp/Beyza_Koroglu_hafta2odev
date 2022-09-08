const formToKeyValuePair = (formId) => {
  const form = document.getElementById(formId);
  const formValues = Array.from(form.childNodes)
    .filter((e) => e.tagName === "INPUT")
    .reduce((prev, current) => {
      prev[current.name] = current.value;
      return prev;
    }, {});
  formValues.id = idGenerator();
  return formValues;
};

const idGenerator = () => {
  return String(Date.now());
};
