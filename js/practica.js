
// Inicio de la práctica usando javaScript

// Primera función que valida los datos a rellenar


function valDatosForm(){
	var email = document.getElementById("email").value;
	console.log ("email ",email);

	var alias = document.getElementById("alias").value;
	console.log("alias ",alias);

	var contraseña = document.getElementById("contraseña").value;
	console.log("contraseña ",contraseña);

	var repeticion = document.getElementById("repetir").value;
	console.log("repetir ",repeticion);

	var pregunta = document.getElementById("pregunta").value;
	console.log("pregunta ",pregunta);

	var respuesta = document.getElementById("respuesta").value;
	console.log("respuesta ",respuesta);


	saberPregunta();

	validarEmail(email);

	validarAlias(alias);

	validarRespuesta(respuesta);

	validarPassword(contraseña);

	validarPass(repetir);

	return false;
	
};



function mostrarError(paramErr) {

	if (paramErr == "avisoRespuesta")
		document.getElementById(paramErr).innerHTML = "La respuesta debe ser mayor de cuatro caracteres";

	if (paramErr == "avisoPassword")
		document.getElementById(paramErr).innerHTML = "La contraseña debe ser mayor de seis caracteres";

	if (paramErr == "avisoPass")
		document.getElementById(paramErr).innerHTML = "La repeticion debe ser mayor de seis caracteres";

	if (paramErr == "avisoAlias")
		document.getElementById(paramErr).innerHTML = "El alias debe ser mayor de cuatro caracteres";

	if (paramErr == "avisoEmail")
		document.getElementById(paramErr).innerHTML = "El email debe tener un @ y un punto";


};


function limpiarError(paramErr) {

	document.getElementById(paramErr).innerHTML = "";
}


function validarEmail(email){

	if (email != "ejemplo@hotmail.com"){

		mostrarError("avisoEmail");
		return false;
	}
	else {

		limpiarError("avisoEmail");
		return true;
	}


};



function validarAlias(alias){

	if (alias.length < 4){

		mostrarError("avisoAlias");
		return false;
	}
	else {

		limpiarError("avisoAlias");
		return true;
	}

};



function validarRespuesta(respuesta){

	if (respuesta.length < 4) {
		mostrarError("avisoRespuesta");
		return false;
	} 
	else {
		limpiarError("avisoRespuesta");
		return true;
	}

};


function validarPassword(contraseña){

	if(contraseña.length < 6){

		mostrarError("avisoPassword");
		return false;
	}

	else{
		limpiarError("avisoPassword");
		return true;
	}

};


function validarPass(repeticion){

	if(repeticion.length < 6){

		mostrarError("avisoPass");
		return false;
	}

	else{
		limpiarError("avisoPass");
		return true;
	}

};



// Fin de la función

// Inicio de la función del botón Enviar en la página, uno de los importantes

function habilitar(){
	var ele = document.getElementById("boton");
	var marcar = document.getElementById("casilla").checked;
	if(marcar) {
		ele.removeAttribute("disabled");
	}
	else{
		ele.setAttribute("disabled","disabled");
	}

};


// Fin de la función

// Inicio de la función que valida el email, para saber si lleva @ y un punto

// function validarEmail(email) {
// 	  var correos = "yahoo hotmail gmail";
// 	  var dominio = document.getElementById("email").value.split("@");
// 	  var server = dominio[1].split("."); 
// 	  var res = correos.match(server[0]);
   
//     if (document.getElementById("email").value.indexOf('@') == -1){
//      alert ("error no tiene arroba");
//      document.getElementById("email").focus();

//      return false; 
//    	}
   
//     else if (document.getElementById("email").value.indexOf('.') == -1){
//      	alert ("falta el punto");
//      	document.getElementById("email").focus();

//  		return true;
//  	}
 	 
// };



// Fin de la función

// Inicio de la función que valida la pregunta, en caso de no seleccionar saltará el mensaje



function saberPregunta(){

	var preg = document.getElementById("pregunta").value;

	if (preg == "Escoge pregunta"){

		alert("¿Has puesto pregunta?");
		return false;

	}


};

// Fin de la función

// Inicio de la función que valida la contraseña, si se falla salta el mensaje

function comprobarContrasena(){


    clave1 = document.getElementById("contraseña").value;
    clave2 = document.getElementById("repetir").value;

    if (clave1 != clave2){

       return false;
    }

};


// Fin de la función

// Fin de la práctica del día 16 de Febrero de 2018 utilizando javaScript