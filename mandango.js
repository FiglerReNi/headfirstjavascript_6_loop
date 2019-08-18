//function reference
// window.onload = szekFeltoltesArrays;

// function literal
window.onload = function() {
    szekFeltoltesArrays();
    document.getElementById("btn").onclick = szabadSzekArrays;
   //For ciklusban
    var x = document.getElementsByTagName("img").length;
    var id;
    for(id = 1; id <= x; id++) {
        document.getElementById(id).onclick = function() {
            show(this.kattintott);
        };
        document.getElementById(id).kattintott = id;
    }
    //Egyesével
    // document.getElementById('1').onclick = function(){ show('1');};
    // document.getElementById('2').onclick = function(){ show('2');};
    // document.getElementById('3').onclick = function(){ show('3');};
    // document.getElementById('4').onclick = function(){ show('4');};
    // document.getElementById('5').onclick = function(){ show('5');};
    // document.getElementById('6').onclick = function(){ show('6');};
    // document.getElementById('7').onclick = function(){ show('7');};
    // document.getElementById('8').onclick = function(){ show('8');};
    // document.getElementById('9').onclick = function(){ show('9');};
    // document.getElementById('10').onclick = function(){ show('10');};
    // document.getElementById('11').onclick = function(){ show('11');};
    // document.getElementById('12').onclick = function(){ show('12');};
    // document.getElementById('13').onclick = function(){ show('13');};
    // document.getElementById('14').onclick = function(){ show('14');};
    // document.getElementById('15').onclick = function(){ show('15');};
    // document.getElementById('16').onclick = function(){ show('16');};
    // document.getElementById('17').onclick = function(){ show('17');};
    // document.getElementById('18').onclick = function(){ show('18');};
    // document.getElementById('19').onclick = function(){ show('19');};
    // document.getElementById('20').onclick = function(){ show('20');};
    // document.getElementById('21').onclick = function(){ show('21');};
    // document.getElementById('22').onclick = function(){ show('22');};
    // document.getElementById('23').onclick = function(){ show('23');};
    // document.getElementById('24').onclick = function(){ show('24');};
    // document.getElementById('25').onclick = function(){ show('25');};
    // document.getElementById('26').onclick = function(){ show('26');};
    // document.getElementById('27').onclick = function(){ show('27');};
    // document.getElementById('28').onclick = function(){ show('28');};
    // document.getElementById('29').onclick = function(){ show('29');};
    // document.getElementById('30').onclick = function(){ show('30');};
    // document.getElementById('31').onclick = function(){ show('31');};
    // document.getElementById('32').onclick = function(){ show('32');};
    // document.getElementById('33').onclick = function(){ show('33');};
    // document.getElementById('34').onclick = function(){ show('34');};
    // document.getElementById('35').onclick = function(){ show('35');};
    // document.getElementById('36').onclick = function(){ show('36');};
};

// function szabadSzekWhile() {
//     document.getElementById("szabad").innerHTML = "";
//     szekFeltoltes();
//     setTimeout(keres, 1000);
//     function keres() {
//         var i = 1;
//         var finished = false;
//         var length = document.getElementById("myDiv").childElementCount;
//         var szamolo = 0;
//         while (i <= length && finished != true) {
//             var src = srcCheck(i);
//             if (src == 'seat_avail.png') {
//                 szamolo++;
//                 if (szamolo == 3) {
//                     if (confirm("Lefoglalod ezeket a székeket? Sorszám: " + (i - 2) + " " + (i - 1) + " " + (i))) {
//                     szekValasztas(i);
//                         finished = true;
//                     } else {
//                         i++;
//                         szamolo = 0;
//                     }
//                 }
//                 i++;
//             } else {
//                 szamolo = 0;
//                 i++;
//             }
//         }
//     }
// }

function srcCheck(value) {
    var kep = document.getElementById(value).src;
    kep = kep.split('/');
    var src = kep[kep.length - 1];
    return src;
}

// function szekFeltoltes() {
//     var seat = [false, true, false, true, true, true, false, true, true];
//     var i;
//     var length = seat.length;
//     for (i = 0; i < length; i++) {
//         if (seat[i] == true) {
//             document.getElementById(i + 1).src = "seat_avail.png";
//         } else {
//             document.getElementById(i + 1).src = "seat_unavail.png";
//         }
//     }
// }

// function szabadSzekEgyes() {
//     document.getElementById("szabad").innerHTML = "";
//     szekFeltoltes();
//     setTimeout(keres, 1000);
//     function keres() {
//         var i;
//         var length = document.getElementById("myDiv").childElementCount;
//         for (i = 1; i <= length;) {
//             var src = srcCheck(i);
//             if (src == 'seat_avail.png') {
//                 if (confirm("Lefoglalod ezt a széket? Sorszám: " + i)) {
//                     document.getElementById(i).src = "seat_select.png";
//                     document.getElementById("szabad").innerHTML = "Sikeres foglalás!";
//                     break;
//                 } else {
//                     i++;
//                 }
//             } else {
//                 i++;
//             }
//         }
//     }
// }

// function szabadSzek() {
//     document.getElementById("szabad").innerHTML = "";
//     szekFeltoltes();
//     setTimeout(keres, 1000);
//     function keres() {
//         var i;
//         var length = document.getElementById("myDiv").childElementCount;
//         var szamolo = 0;
//         for (i = 1; i <= length;) {
//             var src = srcCheck(i);
//             if (src == 'seat_avail.png') {
//                 szamolo++;
//                 if (szamolo == 3) {
//                     if (confirm("Lefoglalod ezeket a székeket? Sorszám: " + (i - 2) + " " + (i - 1) + " " + (i))) {
//                         szekValasztas(i);
//                         break;
//                     } else {
//                         i++;
//                         szamolo = 0;
//                     }
//                 }
//                 i++;
//             } else {
//                 szamolo = 0;
//                 i++;
//             }
//         }
//     }
// }

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
                            szekValasztas(id);
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

function szekValasztas(id){
    document.getElementById("szabad").innerHTML = (id - 2) + " " + (id - 1) + " " + (id) + " sorszámú székek szabadok egymás mellett.</br>Sikeres foglalás!";
    document.getElementById(id - 2).src = "seat_select.png";
    document.getElementById(id - 1).src = "seat_select.png";
    document.getElementById(id).src = "seat_select.png";
}

function checkSzek(valasztott){
    debugger;
    if(srcCheck(valasztott) == 'seat_avail.png') return 'available';
    else if(srcCheck(valasztott) == 'seat_select.png') return 'yours';
    if(srcCheck(valasztott) == 'seat_unavail.png') return 'unavailable';
}

function show(valasztott){
    debugger;
    alert('This seat is ' + checkSzek(valasztott) + '!');
}