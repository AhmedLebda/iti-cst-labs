const today = new Date();

console.log(today.toLocaleDateString());
console.log(getDayName(today, "en-us"));

function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}
