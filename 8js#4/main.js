document.addEventListener("DOMContentLoaded", async () => {
  const containerEL = document.querySelector("#container");

  // for (i = 0; i <= 5; i++) {
    const data = await fetch("https://picsum.photos/v2/list", {//"https://randomuser.me/api/"
      method: "GET",
    });

    let innerContainerHTML = ``;
    const json = await data.json();
    console.log(json);

    json.forEach(({download_url, url, author}) => {
      innerContainerHTML += `
      <div>
        <img width="50%" src="${download_url}"/>
        <a href="${url}">${author}</span>
      </div>
      `;
    });

    containerEL.innerHTML = innerContainerHTML;
  // }
});
