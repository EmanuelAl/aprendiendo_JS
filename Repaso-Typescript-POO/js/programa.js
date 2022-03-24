var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Clase Padre */
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getnombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
/* Clase Hija */
//con extends NombreClasePAdre indicamos que la clase va a heredar de la clase padre indicada
var EdithVideo = /** @class */ (function (_super) {
    __extends(EdithVideo, _super);
    function EdithVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EdithVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    EdithVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EdithVideo.prototype.getAllData = function () {
        return this.getnombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    };
    return EdithVideo;
}(Programa));
var editor = new EdithVideo();
editor.setNombre('Cantasia Studio');
editor.setVersion(1);
editor.setTimeline(4000);
console.log(editor.getAllData());
/* logica del formulario */
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);
    /* para listarlos : */
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = "".concat(list, " <li> ").concat(programas[i].getnombre(), " </li>");
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    //para borrar el campo input y quede limpio, despues de presionar boton guardar:
    document.getElementById("nombre").value = "";
    /* equivalente para listar:
        for(let i = 0 ;i < programas.length; i++){
            var itemLista = document.createElement('li');
            list = programas[i].getnombre();
            itemLista.append(list);
        }
        let listado = document.querySelector("#listado");
        listado.append(itemLista);
    */
}
