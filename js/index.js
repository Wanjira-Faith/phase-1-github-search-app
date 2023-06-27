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

      if(data.items && data.items.length > 0){
        data.items.forEach(user => {
  
          let h5=document.createElement('h5')  
          h5.textContent=user.login;
    
          let img=document.createElement('img')  
          img.src=user.avatar_url
          img.width=150;
    
          let link=document.createElement('a')
          link.href= user.html_url;
          link.textContent = 'link to Profile';

          //Add event listener to display repos for the selected user
      h5.addEventListener('click',()=> {


        //make a fetch request with the returned value
        //display the returned results on the DOM
        fetch(`https://api.github.com/users/${user.login}/repos`,{
        headers: {
          "Accept":" application/vnd.github.v3+json" 
       }
     })
        .then(res=>res.json())
        .then(repos => {
           repoList.innerHTML = '';//clear previous repositories 
            repos.forEach(repo =>{
                let repository=document.createElement('li');
                repository.innerText=`${repo.name}`
                repoList.appendChild(repository);
            });    
      })
      .catch(error => {
        console.error('Error:',error);
        repoList.innerHTML = 'Error occurred while fetching repositories.';
    });
  });
  userList.appendChild(h5);
  userList.appendChild(img);
  userList.appendChild(link);
});
}

else{
  userList.innerHTML = 'No users found';
}
})
.catch(error => {
  console.error('Error:' ,error);
  userList.innerHTML = "Error occurred while fetching users."  
   }); 
 });
});     