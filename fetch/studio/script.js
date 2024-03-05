//TODO: Add Your Code Below
window.addEventListener("load", function() {
    const container = document.getElementById('container');
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(res){
        res.json().then((data){
            for(let i = 0; i < data.length; i++ ){
               let id = data[i];
               container.innerHTML +=`
               <div class="astronaut">
    <div class="bio">
        <h3> ${id.firstName} ${id.lastName} </h3>
        <ul>
        <li>Hours in space: ${id.hoursInSpace}</li>
        <li>Active: ${id.active}</li>
        <li>Skills: ${id.skills.join(", ")} </li>
        </ul>
    </div>
    <img class="avatar" src="${id.picture}">
</div>
               `;
            }
        });
    });
});