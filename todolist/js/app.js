var listChild = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");
var listGeneral = document.querySelector("ul");

function newElement() {
    var liElement = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var text = document.createTextNode(inputValue);
    liElement.appendChild(text);
    if (inputValue === "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        document.getElementById("list").appendChild(liElement);
    }
    document.getElementById("task").value = "";

    var spanElement = document.createElement("SPAN");
    var xCode = document.createTextNode("\u00D7");
    spanElement.className = "close";
    spanElement.appendChild(xCode);
    liElement.appendChild(spanElement);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}

for (i = 0; i < listChild.length; i++) {
    var span = document.createElement("span");

    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listChild[i].appendChild(span);
}

for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

listGeneral.addEventListener(
    "click",
    function (click) {
        if (click.target.tagName === "LI") {
            click.target.classList.toggle("checked");
        }
    },
    false
);