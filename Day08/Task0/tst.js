function showCookies() {
  let cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let [key, value] = cookies[i].split("=");
    console.log(key + ":", value);
  }
}
document.cookie = "username=Yasser";
document.cookie = "password=12345";
document.cookie = "age=20";
document.cookie = "address=giza";

showCookies();
