var topStr= "";
var nu= 0;
var oper= "";
function changeTop(id_checked){
	if(id_checked === "b"){
		topStr += "1";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "c"){
		topStr += "4";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "d"){
		topStr += "7";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "e"){
		topStr = "";
		nu = 0;
		oper = "";
		document.getElementById('output').innerHTML = "0";
	}else if(id_checked === "f"){
		topStr += "0";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "g"){
		topStr += "2";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "h"){
		topStr += "5";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "i"){
		topStr += "8";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "j"){
		topStr = "";
		nu = 0;
		oper = "";
		document.getElementById('output').innerHTML = "0";
	}else if(id_checked === "k"){
		topStr += ".";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "l"){
		topStr += "3";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "m"){
		topStr += "6";
		document.getElementById('output').innerHTML = topStr;
	}else if(id_checked === "n"){
		topStr += "9";
		document.getElementById('output').innerHTML = topStr;
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
			document.getElementById('output').innerHTML = nu;
			oper = "";
			topStr = "";
		} else if(oper === "-"){					
			nu -= Number(topStr);
			document.getElementById('output').innerHTML = nu;
			oper = "";
			topStr = "";					
		} else if(oper === "*"){			
			nu *= Number(topStr);
			document.getElementById('output').innerHTML = nu;
			oper = "";
			topStr = "";
		} else if(oper === "/") {
			nu /= Number(topStr);
			document.getElementById('output').innerHTML = nu;
			oper = "";
			topStr = "";
		}
	}					
}
