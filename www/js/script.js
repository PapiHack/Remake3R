function ajouter() {
    var vl = parseInt(document.getElementById('vl').textContent)
    document.getElementById('vl').innerHTML = vl +1   
}

function min(){
     var val = parseInt(document.getElementById('vl').textContent)
   document.getElementById('vl').innerHTML = val - 1
   if(val == 0){
       document.getElementById('vl').innerHTML = 0
   }
}

function aug() {
    var vl = parseInt(document.getElementById('v').textContent)
    document.getElementById('v').innerHTML = vl +1   
}

function mini(){
     var val = parseInt(document.getElementById('v').textContent)
   document.getElementById('v').innerHTML = val - 1
   if(val == 0){
       document.getElementById('v').innerHTML = 0
   }
}

function maxi() {
    var vl = parseInt(document.getElementById('vle').textContent)
    document.getElementById('vle').innerHTML = vl +1   
}

function minim(){
     var val = parseInt(document.getElementById('vle').textContent)
   document.getElementById('vle').innerHTML = val - 1
   if(val == 0){
       document.getElementById('vle').innerHTML = 0
   }
}

function maximize() {
    var vl = parseInt(document.getElementById('vale').textContent)
    document.getElementById('vale').innerHTML = vl +1   
}

function minimize(){
     var val = parseInt(document.getElementById('vale').textContent)
   document.getElementById('vale').innerHTML = val - 1
   if(val == 0){
       document.getElementById('vale').innerHTML = 0
   }
}