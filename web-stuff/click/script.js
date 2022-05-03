var e = 0;
var upg = 0;
var upg2 = 0;
var upg3 = 0;
var upg4 = 0;
var upg5 = 0;
var upg6 = 0;
var upg7 = 0;
var upg8 = 0;
var clickval = 0;
var clickval1 = 0;
var clickval3 = 0;
var clickval4 = 0;
var clickval6 = 0;
var clickval7 = 0;
var clickval8 = 0;
var speed = 1010;
var cost = 10;
var cost2 = 100;
var cost3 = 1000;
var cost4 = 75;
var cost5 = 5000;
var cost6 = 10000;
var cost7 = 15000;
var cost8 = 150000;

var buttonvalue = 1;
var hide = document.getElementById("hiddentest");
var cst2 = document.getElementById("cost2");
var up = document.getElementById("ultra");
var hide2 = document.getElementById("hide2");
var cst3 = document.getElementById("cost3");
var omgc = document.getElementById("omega");
var cst4 = document.getElementById("cost4");
var up4 = document.getElementById("buttonupgrade");
var hide3 = document.getElementById("hide3");
var sonic = document.getElementById("sonic");
var vroom = document.getElementById("vroom");
var hype = document.getElementById("hype");
var snkk = document.getElementById("snkk");
var cst5 = document.getElementById("cost5");
/*------------------------------------------------*/
var hide4 = document.getElementById("hide4");
var hide5 = document.getElementById("hide5");
var hide6 = document.getElementById("hide6");
var nukc = document.getElementById("nukee");
var cst6 = document.getElementById("cost6");
var cst7 = document.getElementById("cost7");
var cst8 = document.getElementById("cost8");
var upgbuy2 = false;
var check = false;
var check1 = false;
var check3 = false;
var check4 = false;
var check6 = false;
var check7 = false;
var check8 = false;
var upgbuy3 = false;
var upgbuy4 = false;
var upgbuy6 = false;
var upgbuy7 = false;
var upgbuy8 = false;
var upgbuy = false;
var hiddenoof = false;
var mtl = "To get ";
var mtl2 = " you need more clicks"
//if (e >= 10) {
    //if (hide.style.visibility === 'visible') {
     //   hide.style.visibility = 'hidden';
  //  } 
//}

/*setInterval(checks, 1);

function checks() {
    //checks for e >= than hidden reqiurnments
}*/
function save(saveCookie) {
    document.cookie = save + "=" + e;
}
function load(saveCookie) {
 let e = getCookie("saveCookie");
  if (username = "0") {
   alert("Nothing to load");
  } else {
    alert("Loaded " + e + " Click");
  }
}
function wipesave() {
document.cookie = save + "=" + 0;
}

function codeinput() {
    avariable = prompt("Password? (Did change)");
    if (avariable === "Awashcard0") {
        inpt2 = prompt("How many clicks? (ex: add clicks: 100. remove clicks: -100.)");
        e += parseInt(inpt2);
        updac();
    }
}

hide2.style.visibility = 'hidden';
hide3.style.visibility = 'hidden';
hide4.style.visibility = 'hidden';
hide5.style.visibility = 'hidden';
hide6.style.visibility = 'hidden';
sonic.style.visibility = 'hidden';

function click() {
    e = e + clickval1;
    updac();
    myfunction();
}
function click1() {
    e = e + clickval;
    updac();
}
function click3() {
    e = e + clickval3;
    updac();
}
function click4() {
    e += clickval4;
    updac();
}
function click6() {
    e += clickval6;
    updac();
}
    function click7() {
    e += clickval7;
    updac();
}
    function click8() {
    e += clickval8;
    updac();
}
hide.style.visibility = 'hidden';


function myfunction() {
    e = e + buttonvalue;
    document.getElementById("var").innerHTML = "clicks: " + e;
    if (e >= 100) {
       hide.style.visibility = 'visible';
    }
    if (e >= 1000) {
        hide2.style.visibility = 'visible';
    }
    
    if (e >= 5000) {
        hide3.style.visibility = 'visible';
    }

    if (e >= 10000) {
        hide4.style.visibility = 'visible';
    }
    if (e >= 15000) {
        hide5.style.visibility = 'visible';
    }   
    if (e >= 150000) {
        hide6.style.visibility = 'visible';
    }  
    
}

function updac() {
    document.getElementById("var").innerHTML = "clicks: " + e;
}

