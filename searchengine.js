function search_spell() {
    var y = document.getElementsByClassName("outer_box");
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('spell_name');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            y[i].style.display="none";
        }
        else {
            x[i].style.display="block";
            y[i].style.display="block";
        }
    }
}
