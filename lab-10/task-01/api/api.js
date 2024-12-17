const baseURL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers() {
	try {
		const response = await fetch(baseURL);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error:", error);
	}
}

export async function getUserDetails(userId) {
	try {
		const response = await fetch(`${baseURL}/${userId}`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const userData = await response.json();
		return userData;
	} catch (error) {
		console.log("Error:", error);
	}
}
