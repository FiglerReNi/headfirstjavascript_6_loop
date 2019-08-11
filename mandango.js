function szabadSzekWhile() {
    document.getElementById("szabad").innerHTML = "";
    szekFeltoltes();
    setTimeout(keres, 1000);
    function keres() {
        var i = 1;
        var finished = false;
        var length = document.getElementById("myDiv").childElementCount;
        var szamolo = 0;
        while (i <= length && finished != true) {
            var src = srcCheck(i);
            if (src == 'seat_avail.png') {
                szamolo++;
                if (szamolo == 3) {
                    if (confirm("Lefoglalod ezeket a székeket? Sorszám: " + (i - 2) + " " + (i - 1) + " " + (i))) {
                        document.getElementById("szabad").innerHTML = (i - 2) + " " + (i - 1) + " " + (i) + " sorszámú székek szabadok egymás mellett.</br>Sikeres foglalás!";
                        document.getElementById(i - 2).src = "seat_select.png";
                        document.getElementById(i - 1).src = "seat_select.png";
                        document.getElementById(i).src = "seat_select.png";
                        finished = true;
                    } else {
                        i++;
                        szamolo = 0;
                    }
                }
                i++;
            } else {
                szamolo = 0;
                i++;
            }
        }
    }
}

function srcCheck(value) {
    var kep = document.getElementById(value).src;
    kep = kep.split('/');
    var src = kep[kep.length - 1];
    return src;
}

function szekFeltoltes() {
    var seat = [false, true, false, true, true, true, false, true, true];
    var i;
    var length = seat.length;
    for (i = 0; i < length; i++) {
        if (seat[i] == true) {
            document.getElementById(i + 1).src = "seat_avail.png";
        } else {
            document.getElementById(i + 1).src = "seat_unavail.png";
        }
    }
}

function szabadSzekEgyes() {
    document.getElementById("szabad").innerHTML = "";
    szekFeltoltes();
    setTimeout(keres, 1000);
    function keres() {
        var i;
        var length = document.getElementById("myDiv").childElementCount;
        for (i = 1; i <= length;) {
            var src = srcCheck(i);
            if (src == 'seat_avail.png') {
                if (confirm("Lefoglalod ezt a széket? Sorszám: " + i)) {
                    document.getElementById(i).src = "seat_select.png";
                    document.getElementById("szabad").innerHTML = "Sikeres foglalás!";
                    break;
                } else {
                    i++;
                }
            } else {
                i++;
            }
        }
    }
}

function szabadSzek() {
    document.getElementById("szabad").innerHTML = "";
    szekFeltoltes();
    setTimeout(keres, 1000);
    function keres() {
        var i;
        var length = document.getElementById("myDiv").childElementCount;
        var szamolo = 0;
        for (i = 1; i <= length;) {
            var src = srcCheck(i);
            if (src == 'seat_avail.png') {
                szamolo++;
                if (szamolo == 3) {
                    if (confirm("Lefoglalod ezeket a székeket? Sorszám: " + (i - 2) + " " + (i - 1) + " " + (i))) {
                        document.getElementById("szabad").innerHTML = (i - 2) + " " + (i - 1) + " " + (i) + " sorszámú székek szabadok egymás mellett.</br>Sikeres foglalás!";
                        document.getElementById(i - 2).src = "seat_select.png";
                        document.getElementById(i - 1).src = "seat_select.png";
                        document.getElementById(i).src = "seat_select.png";
                        break;
                    } else {
                        i++;
                        szamolo = 0;
                    }
                }
                i++;
            } else {
                szamolo = 0;
                i++;
            }
        }
    }
}

function szekFeltoltesArrays() {
    var seat = [[false, true, false, true, true, true, false, true, true],
        [false, true, false, true, false, true, false, true, true],
        [false, true, false, true, true, true, false, false, true],
        [true, true, true, false, true, true, false, true, true]];
    var i;
    var length = seat.length;
    for (i = 0; i < length; i++) {
        for (j = 1; j <= seat[i].length; j++) {
            var id = j+9*i;
            if (seat[i][j-1] == true) {

                document.getElementById(id).src = "seat_avail.png";
            } else {
                document.getElementById(id).src = "seat_unavail.png";
            }
        }
    }
}

function szabadSzekArrays(){
    document.getElementById("szabad").innerHTML = "";
    szekFeltoltesArrays();
    setTimeout(keres, 1000);
    function keres() {
        var x = document.getElementById("ulesek").children;
        var y = x.length;
        var j = 0;
        var finished = false;
        debugger;
        while (j < y && finished != true) {
            var i = 1;
            var length = (document.getElementById("myDiv" + (j+1)).childElementCount)-1;
            var szamolo = 0;
            for (i = 1; i <= length;) {
                var id = i+length*j;
                var src = srcCheck(id);
                if (src == 'seat_avail.png') {
                    szamolo++;
                    if (szamolo == 3) {
                        if (confirm("Lefoglalod ezeket a székeket? Sorszám: " + (id - 2) + " " + (id - 1) + " " + (id))) {
                            document.getElementById("szabad").innerHTML = (id - 2) + " " + (id - 1) + " " + (id) + " sorszámú székek szabadok egymás mellett.</br>Sikeres foglalás!";
                            document.getElementById(id - 2).src = "seat_select.png";
                            document.getElementById(id - 1).src = "seat_select.png";
                            document.getElementById(id).src = "seat_select.png";
                            finished = true;
                            break;
                        } else {
                            i++;
                            szamolo = 0;
                        }
                    }
                    i++;
                } else {
                    szamolo = 0;
                    i++;
                }
            }
            j++;
        }
    }
}