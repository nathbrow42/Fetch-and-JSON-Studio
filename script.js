// TODO: add code here
window.addEventListener("load", function () {
  this.fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let astronautList = "";
      let container = document.querySelector("#container");
      console.log(container);

      for (astro of json) {
        astronautList += `
            <div class="astronaut">
            <div class="bio">
            <h3>${astro.firstName} ${astro.lastName}</h3>
            <ul>
                <li>Hours in space: ${astro.hoursInSpace}</li>
                <li>Active: ${astro.active}</li>
                <li>Skills: ${astro.skills.join(", ")}</li>
            </ul>
            </div>
            <img class="avatar" src=${astro.picture}>
        </div>
        `;
      }
      container.innerHTML = astronautList;
    });
});
