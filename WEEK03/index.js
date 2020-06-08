function buttonAPressed() {
    var html = "";
    for (var i = 1; i <= 10; i++) {
        var x = Math.floor(Math.random() * 10)
        html = html + "<li>" + x + "</li>";
    }
    document.getElementById('number').innerHTML = html;
}