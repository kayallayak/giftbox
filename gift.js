function buttonFunction() {
    var n = document.getElementById('n').value;
    for (let i = 0; i < n; i++) {
        var img = document.createElement("img");
        img.src = "gift.jpeg";
        img.style = "width:100px;height:80px;";
        document.body.appendChild(img);
    }
}