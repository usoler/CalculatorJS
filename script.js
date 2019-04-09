window.onload = function(){ 
	screen = document.getElementById("screenText"); 
}

x = "0"; 	// number on screen saved.
xi = 1; 	// {0=no, 1=yes} inicialize number on screen.
coma = 0;	// {0=no, 1=yes} comma state.
ni = 0; 	// number on hold.
op = "no";	// operation on hold.

function number(xx) {
	if(x == "0" || xi == 1){
		if(xx == '.'){
			screen.innerHTML = "0.";
			x = "0.";
			comma = 1;
		}else{
			screen.innerHTML = xx;
			x = xx;
		}
	}else{
		if(xx != '.' || comma != 1){
			screen.innerHTML += xx;
			x += xx;
			if(xx == '.'){
				comma = 1;
			}
		}
	}

	xi = 0;
}

function operate(s){
	equalize();
	op = s;
	ni = x;
	xi = 1;
}

function equalize(){
	if(op != "no"){
		var sol = ni+op+x;
		sol = eval(sol);
		screen.innerHTML = sol;
		xi = 1;
		x = sol;
		op = "no";
	}
}

function squareRoot(){
	x = Math.sqrt(x);
	screen.innerHTML = x;
	op = "no";
	xi = 1;
}

function percentage(){
	x = x / 100;
	screen.innerHTML = x;
	equalize();
	xi = 1;
}

function opposite(){
	var number_x = parseInt(x, 10);
	number_x = -number_x;
	x = number_x.toString();
	screen.innerHTML = x;
}

function inverse(){
	var number_x = parseInt(x, 10);
	number_x = 1/x;
	x = number_x.toString();
	screen.innerHTML = x;
	xi = 1;
}

function back(){
	var numChars = x.length;
	var last_char = x.substr(numChars-1, numChars);
	x = x.substr(0, numChars-1);
	if(last_char == "."){
		comma = 0;
	}
	if(x == ""){
		x = "0";
	}
	screen.innerHTML = x;
}

function partialErasing(){
	x = "0";
	screen.innerHTML = x;
	comma = 0;
	xi = 1;

}

function totalErasing(){
	x = "0";
	screen.innerHTML = x;
	xi = 1;
	op = "no";
	ni = 0;
	comma = 0;
}