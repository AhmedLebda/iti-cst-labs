const newsArr = [];
var idCounter = 0;
const table = document.querySelector("table");
const form = document.querySelector("form");
const searchInput = document.querySelector("#search-input");
const newsTypeErrorMessage = document.querySelector("#newsType-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newsData = getNewsData();
  if (newsData) {
    for (let newsItem of newsArr) {
      if (
        newsItem.content === newsData.content &&
        newsItem.category === newsData.category
      ) {
        alert("News already exists.");
        idCounter--;
        return;
      }
    }
    newsArr.push(newsData);
    renderResults(newsArr);
  }
});

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredNews = newsArr.filter((news) =>
    news.content.toLowerCase().includes(searchValue)
  );

  renderResults(filteredNews);
});

function renderResults(news) {
  let tableBody = document.querySelector("tbody");
  if (tableBody) {
    tableBody.remove();
  }

  tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  news.forEach((newsItem) => {
    const row = createRow(newsItem.id, newsItem.category, newsItem.content);
    tableBody.appendChild(row);
  });
}

// Helper Functions
function createRow(id, category, content) {
  const row = document.createElement("tr");
  const idCell = document.createElement("td");
  idCell.textContent = id;
  const categoryCell = document.createElement("td");
  categoryCell.textContent = category;
  const contentCell = document.createElement("td");
  contentCell.textContent = content;

  row.appendChild(idCell);
  row.appendChild(categoryCell);
  row.appendChild(contentCell);

  return row;
}
function getNewsData() {
  const data = {};

  const checkedRadio = document.querySelector("input[type=radio]:checked");
  if (checkedRadio) {
    newsTypeErrorMessage.classList.add("invisible");
    newsTypeErrorMessage.classList.add("test");
    data[checkedRadio.name] = checkedRadio.value;
  } else {
    newsTypeErrorMessage.textContent = "Please select a type for your news";
    newsTypeErrorMessage.classList.remove("invisible");
    return;
  }

  const error = document.querySelector("#error");
  const newsText = document.querySelector("#news-text");
  if (newsText.value.trim()) {
    data[newsText.name] = newsText.value.trim();
    if (error) {
      error.remove();
      newsText.classList.remove("error");
    }
  } else {
    newsText.classList.add("error");

    if (!error) {
      const errorMessage = document.createElement("span");
      errorMessage.textContent = "Please enter a news text.";
      errorMessage.style.fontSize = "14px";
      errorMessage.style.textAlign = "right";
      errorMessage.id = "error";
      newsText.parentElement.insertAdjacentElement("afterend", errorMessage);
    }
    newsText.focus();
    return;
  }

  data.id = idCounter++;

  newsText.value = "";

  newsText.focus();
  return data;
}
