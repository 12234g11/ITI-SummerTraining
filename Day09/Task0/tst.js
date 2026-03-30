    let ref = document.getElementById("reference");

    let el1 = document.createElement("div");
    el1.textContent = "Inserted beforebegin";
    ref.insertAdjacentElement("beforebegin", el1);

    let el2 = document.createElement("div");
    el2.textContent = "Inserted afterbegin";
    ref.insertAdjacentElement("afterbegin", el2);

    let el3 = document.createElement("div");
    el3.textContent = "Inserted beforeend";
    ref.insertAdjacentElement("beforeend", el3);

    let el4 = document.createElement("div");
    el4.textContent = "Inserted afterend";
    ref.insertAdjacentElement("afterend", el4);