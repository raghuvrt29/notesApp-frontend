let form1=document.querySelector("#newNote");
let items=document.getElementById("notes");
form1.addEventListener("submit",addNote);
let evt=null;
let form2=document.querySelector("#openNote");
form2.addEventListener("click",displayNote);

let submit=document.getElementById("submit");

function addNote(e){
    e.preventDefault();

    if(submit.value!="submit"){
        evt.childNodes[0].innerHTML=document.getElementById("title").value;
        evt.childNodes[1].innerHTML=document.getElementById("content").value;
        document.getElementById("title").value="";
        document.getElementById("content").value="";
        evt=null;
        submit.value="submit";
    }
    else{
        let delbtn=document.createElement("button");
        let newNote=document.createElement("li");
        let title=document.createElement("button");
        let content=document.createElement("p");
        
        title.classList.add("display");

        console.log(document.getElementById("title").value);
        title.innerHTML=document.getElementById("title").value;
        content.innerHTML=document.getElementById("content").value;
        delbtn.innerHTML="delete";
        delbtn.className="del";

        newNote.appendChild(title);
        newNote.appendChild(content);
        newNote.appendChild(delbtn);
        items.appendChild(newNote);

        document.getElementById("title").value="";
        document.getElementById("content").value="";

        content.style.display="none";
    }
}

function displayNote(e){
    e.preventDefault();

    let note=e.target.parentNode;
    
    if(e.target.classList.contains("new")){
        submit.value="submit";
        document.getElementById("title").value="";
        document.getElementById("content").value="";
        evt=null;
    }
    else if(e.target.classList.contains("del")){
        if(confirm("Are you sure?"))
        items.removeChild(note);
        document.getElementById("title").value="";
        document.getElementById("content").value="";
    }
    else{
        evt=note;
        document.getElementById("title").value=note.childNodes[0].innerHTML;
        document.getElementById("content").value=note.childNodes[1].innerHTML;
        submit.value="edit";
    }
}