 

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

	validarPregunta(pregunta);

	return false;
	
};

// Función que muestra el error

function mostrarError(paramErr) {

	if (paramErr == "avisoRespuesta")
		document.getElementById(paramErr).innerHTML = "La respuesta debe ser mayor de cuatro caracteres";

	if (paramErr == "avisoPregunta")
		document.getElementById(paramErr).innerHTML = "No ha seleccionado una pregunta";

	if (paramErr == "avisoPassword")
		document.getElementById(paramErr).innerHTML = "La contraseña debe ser mayor de seis caracteres";

	if (paramErr == "avisoAlias")
		document.getElementById(paramErr).innerHTML = "El alias debe ser mayor de cuatro caracteres";

	if (paramErr == "avisoEmail")
		document.getElementById(paramErr).innerHTML = "El email debe ser mayor de tres caracteres";

	if (paramErr == "avisoEmail@")
		document.getElementById(paramErr.substr(0,paramErr.length-1)).innerHTML = "El email debe tener una arroba (@)";

	if (paramErr == "avisoEmail.")
		document.getElementById(paramErr.substr(0,paramErr.length-1)).innerHTML = "El email debe tener un punto (.)";




};

// Función que valida limpiar el error en caso de fallar en el formulario

function limpiarError(paramErr) {

	document.getElementById(paramErr).innerHTML = "";
};

// Función que valida el email

function validarEmail(email){

	var dire = document.getElementById("email").value;

	if (dire.length > 3){
		if (dire.indexOf("@") > 0){
			if (dire.indexOf(".") > 2){
				limpiarError("avisoEmail");
				return true;
			}
			else{
				mostrarError("avisoEmail.");
			}
		}
		else{
			mostrarError("avisoEmail@");
		}
	}
	else{
		mostrarError("avisoEmail");
		
	}
};

// Función que valida el alias

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

// Función que valida la respuesta


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


// Función que valida la pregunta


function validarPregunta(pregunta){

	var lista = document.getElementById("pregunta");

	 var indiceSelect = lista.selectedIndex; 

	var valorPregunta = lista.options[indiceSelect].value;

	if (indiceSelect > 0){
		limpiarError("avisoPregunta");
		console.log("Pregunta ",valorPregunta);
		return true;
	}
	else {
		mostrarError("avisoPregunta");
		console.log("Pregunta ",valorPregunta);
		return false;
	}

};

// Función que valida la contraseña

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

// Función del botón Enviar en la página, uno de los importantes

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


// Función que valida saber pregunta


function saberPregunta(){

	var preg = document.getElementById("pregunta").value;

	if (preg == "Escoge pregunta"){

		// alert("¿Has puesto pregunta?");
		return false;

	}


};


// Función que valida la contraseña, si se falla salta el mensaje

function comprobarContrasena(){


    clave1 = document.getElementById("contraseña").value;
    clave2 = document.getElementById("repetir").value;

    if (clave1 != clave2){

       return false;
    }

};