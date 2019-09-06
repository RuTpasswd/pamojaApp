const inputKey = document.getElementById("pamoja-chat-text");
//	const inputValue = document.getElementById("inputValue");
const button = document.getElementById("button");
button.onclick = function () {
    const key = inputKey.value;
    //const value = inputValue.value;


    if (key) {
        localStorage.setItem(key);

        location.reload();
    }
};

for (i = 0; i <= localStorage.length; i++) {
    var usersdata = localStorage.key(i);

    document.getElementById("pamoja-chat-messages1").innerHTML += usersdata
    console.log(usersdata);
}
