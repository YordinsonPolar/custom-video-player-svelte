
export const saveItemOnLocalStorage = (storage, item) => {
	localStorage.setItem(storage, JSON.stringify(item))
}

export const getItemOnLocalStorage = (storage) => {
	return JSON.parse(localStorage.getItem(storage))
}

export const currentVideoTimeAlreadyExist = (item,videoId) => {
	const idx = item.findIndex((vid) => vid.id === videoId);
	return idx;
}

export const clearVideoTime = (id) => {
	const videos = getItemOnLocalStorage('videos') || [];
	if (videos.length) {
		const filterVideos = videos.filter((vid) => vid.id !== id);
		saveItemOnLocalStorage('videos', filterVideos);
	}
}