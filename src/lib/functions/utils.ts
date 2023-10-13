/**
 * @description Dispatch event on click outside of node
 * @example <div use:clickOutside on:click_outside={handleClickOutside}>
 *
 * @param {HTMLElement} node
 *
 * @returns {object} destroy
 */
export function clickOutside(node: HTMLElement, handler: () => void): { destroy: () => void } {
	const onClick = (event: MouseEvent) =>
		node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented && handler();
	document.addEventListener('click', onClick, true);
	return {
		destroy() {
			document.removeEventListener('click', onClick, true);
		}
	};
}

/**
 * @description format datetime to dd.mm.yyyy hh:mm
 *
 * @param {string} datetime
 *
 * @returns {string} dd.mm.yyyy hh:mm
 *
 */
export function formatDatetime(datetime: string, locale = 'en-US') {
	console.log('datetime', datetime);
	const d = new Date(datetime).toLocaleDateString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	console.log('d', d);
	// const year = d.getFullYear();
	// const month = ('0' + (d.getMonth() + 1)).slice(-2);
	// const day = ('0' + d.getDate()).slice(-2);
	// const hour = ('0' + d.getHours()).slice(-2);
	// const minute = ('0' + d.getMinutes()).slice(-2);
	// return `${day}.${month}.${year} ${hour}:${minute}`;
}

/**
 *
 * @description format date to dd.mm.yyyy
 * @param {string} date
 * @param {string} locale
 *
 * @returns {string} dd.mm.yyyy
 */
export function formatDate(date: string, locale = 'en-US') {
	return new Date(date).toLocaleDateString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

/**
 *
 *
 *
 *
 *
 *
 */
// --------------------------------
// utility functions
// --------------------------------

export function getFileNames(files: Record<string, unknown>): string[] {
	const slugs = Object.entries(files);
	return slugs.map(([path]) => {
		const filename = path.split('/').pop();
		if (!filename) return '';
		const slug = filename.slice(0, -3);
		return slug;
	});
}

export function getFileName(path: string) {
	const filename = path.split('/').pop();
	if (!filename) return;
	const slug = filename.slice(0, -3);
	return slug;
}
// export function getParentFolderNames(files: Record<string, unknown>): string[] {
// 	const fileNames = Object.entries(files);
// 	if (!fileNames) return [];
// 	return fileNames.map(([path]) => {
// 		return path.split('/').at(-2);
// 	});
// }

export function getParentFolderName(path: string) {
	const parentFilename = path.split('/').at(-2);
	return parentFilename;
}

export function titleToSlug(title: string) {
	return title.replace(/\s+/g, '-').toLowerCase();
}
