function handleClick(event) {
  console.log(event);

  let current = document.getElementsByClassName("content-active");
  let next = document.getElementById(event);
  current[0].className = current[0].className.replace(
    "content-active",
    "content-hidden"
  );
  next.className = next.className.replace("content-hidden", "content-active");
}
