let i = 0;
function duplicate(id) {
    let clone = document.getElementById(id).cloneNode(true); // "deep" clone
    i = i + 1; 
    clone.id = id + i; // there can only be one element with an ID
    document.getElementById(id).parentNode.appendChild(clone);
    $('#counter').val(i+1);
}