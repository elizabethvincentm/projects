function handleClick(event) {
  console.log(event);

  let activeIcon = document.getElementById(event + "-icon");
  let curIcon = document.querySelector(".active-link");
  curIcon.classList.remove("active-link");
  console.log(curIcon);
  activeIcon.classList.add("active-link");

  let current = document.getElementsByClassName("active");
  let next = document.getElementById(event);
  current[0].className = current[0].className.replace("active", "hidden");
  next.className = next.className.replace("hidden", "active");
}
