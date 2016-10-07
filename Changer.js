var topStr= "";
var nu= 0;
var oper= "";
function changeTop(id_checked){
	if(id_checked === "a"){
		if((oper = "=") && (topStr === "")){
			nu *= -1;
			oper = "";
			document.getElementById('output').innerHTML = nu;
		}else if((topStr === "") && (nu === 0)){
			document.getElementById('output').innerHTML = nu;
		}else if((topStr != "") && (nu === 0)){
			nu += Number(topStr);
			nu *= -1;
			document.getElementById('output').innerHTML = nu;
		}
		else{
			nu *= -1;
			document.getElementById('output').innerHTML = nu;
		}
	}else if(id_checked === "b"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "1";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "1";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "c"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "4";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "4";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "d"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "7";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "7";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "e"){
		topStr = "";
		nu = 0;
		oper = "";
		document.getElementById('output').innerHTML = "0";
	}else if(id_checked === "f"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "0";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "g"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "2";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "2";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "h"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "5";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "5";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "i"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "8";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "8";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "j"){
		topStr = "";
		nu = 0;
		oper = "";
		document.getElementById('output').innerHTML = "0";
	}else if(id_checked === "k"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += ".";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += ".";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "l"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "3";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "3";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "m"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "6";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "6";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "n"){
		if(oper === "="){
			nu = 0;
			oper = "";
			topStr += "9";
			document.getElementById('output').innerHTML = topStr;
		}else{
			topStr += "9";
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "o"){
		if((topStr.length === 1) || (topStr.length === 0)){
			topStr = "";
			document.getElementById('output').innerHTML = "0";
		} else{	
			topStr = topStr.slice(0, -1);
			document.getElementById('output').innerHTML = topStr;
		}
	}else if(id_checked === "q"){
		if((nu === 0) && (oper === "")){
			nu += Number(topStr);
			oper += "+";
			topStr = "";
			document.getElementById('output').innerHTML = "+";
		}else if((nu != 0) && (oper === "")){
			oper = "+";
			document.getElementById('output').innerHTML = "+";
		}else if(oper === "="){
			oper = "+";
			document.getElementById('output').innerHTML = "+";
		}else{
			if(oper === "+"){
				nu += Number(topStr);
				oper = "+";
				topStr = "";
				document.getElementById('output').innerHTML = "+";
			} else if(oper === "-"){
				nu -= Number(topStr);
				oper = "+";
				topStr = "";
				document.getElementById('output').innerHTML = "+";					
			} else if(oper === "*"){
				nu *= Number(topStr);
				oper = "+";
				topStr = "";
				document.getElementById('output').innerHTML = "+";
			} else if(oper === "/") {
				nu /= Number(topStr);
				oper = "+";
				topStr = "";
				document.getElementById('output').innerHTML = "+";
			}
		}
	}else if(id_checked === "r"){
		if((nu === 0) && (oper === "")){
			nu += Number(topStr);
			oper += "-";
			topStr = "";
			document.getElementById('output').innerHTML = "-";
		}else if((nu != 0) && (oper === "")){
			oper = "-";
			document.getElementById('output').innerHTML = "-";
		}else if(oper === "="){
			oper = "-";
			document.getElementById('output').innerHTML = "-";
		}else{
			if(oper === "+"){
				nu += Number(topStr);
				oper = "-";
				topStr = "";
				document.getElementById('output').innerHTML = "-";
			} else if(oper === "-"){
				nu -= Number(topStr);
				oper = "-";
				topStr = "";
				document.getElementById('output').innerHTML = "-";					
			} else if(oper === "*"){
				nu *= Number(topStr);
				oper = "-";
				topStr = "";
				document.getElementById('output').innerHTML = "-";
			} else if(oper === "/") {
				nu /= Number(topStr);
				oper = "-";
				topStr = "";
				document.getElementById('output').innerHTML = "-";
			}
		}
	}else if(id_checked === "s"){
		if((nu === 0) && (oper === "")){
			nu += Number(topStr);
			oper += "*";
			topStr = "";
			document.getElementById('output').innerHTML = "*";
		}else if((nu != 0) && (oper === "")){
			oper = "*";
			document.getElementById('output').innerHTML = "*";
		}else if(oper === "="){
			oper = "*";
			document.getElementById('output').innerHTML = "*";
		}else{
			if(oper === "+"){
				nu += Number(topStr);
				oper = "*";
				topStr = "";
				document.getElementById('output').innerHTML = "*";
			} else if(oper === "-"){
				nu -= Number(topStr);
				oper = "*";
				topStr = "";
				document.getElementById('output').innerHTML = "*";					
			} else if(oper === "*"){
				nu *= Number(topStr);
				oper = "*";
				topStr = "";
				document.getElementById('output').innerHTML = "*";
			} else if(oper === "/") {
				nu /= Number(topStr);
				oper = "*";
				topStr = "";
				document.getElementById('output').innerHTML = "*";
			}
		}
	}else if(id_checked === "t"){
		if((nu === 0) && (oper === "")){
			nu += Number(topStr);
			oper += "/";
			topStr = "";
			document.getElementById('output').innerHTML = "/";
		}else if((nu != 0) && (oper === "")){
			oper = "/";
			document.getElementById('output').innerHTML = "/";
		}else if(oper === "="){
			oper = "/";
			document.getElementById('output').innerHTML = "/";
		}else{
			if(oper === "+"){
				nu += Number(topStr);
				oper = "/";
				topStr = "";
				document.getElementById('output').innerHTML = "/";
			} else if(oper === "-"){
				nu -= Number(topStr);
				oper = "/";
				topStr = "";
				document.getElementById('output').innerHTML = "/";					
			} else if(oper === "*"){
				nu *= Number(topStr);
				oper = "/";
				topStr = "";
				document.getElementById('output').innerHTML = "/";
			} else if(oper === "/") {
				nu /= Number(topStr);
				oper = "/";
				topStr = "";
				document.getElementById('output').innerHTML = "/";
			}
		}
	}else if(id_checked === "equ") {
		if(oper === "+"){
			nu += Number(topStr);
			if(nu.toString().length > 15){
				document.getElementById('output').innerHTML = nu.toString().substr(0, 15);
				oper = "=";
				topStr = "";
			} else{
				document.getElementById('output').innerHTML = nu;
				oper = "=";
				topStr = "";
			}
		} else if(oper === "-"){
			nu -= Number(topStr);
			if(nu.toString().length > 15){
				document.getElementById('output').innerHTML = nu.toString().substr(0, 15);
				oper = "=";
				topStr = "";
			} else{
				document.getElementById('output').innerHTML = nu;
				oper = "=";
				topStr = "";
			}
		} else if(oper === "*"){			
			nu *= Number(topStr);
			if(nu.toString().length > 15){
				document.getElementById('output').innerHTML = nu.toString().substr(0, 15);
				oper = "=";
				topStr = "";
			} else{
				document.getElementById('output').innerHTML = nu;
				oper = "=";
				topStr = "";
			}
		} else if(oper === "/") {
			nu /= Number(topStr);
			if(nu.toString().length > 15){
				document.getElementById('output').innerHTML = nu.toString().substr(0, 15);
				oper = "=";
				topStr = "";
			} else{
				document.getElementById('output').innerHTML = nu;
				oper = "=";
				topStr = "";
			}
		}
	}					
}
