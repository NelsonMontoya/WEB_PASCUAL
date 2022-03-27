let destinatario ;
let destinatarios= "L";
let email1 = 'nelson.benitez@udea.edu.co';
let email2 = 'maksilorak@gmail.com';
let emailOne = email1 !== null?true:false;
let emailTwo = email2 !== null ?true:false;
let isEmail = destinatarios ==="L"?true:false;

if(emailOne && !emailTwo){
    destinatario = email1;
}else if(!emailOne && emailTwo){
    destinatario = email2;
}else if(emailOne && emailTwo){
    destinatario= email1.concat(';',email2);
}
let totalDestinatarios;
if(isEmail){
    totalDestinatarios = destinatario;
}else{
    totalDestinatarios = destinatarios.concat(';',destinatario);
}
console.log(emailOne);
console.log(emailTwo);
console.log(totalDestinatarios);