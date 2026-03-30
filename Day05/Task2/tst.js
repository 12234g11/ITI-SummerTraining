function showAddress(addrObj) {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return addrObj.buildingNum + " " + addrObj.street + ", "+addrObj.city + " city registered in " +
         day + "/" + month + "/" + year;
}

let addrObj = {
  street: "abc st.",
  buildingNum: 15,
  city: "xyz"
};

document.write(showAddress(addrObj));


function dispVal(obj, key) {
  if (key === "age") {
    return obj[key] + " years old";
  } else {
    return obj[key];
  }
}

let person = {
  nm: "ali",
  age: 10
};
document.write("<br>");
document.write(dispVal(person, "age"));  
document.write("<br>");
document.write(dispVal(person, "nm"));  
