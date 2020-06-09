function buttonAPressed() {
    var x = document.getElementById('textfield').value;
    var html = ''
    for (var i = 1; i <= x; i++) {
        var y = 1
        for (var j = 1; j <= i; j++) {
            var y = y * j
        }
        html = html + '<li>' + i + 'の階乗は' + y + '</li>'
    }
    document.getElementById('num').innerHTML = html;
}
