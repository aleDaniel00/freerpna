function obtID(str) {
    return document.getElementById(str);
}

function removeEvent(elemento, evento, funcion) {
    if (elemento.removeEventListener)
        elemento.removeEventListener(evento, funcion, false);
    if (elemento.detachEvent)
        elemento.detachEvent('on' + evento, funcion);
}

function addEvent(elemento, evento, funcion) {
    if (elemento.addEventListener) {
        elemento.addEventListener(evento, funcion);
    } else if (elemento.attachEvent) {
        elemento.attachEvent('on' + evento, funcion);
    }
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//otras funciones 
function c(str) { return console.log(str); }
//
function crear(str) { return document.createElement(str); }
//_______________________________________

var arrayLinks = obtID('listaLinks').getElementsByTagName('a');
var arraySpans = document.getElementById('listaLinks').getElementsByTagName('span');
var codigoTarj = document.getElementById('codigoTarj').getElementsByTagName('p')[0];
codigoTarj.style.display = 'none';

for (var i = 0; i < arrayLinks.length; i++) {

    arrayLinks[i].parentNode.getElementsByTagName('span')[0].style.display = 'none';

    addEvent(arrayLinks[i], 'click', function(event) {
        var link = this;
        link.parentNode.getElementsByTagName('span')[0].id = 'activo'
        var z = setTimeout(function() {
            link.style.display = 'none';
            link.parentNode.getElementsByTagName('span')[0].style.display = 'inline-block';
            if (document.getElementById('inactivo') === null) {
                codigoTarj.style.display = 'block';
            }
        });
        clearInterval(z)
    }, 2000);
    var listaLinks = document.getElementById('listaLinks');









}