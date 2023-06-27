document.addEventListener('DOMContentLoaded',() => {
const userList=document.getElementById('user-list');
const repoList=document.getElementById('repos-list');

const form=document.getElementById('github-form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let userName = e.target.search.value;
  });


});    