const locationsList = document.querySelector("#locations-list");
const mainBranchBtn = document.querySelector("#main-branch");
const otherBranchesBtn = document.querySelector("#other-branches");

mainBranchBtn.addEventListener("click", () => {
	const firstChild = locationsList.children[0];
	firstChild.classList.add("selected");
	[...locationsList.children]
		.slice(1)
		.forEach((item) => item.classList.remove("selected"));
});
otherBranchesBtn.addEventListener("click", () => {
	const firstChild = locationsList.children[0];
	firstChild.classList.remove("selected");
	[...locationsList.children]
		.slice(1)
		.forEach((item) => item.classList.add("selected"));
});
