// task-02.js

const total = 100;
let ordered = 130; // Змінюйте це значення для перевірки різних варіантів

if (ordered > total) {
    console.log("На складі недостатня кількість товару!");
    document.body.innerHTML += "<p>На складі недостатня кількість товару!</p>";
} else {
    console.log("Замовлення оформлено");
    document.body.innerHTML += "<p>Замовлення оформлено</p>";
}
