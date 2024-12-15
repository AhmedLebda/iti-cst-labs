const data = {
  "font-family": ["arial", "courier", "georgia", "times new roman", "verdana"],
  "text-align": ["left", "center", "right", "justify"],
  "line-height": ["normal", "10px", "15px", "1.5px"],
  "letter-spacing": ["normal", "-1px", "2px", "3px"],
  "text-indent": ["0px", "5px", "15px", "25px"],
  "text-transform": ["none", "uppercase", "lowercase", "capitalize"],
  "text-decoration": ["none", "line-through", "underline", "overline"],
  "border-type": [
    "none",
    "dotted",
    "double",
    "groove",
    "dashed",
    "inset",
    "solid",
    "outset",
  ],
  "border-color": ["none", "pink", "red", "green", "yellow", "blue", "purple"],
  color: ["red", "green", "yellow", "blue", "purple"],
  "font-weight": ["normal", "bold", "bolder", "lighter"],
  "font-style": ["normal", "italic", "oblique"],
  "font-size": ["12px", "16px", "20px", "24px", "32px"],
};

renderForm();
const paragraph = document.querySelector("#styled-paragraph");

function updateParagraphStyle() {
  for (const [key, _value] of Object.entries(data)) {
    const selectedOption = document.querySelector(
      `input[name="${key}"]:checked`
    );
    if (selectedOption) {
      const styleName = getStyleName(key);
      paragraph.style[styleName] = selectedOption.value;
    }
  }
}

// Rendering functions
function renderForm() {
  const form = createForm();
  document.body.appendChild(form);
}

function createForm() {
  const form = document.createElement("form");

  for (const [key, value] of Object.entries(data)) {
    const fieldset = createFieldSet(key, value);
    form.appendChild(fieldset);
  }

  form.addEventListener("change", updateParagraphStyle);

  return form;
}

function createFieldSet(legendText, values) {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = legendText.replace("-", " ");
  fieldset.appendChild(legend);

  const radioGroup = values.map((value) => createRadio(legendText, value));
  radioGroup.forEach((container) => fieldset.appendChild(container));

  return fieldset;
}

function createRadio(name, value) {
  const container = document.createElement("div");

  const radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("name", name);
  radio.setAttribute("value", value);
  radio.setAttribute("id", `${name}-${value}`);

  const label = document.createElement("label");
  label.textContent = value;
  label.setAttribute("for", `${name}-${value}`);

  container.appendChild(radio);
  container.appendChild(label);

  return container;
}

// Get the correct style name
function getStyleName(text) {
  if (text === "border-type") return "border";

  return text
    .split("-")
    .map((word, index) =>
      index ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join("");
}
