
// var disp = document.getElementById("display");

let n = 5;

var triangle = "A";

// document.write(<button class="btn btn-primary" onclick="rc()" type="button"><i class="bi bi-arrow-clockwise"></i>
//     Clockwise</button>);

//	------1 triangle-----
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write('#&nbsp;&nbsp; ');
//     }
//     document.write("<br>");
// }
//	------1 triangle-----

//	------2 triangle-----
// for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//         document.write('#&nbsp;&nbsp; ');
//     }
//     document.write("<br>");
// }
//	------2 triangle-----

//	------3 triangle-----
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp; ");
//     }
//     for (let j = i; j <= n; j++) {
//         document.write('#&nbsp;&nbsp; ');
//     }
//     document.write("<br>");
// }
//	------3 triangle-----

//	------4 triangle-----
// for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp; ");
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write('#&nbsp;&nbsp; ');
//     }
//     document.write("<br>");
// }
//	------4 triangle-----


function rc() {
    if (triangle == "A") {
        document.write('<buttun onclick="rc()">clock</button></br>');
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        triangle = "B";
    } else if (triangle == "B") {
        for (let i = 1; i <= n; i++) {
            for (let j = i; j <= n; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        // document.write('<buttun onclick="rc()">clock</button></br>');
        triangle = "C";
    } else if (triangle == "C") {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                document.write("&nbsp;&nbsp;&nbsp;&nbsp; ");
            }
            for (let j = i; j <= n; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        // document.write('<buttun onclick="rc()">clock</button></br>');
        triangle = "D";
    } else if (triangle == "D") {
        for (let i = 1; i <= n; i++) {
            for (let j = i; j <= n; j++) {
                document.write("&nbsp;&nbsp;&nbsp;&nbsp; ");
            }
            for (let j = 1; j <= i; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        // document.write('<buttun onclick="rc()">clock</button></br>');
        triangle = "E";

    } else if (triangle == "E") {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        // document.write('<buttun onclick="rc()">clock</button></br>');
        triangle = "";

    }
}

function rac() {
    if (triangle == "A") {
        document.write('<buttun onclick="rac()">Anti-clock</button></br>');
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        triangle = "B";
    } else if (triangle == "B") {
        for (let i = 1; i <= n; i++) {
            for (let j = i; j <= n; j++) {
                document.write("&nbsp;&nbsp;&nbsp;&nbsp; ");
            }
            for (let j = 1; j <= i; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        // document.write('<buttun onclick="rc()">clock</button></br>');
        triangle = "C";
    } else if (triangle == "C") {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                document.write("&nbsp;&nbsp;&nbsp;&nbsp; ");
            }
            for (let j = i; j <= n; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        // document.write('<buttun onclick="rc()">clock</button></br>');
        triangle = "D";
    } else if (triangle == "D") {
        for (let i = 1; i <= n; i++) {
            for (let j = i; j <= n; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        // document.write('<buttun onclick="rc()">clock</button></br>');
        triangle = "E";

    } else if (triangle == "E") {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                document.write('#&nbsp;&nbsp; ');
            }
            document.write("<br>");
        }
        // document.write('<buttun onclick="rc()">clock</button></br>');
        triangle = "";

    }
}








//	------Star triangle-----
// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 5; j++) {
//         document.write('# ');
//     }
//     document.write("<br>");
// }
//	------Star triangle-----