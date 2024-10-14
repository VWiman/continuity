// Load and save state from and to localstorage
export const loadState = (key) => {
	try {
		const stateLoaded = localStorage.getItem(key);
		if (stateLoaded) {
			const parsedState = JSON.parse(stateLoaded);
			return parsedState;
		} else {
			return undefined;
		}
	} catch (err) {
		console.error("Could not load state", err);
		return undefined;
	}
};

export const saveState = (key, state) => {
	try {
		const stringState = JSON.stringify(state);
		localStorage.setItem(key, stringState);
	} catch (err) {
		console.error("Could not save state", err);
	}
};
