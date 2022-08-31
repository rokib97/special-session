// const allTags = document.getElementsByTagName("h3");
// for (let i = 0; i < allTags.length; i++) {
//   console.log(allTags[i].innerText);
// }

// const arr = [10, 20, 30];

// for (let h3 of allTags) {
//   h3.style.backgroundColor = "red";
// }

// const allh3Tag = document.getElementsByClassName("anonto-bhai");
// console.log(allh3Tag);

// for (let h3 of allh3Tag) {
//   h3.style.color = "green";
//   console.log(h3.innerText);
// }

// const test = document.getElementById("first-tag");
// test.innerText = "Playing with Dom";
// test.style.color = "red";
// console.log(test.innerText);

// const allTags = document.querySelectorAll(".anonto-bhai");
// for (let h3 of allTags) {
//   h3.style.color = "violet";
//   console.log(h3);
// }

// const h2 = document.getElementById("first-tag");
// h2.classList.add("test");
// h2.classList.remove("test");
// h2.classList.add("new-class-class");
// h2.classList.remove("new-class-class");

// document.getElementById("first-tag").classList.add("test");

// const myDiv = document.getElementById("test-div");
// const h4 = document.createElement("h4");
// h4.innerHTML = "I am h4 Tag from javaScript";
// myDiv.appendChild(h4);
// // console.log(myDiv);

// document.getElementById("attribute-test").setAttribute("value", "10");

// const myAtt = document.getElementById("first-tag").getAttribute("class");
// console.log(myAtt);

// let count = 0;
// function handlePlus() {
//   //   count = count + 1;
//   count++;
//   document.getElementById("count-value").innerText = count;
//   //   console.log(count);
// }

// document.getElementById("minus-button").addEventListener("click", function () {
//   //   count = count - 1;
//   count--;
//   document.getElementById("count-value").innerText = count;
// });

const myButton = document.getElementsByClassName("seletedBtn");
// console.log(myButton);
let count = 0;
for (let btn of myButton) {
  btn.addEventListener("click", function (event) {
    count++;
    if (count <= 5) {
      // console.log(event.target.parentNode.children[0]);
      const Name = event.target.parentNode.children[0].innerText;
      const mainContainer = document.getElementById("right");
      const tableContainer = document.createElement("tr");
      tableContainer.innerHTML = `
        <td>${count + ". "}</td>
        <td>${Name}</td>
    `;
      mainContainer.appendChild(tableContainer);
    } else {
      alert("invalid ");
      return;
    }
  });
}

document.getElementById("hireme-btn").addEventListener("click", function () {
  const valueField = document.getElementById("input-field").value;

  const totalExpenses = count * valueField;
  //   console.log(totalExpenses);
  //   const valueInput = valueField.value;
  document.getElementById("expense").innerText = totalExpenses;
  //   expensesValue.innerText = totalExpenses;
  document.getElementById("hireme-btn").setAttribute("disabled", true);
});
