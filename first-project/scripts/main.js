let myHeading = document.querySelector("h1");
myHeading.textContent = "Curiosity真的好厉害啊！";

// document.querySelector("html").addEventListener("click", function () {
//     alert("你点了一下网页，是不是");
// });


let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/wallhaven-v97223.png") {
        myImage.setAttribute("src", "images/wallhaven-l875l2.png");
    } else {
        myImage.setAttribute("src", "images/wallhaven-v97223.png");
    }
};


let myButton = document.querySelector("button");
let myHeading1 = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}



// 因为用户名是保存在 localStorage 里的，网页关闭后也不会丢失，
// 所以重新打开浏览器时所设置的名字信息将依然存在
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading1.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};


