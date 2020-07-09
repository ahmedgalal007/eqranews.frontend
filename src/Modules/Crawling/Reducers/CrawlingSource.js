const CrawlingSourceReducer = CrawlingSource => {
	return {
		Type: 'CRAWLING_SOURCE_SELECTED',
		payload: CrawlingSource,
	};
};
export { CrawlingSourceReducer };
export default {
	CrawlingSourceReducer: CrawlingSourceReducer,
};
