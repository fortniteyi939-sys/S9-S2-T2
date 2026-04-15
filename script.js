const agregarTarea = () => {

    const input = document.getElementById('tarea');
    const textoTarea = input.value;
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = textoTarea;
    nuevaTarea.onclick = function() {
  
      this.remove();
  
    };

    document.getElementById('lista').appendChild(nuevaTarea);
    input.value = "";
  };

li.onclick = function() {
    this.remove();
}