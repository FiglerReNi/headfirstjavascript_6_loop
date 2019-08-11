function loop() {
    var message = '';
    var count = prompt("Enter a number greater than 0: ",);
    if (isNaN(count) || count === "") {
        alert('This is not a number');
    } else {
        if (count > 0) {
            debugger;
            for (var i = parseInt(count); i > 0; i--) {
                message += i + "<br>";
            }
            message += "Roll film!";
            document.getElementById('count').innerHTML = message;
        } else {
            alert('This is not greater than 0');
        }
    }
}

function loopWhile() {
    var message = '';
    var count = prompt("Enter a number greater than 0: ",);
    if (isNaN(count) || count === "") {
        alert('This is not a number');
    } else {
        if (count > 0) {
            var i = parseInt(count);
            while(i > 0) {
                message += i + "<br>";
                i--;
            }
            message += "Roll film!";
            document.getElementById('count').innerHTML = message;
        } else {
            alert('This is not greater than 0');
        }
    }
}