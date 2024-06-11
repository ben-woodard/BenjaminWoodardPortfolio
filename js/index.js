imgElement = document.getElementById("github-img");
introElement = document.getElementById("github-intro");
fetchGitHubUserInfo();

async function fetchGitHubUserInfo() {
  try {
    const response = await fetch(`https://api.github.com/users/ben-woodard`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userInfo = await response.json();
    console.log(userInfo);

    //Add github image to page
    const profileImg = document.createElement("img");
    profileImg.src = userInfo.avatar_url;
    profileImg.alt = `${userInfo.login}'s avatar`;
    imgElement.appendChild(profileImg);
    //Add intro to page
    const githubIntro = document.createElement("h3");
    githubIntro.innerHTML = userInfo.bio;
    introElement.appendChild(githubIntro);
    
   

    return userInfo;
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
}