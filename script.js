var btn = document.getElementById("enviar");

var continuar = false;

btn.addEventListener("click", function(e){
    main();
    e.preventDefault();
    id_form.reset();
});



function main(){
    var value_text = document.getElementById("txt").value
    novo_label(value_text);

 }

 function novo_texto(value_text){
    var text = document.createTextNode(value_text);
    if(value_text.length > 0) continuar = true;
    else{
        alert("Digite algo");
        continuar = false;
    }
    return text;    
 }

 function novo_checkbox(value_text){
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "chk");
    checkbox.setAttribute("id", value_text);
    return checkbox;
 }

 function novo_label(value_text){
    var div = document.createElement("div");
    div.setAttribute("class", "marcar");
    var id_label = document.getElementById("novo_label");
    var label = document.createElement("label");
    label.setAttribute("for", value_text);

    label.appendChild(novo_texto(value_text));

    div.appendChild(novo_checkbox(value_text));
    div.appendChild(label);
    if(continuar)  id_label.appendChild(div);

    return id_label;
 }

