const inputValue = document.querySelector("#search");
const SearchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");

const client_id = "4b4608bad3f71a5c485c";
const client_secret = "b4af5b6a538e98711e61f67322618b795d07d80e";



const fetchUsers = async (user) =>{
    const api_call= await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return {data}
}

const showData = () =>{

    fetchUsers(inputValue.value).then((res)=>{
        console.log(res);

        nameContainer.innerHTML = `Name : <span class="main__profile-value">${res.data.name}</span>`;

        unContainer.innerHTML = `username: <span class="main__profile-value">${res.data.login}</span>`;

        reposContainer.innerHTML = `Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;

        
 })
}


SearchButton.addEventListener("click", () => {
    showData();
})
