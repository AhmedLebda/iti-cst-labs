import { getUsers, getUserDetails } from "./api/api.js";

renderUserNames();

// Renders buttons with user names
async function renderUserNames() {
	const usersData = await getUsers();

	const nav = document.createElement("nav");

	const nameButtons = createNameButtons(usersData);

	nameButtons.forEach((button) => {
		button.addEventListener("click", async () => {
			const userDetails = await getUserDetails(button.id);
			renderUserDetails(userDetails);
		});

		nav.appendChild(button);
	});

	document.body.appendChild(nav);
}

// Renders user details
function renderUserDetails(details) {
	// Delete previous user details
	if (document.body.lastElementChild.id === "userDetails") {
		document.body.lastElementChild.remove();
	}

	// Create new user details container and add details to it
	const userDetailsContainer = document.createElement("div");
	userDetailsContainer.id = "userDetails";
	userDetailsContainer.textContent = `User ID: ${details.id}, Name: ${details.name}, Email: ${details.email}`;
	document.body.appendChild(userDetailsContainer);
}

// Create buttons array with user names for all users
function createNameButtons(usersData) {
	return usersData.map((user) => {
		const button = document.createElement("button");
		button.textContent = user.name;
		button.id = user.id;
		return button;
	});
}
