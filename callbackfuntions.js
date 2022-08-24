function welcome(callback){

  var name = document.getElementById("name").value;

  callback(name);

}

function wish(name){

  alert('Hi' + ' ' + name);

}