function buyupgrade() {
    if (e >= cost) {
        upg = upg + 1;
        e = e - cost;
        cost = cost + 5;
        upgbuy = true;
        clickval = clickval + 1;
        document.getElementById("upgrade").innerHTML = "noob clickers: " + upg;
        document.getElementById("cost").innerHTML = "cost: " + cost;
        updac();
        
        if (check1 === false) {
            if (upgbuy === true) {
                setInterval(click1, 2000);
                check1 = true;
                
            }
        }
            
        
    } else {
        alert(mtl+"noob clicker"+mtl2);
    }
}

function buyupgrade1() {
    if (e >= cost2) {
        upg2 = upg2 + 1;
        e = e - cost2;
        cost2 = cost2 + 50;
        clickval1 = clickval1 + 1;
        upgbuy2 = true;
        cst2.innerHTML = "cost: " + cost2;
        up.innerHTML = "ultra clickers: " + upg2;
        updac();
        if (check === false) {
            if (upgbuy2 === true) {
                
                setInterval(click, 1000);
                check = true;
            }
        }
    } else {
        alert(mtl+"\"ultra clicker\"!");
    }
}

function buyupgrade3() {
    if (e >= cost3) {
        upg3 = upg3 + 1;
        e = e - cost3;
        cost3 = cost3 + 500;
        clickval3 = clickval3 + 1;
        upgbuy3 = true;
        cst3.innerHTML = "cost: " + cost3;
        omgc.innerHTML = "hyper clickers: " + upg3;
        updac();
        if (check3 === false) {
            if (upgbuy3 === true) {
                setInterval(click3, 100);
                check3 = true;
            }
        }
    } else {
        alert(mtl + "\"hyper clicker\"!")
    }
}

function upgradeclick() {
    if (e >= cost4) {
        e = e - cost4;
        upg4 = upg4 + 1;
        buttonvalue = buttonvalue + 1;
        cost4 = cost4 + 25;
        updac();
        up4.innerHTML = "button upgrades: " + upg4;
        cst4.innerHTML = "cost: " + cost4;
    } else {
        alert(mtl + "button upgrade" + mtl2);
    }
}

function buyupgrade4() {
    if (e >= cost5) {
        e -= cost5;
        upg5 += 1;
        cost5 += 1000;
        upgbuy4 = true;
        clickval4 += 1;
        hype.innerText = "omega clickers: "+ upg5;
        cst5.innerText = "cost: " + cost5;
        updac();
        if (check4 === false) {
            if (upgbuy4 === true) {
                setInterval(click4, 10);
                check4 = true;
            }
        }
        
        
    } else {
        alert(mtl + "omega clicker" + mlt2);
    }
}

function buynuk() {
    if (e >= cost6) {
        e -= cost6;
        upg6 += 1;
        cost6 += 5000;
        upgbuy6 = true;
        clickval6 += 2;
        nukc.innerText = "nuclear clickers: " + upg6;
        cst6.innerText = "cost: " + cost6;
        updac();
        if (check6 === false) {
            if (upgbuy6 === true) {
                setInterval(click6, 0.1);
                check6 = true;
            }
        }
    } else {
        alert(mtl + "nuclear clicker" + mlt2)
    }
}

function buysnk() {
    if (e >= cost7) {
        e -= cost7;
        upg7 += 1;
        cost7 += 10000;
        upgbuy7 = true;
        clickval7 += 5;
        snkk.innerText = "Sonic clickers: " + upg7;
        cst7.innerText = "cost: " + cost7;
        updac();
        sonic.style.visibility = 'visible';
        if (check7 === false) {
            if (upgbuy7 === true) {
                setInterval(click7, 0.001);
                check7 = true;
            }
        }
    } else {
        alert(mtl + "Sonic clicker" + mlt2)
    }
}



function buyvroom() {
    if (e >= cost8) {
        e -= cost8;
        upg8 += 1;
        cost8 += 100000;
        upgbuy8 = true;
        clickval8 += 5;
        vroom.innerText = "Vroom Vroom clickers: " + upg8;
        cst8.innerText = "cost: " + cost8;
        updac();
        if (check8 === false) {
            if (upgbuy8 === true) {
                setInterval(click8, 0.0001);
                check8 = true;
            }
        }
    } else {
        alert(mtl + "Vroom Vroom clicker" + mlt2)
    }
}
