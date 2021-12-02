const fields = document.querySelectorAll("[required]")

function customValidation(event) {
  const field = event.target
  //logica para verificar se existe erros
  function verifyErrors() {
    let foundError = false;

    // se nao for custom error
    // entao verifica se tem erro
    for (let error in field.validity) //interar sobre elementos do meu objeto for(in)
      if (error != "customError" && field.validity[error]) {
        foundError = error
      }

    return foundError;
  }
  
  const error = verifyErrors();
  console.log("Error Exists", error)
  
  if (error) {
      // trocar mensage, de required
      field.setCustomValidity("Este campo é obrigatorio");
    } else {
        field.setCustomValidity("")
    }
    
}


 for (let field of fields) {
    field.addEventListener("invalid", customValidation);
 }

//  document.querySelector("form").addEventListener("submit", (event) => {
//    console.log("enviar o formulario");
//  });





















