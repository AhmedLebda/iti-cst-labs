var studentsGrades = [
  [10, 20, 32],
  [40, 50, 33],
  [70, 80, 12],
  [90, 100, 91],
];

document.write(
  `<table style='border:2px solid black; height:300px; text-align:center; width:600px; margin:8rem auto; font-family:sans-serif; border-radius:5px;'>`
);
document.write("<tr>");
studentsGrades.forEach((_, index) => {
  document.write(
    `<td style='border:2px solid black; padding:10px; background-color:#c6e2eb; font-weight:bold; color:darkblue'> ST${index} </td>`
  );
});
document.write(
  `<td style='border:2px solid black; padding:10px; background-color:#b6f3b6; font-weight:bold; color:green;'> Sum </td>`
);
document.write("</tr>");

for (let x = 0; x < studentsGrades[0].length; x++) {
  document.write(`<tr>`);
  let sum = 0;
  for (grade of studentsGrades) {
    document.write(
      `<td style='border:2px solid black; padding:10px;'> ${grade[x]} </td>`
    );
    sum += grade[x];
  }
  document.write(
    `<td style='border:2px solid black; padding:10px; color:green; font-weight:bold; background-color:#b6f3b6;'> ${sum} </td>`
  );

  document.write(`</tr>`);
}

document.write(`</table>`);
