const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const posts = document.getElementById("posts");


let formvalidation = () =>{
    if(input.value === "") {
        msg.innerHTML = "Post cannot blank";
        console.log("failer");
    }else {
        console.log("Success");
        msg.innerHTML= "";
        acceptData();
    }
};


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button cliked");
    formvalidation();
});

let data = {};
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);

    createPost();
};

let createPost = () => {
    posts.innerHTML += `
     <div>
        <p>${data.text}</p>
        <span class= "options">
            <i onClick = "editPost(this)" class=" fas fa-edit"></i>
            <i onClick = "deletPost(this)" class=" fas fa-trash-alt"></i>
        </span> 
    </div>
    `;
    input.value = "";
}

let deletPost = (e) =>{
e.parentElement.parentElement.remove();
}
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();

}