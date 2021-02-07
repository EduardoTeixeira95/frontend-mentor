function botao(){
    let email = document.getElementById("email").value;
    if (email.includes('@')) { 
  }
  else{
    document.getElementById("mensagem").innerHTML = 'Please provide a valid email address';
  }
  }