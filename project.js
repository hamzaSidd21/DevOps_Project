function search_project(){
    let input = document.getElementById('search_project').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('project');

    for(i=0; i<x.length ; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none";

        }
        else{
            x[i].style.display="list-item";
        }
    }
}