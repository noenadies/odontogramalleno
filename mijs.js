/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */


console.log(window.innerWidth+"     "+window.innerHeight);

var config = {
    apiKey: "AIzaSyDDeEsPxBYxzisg4GDOpmYbHBLvIw6L_IY",
    authDomain: "mejorvargaslleras-4fd2e.firebaseapp.com",
    databaseURL: "https://mejorvargaslleras-4fd2e.firebaseio.com",
    projectId: "mejorvargaslleras-4fd2e",
    storageBucket: "mejorvargaslleras-4fd2e.appspot.com",
    messagingSenderId: "912759721594"
  };
  firebase.initializeApp(config);



  function traeunavesfirebaseuser(){
  /*  firebase.database().ref().child("usuarios").on("value", function(snapshot) {

      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
*/
  }

// todo login odontologia
  //traeunavesfirebaseuser();







  escuchamensajetextfire();

  var  elmensaje="";
var cualmensaje="";

  function enviarmensajestext(){
cualmensaje=document.getElementById("idinputmensjetext").value;

firebase.database().ref().child("enviarmensaje").set(cualmensaje);

escuchamensajetextfire();


  }



  function escuchamensajetextfire(){
    firebase.database().ref().child("enviarmensaje").once("value", function(snapshot) {
        todoiniciadenuevologin();
        elmensaje=snapshot.val();
   document.getElementById("idpmensjatext").innerHTML="el mensaje es : "+elmensaje;
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

  }








var estoylogeado=false;
var vuserloginp="";
var vpassloginp="";
var soyloginodontologo=false;




function todoiniciadenuevologin(){

    nodeuserodontologo=[];
    vpassloginp="";
    vuserloginp="";
}

var nodeuserodontologo=[];
  function traenodeuserodontologo(){
    firebase.database().ref().child("userodontologo").once("value", function(snapshot) {
        todoiniciadenuevologin();
        nodeuserodontologo=snapshot.val();
     
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

  }


  traenodeuserodontologo();





function onfloginp(){
    vpassloginp=document.getElementById("idpassloginp").value;
    vuserloginp=document.getElementById("iduserloginp").value;
    
    for(var i in nodeuserodontologo){
if(nodeuserodontologo[i].pass==vpassloginp&&nodeuserodontologo[i].user==vuserloginp){

    estoylogeado=true;
    soyloginodontologo=true;
document.getElementById("idpanellogin").style.display="none";

document.getElementById("idh1principalmenu").innerHTML="ODONTOLOGO";

        
}
else{
  
}
    }

    
    for(var i in nodeuseruser){
        if(nodeuseruser[i].pass==vpassloginp&&nodeuseruser[i].user==vuserloginp){
        
            estoylogeado=true;
            soyunuseruser=true;
        document.getElementById("idpanellogin").style.display="none";
  
        document.getElementById("idh1principalmenu").innerHTML="USUARIO";

        
        }
        else{
          
        }
            }





}


setInterval(function (){
if(document.getElementById("idpanellogin").style.display=="none"){  if(!estoylogeado){window.location="https://www.google.com/"}}
},1000);

// fin  todo login odontologia





// todo lo de usuarios
traenodeuseruser();

function todoinciiouseruser(){
    nodeuseruser=[];

}
var nodeuseruser=[];
var soyunuseruser=false;


function traenodeuseruser(){
    firebase.database().ref().child("usuarios").once("value", function(snapshot) {

        todoinciiouseruser();
   
        nodeuseruser=snapshot.val();
    
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

  }





// fin  todo lo de usuarios











var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}



var vw=window.innerWidth;
var vh= window.innerHeight;

console.log(vw +" "+vh);


function  mostrardiv(st){


    document.getElementById(st).style.display="block";
}


function  ocultardiv(st){


    document.getElementById(st).style.display="none";
}


function fcontactos(){



    ocultardiv("idpanelnievcliente");
    ocultardiv("idpaneldirectoriopacientes");


}


function iranuevocliente(){
if(soyunuseruser&&estoylogeado){
    mostrardiv("idpanelnievcliente");
    ocultardiv("idpaneldirectoriopacientes");

}

   
}


ocultardiv("idpanelnievcliente");


var razonsocial="";var rfc="";var nit="";var domiciliofiscal="";
var email="";var telefono1="";var telefono2="";var celular="";var fax="";var listadeprecios="";var vendedor="";var terminosdepago="";

// solo firebase


var  nuevousuario;
nuevousuario={razonsocial:"",rfc:"",nit:"",domiciliofiscal:"",
email:"",telefono1:"",telefono2:"",celular:"",fax:"",listadeprecios:"",vendedor:"",terminosdepago:""}

function crearnuevousuario(){
    firebase.database().ref().child("usuarios").push(nuevousuario);
}













// todo  directorio de pacientes

ocultardiv("idpaneldirectoriopacientes");






function iradirectoriopacientes(){
 ocultardiv("idpanelnievcliente");
mostrardiv("idpaneldirectoriopacientes");
   
   
}














// odontorgrmaa ir  inicia
function odontogramair(){
if(estoylogeado&&soyloginodontologo){
    window.location="./odontogramamenu/odontograma.html";
}

}

//   fin dodontrograma  


function abreidmarketing(){
    document.getElementById("idmarketing").style.display="block";

} document.getElementById("idmarketing").style.display="none";


var telefononuevo="";

function  subeafirebasertelefono(){
    telefononuevo=String(document.getElementById("idtelefononuecliete").value);

    firebase.database().ref().child("telefonos").push(telefononuevo)
}