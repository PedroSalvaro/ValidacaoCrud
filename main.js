const fields = document.querySelectorAll("[required]");

function customValidation(event) {
  const field = event.target;
  //logica para verificar se existe erros
  function verifyErrors() {
    let foundError = false;

    // se nao for custom error
    // entao verifica se tem erro
    for (let error in field.validity) //interar sobre elementos do meu objeto for(in)
      if (error != "customError" && field.validity[error]) {
        foundError = error;
      }

    return foundError;
  }

  const error = verifyErrors();
  console.log("Error Exists", error);

  if (error) {
    // trocar mensage, de required
    field.setCustomValidity("Este campo é obrigatorio");
  } else {
    field.setCustomValidity("");
  }
}

for (let field of fields) {
  field.addEventListener("invalid", customValidation);
}


function getVal() {
  const cpf = document.querySelector('#cpf').value;
  console.log(cpf);

var isCPF = isCPF(cpf);	

function isCPF(cpf){
		console.log(cpf);
		cpf  = cpf.replace(/\.|-/g,"");
		console.log(cpf);
		if(!validaPrimeiroDigito(cpf))
		   return false;
		if(!validaSegundoDigito(cpf))
		   return false;

		return true;
			
	}
}
	var sum = 0;
	
	function validaPrimeiroDigito(cpf = null){
		let fDigit = (sumFristDigit(cpf) * 10) % 11;
		 	fDigit = (fDigit == 10 || fDigit == 11 ) ? 0 : fDigit; 
		if(fDigit != cpf[9])
			return false
    	return true;
	}
	function validaSegundoDigito(cpf = null){
		let sDigit = (sumSecondDigit(cpf) * 10) % 11;
	     	sDigit = (sDigit == 10 || sDigit == 11 ) ? 0 : sDigit;

		if(sDigit != cpf[10])
			return false
    	return true;
	}


	sumFristDigit = function(cpf, position=0, sum=0){
		if(position > 9)
			return 0;
		return sum + sumFristDigit(cpf,position+1,cpf[position] * ((cpf.length-1)-position));
	}

	
	sumSecondDigit = function(cpf, position=0, sum=0){
		if(position > 10)
			return 0;
		return sum + sumSecondDigit(cpf,position+1,cpf[position] * ((cpf.length)-position));
	}


// console.log(isCPF(cpf));