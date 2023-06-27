document.addEventListener('DOMContentLoaded',() => {
const userList=document.getElementById('user-list');
const repoList=document.getElementById('repos-list');

const form=document.getElementById('github-form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let userName = e.target.search.value;

    fetch(`https://api.github.com/search/users?q=${userName}`,{
      headers:{
         "Accept": "application/vnd.github.v3+json "
      }
    })
    .then(res=>res.json())
    .then(data => {
      userList.innerHTML = ''; //clear previous data of the user

  });


});    