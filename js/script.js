let numeri = document.getElementById("valori");
for (let i = 1; i < 5; i++) {
  const element = i;
  let number = Math.floor(Math.random() * 99) + 1;
  console.log(number);
  numeri.innerHTML += `${number}`;
}
