window.Mystotage = {
    setItem: function (key, value) {
        document.cookie = key + "=" + value + "; path=/";
    },

    getItem: function (key) {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let parts = cookies[i].split('=');
            if (parts[0].trim() === key) {
                return parts[1];
            }
        }
        return null;
    },

    removeItem: function (key) {
        document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    },

    clear: function () {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let key = cookies[i].split('=')[0];
            document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        }
    },

    length: function() {
        let cookies = document.cookie.split(';');
        let count = 0;
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].includes('=')) {
                count++;
            }
        }
        return count;
    },

    key: function (index) {
        let cookies = document.cookie.split(';');
        let keys = [];
        for (let i = 0; i < cookies.length; i++) {
            let key = cookies[i].split('=')[0];
            keys.push(key);
        }
        if (index < keys.length) {
            return keys[index];
        } else {
            return null;
        }
    }
};

Mystotage.setItem("username", "Yasser");
Mystotage.setItem("password", "123");
Mystotage.setItem("age", "20");

console.log(Mystotage.getItem("username"));
console.log(Mystotage.getItem("password"));
console.log(Mystotage.getItem("age"));      

console.log(Mystotage.length());            

Mystotage.removeItem("password");
console.log(Mystotage.getItem("password"));
console.log(Mystotage.length());          

Mystotage.clear();
console.log(Mystotage.getItem("username")); 
console.log(Mystotage.getItem("age"));   
console.log(Mystotage.length());            

Mystotage.setItem("a", "1");
Mystotage.setItem("b", "2");
Mystotage.setItem("c", "3");

console.log(Mystotage.key(0));
console.log(Mystotage.key(1)); 
console.log(Mystotage.key(2));
console.log(Mystotage.key(3));

console.log(Mystotage.length()); 
