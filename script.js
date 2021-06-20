document.getElementById('getText').addEventListener('click', getTask);
document.getElementById('getUsers').addEventListener('click',getUser);
document.getElementById('getposts').addEventListener('click',getposts);
document.getElementById('addpost').addEventListener('submit',addpost);

//fetch data from a file
function getTask(){
   /*fetch('sample.txt')
   .then(function(res){
       return(res.text());
   })
   .then(function(data){
       console.log(data);
   })*/
   fetch('sample.txt')
   .then(res=>res.text())
   .then(data=>
   (document.getElementById('container').innerHTML=data))
}
//fetch JSON of a documnet
function getUser(){
    fetch('users.json')
    .then((res)=>res.json())
    .then((data)=>{
        let output='<h3> USERS</h3>'
        data.forEach(user =>{
            output+=`
            <ul class="list-group mb-3">
                <li class="list-group-item">"id:"${user.id}</li>
                <li class="list-group-item">"name:"${user.name}</li>
                <li class="list-group-item">"email:"${user.email}</li>
            </ul>
            `;
        })
    document.getElementById('container').innerHTML=output;
    });
    
}
//fetch api of another website
function getposts(){ 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=>{
        let output='<h3 class="sshu">POSTS</h3>'
        data.forEach(posts =>{
            output+=`
            <div class=" card card-body mb-3">
              <h3>${posts.title}</h3>
              <p>${posts.body}</p>
            </div>
            `;
        })
    document.getElementById('container').innerHTML=output;
    });
    
}
//add data to API
function addpost(e){
    e.preventDefault();

    let title=document.getElementById('title').value;
    let body=document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            "accept":"application/json,text/plain */*",
            "content-type":"application/json"
        },
        body:JSON.stringify({title:title , body:body})
    })
    .then(res=>res.json())
    .then(data=>console.log(data));

}
