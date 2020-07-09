const CrawlingSourcesReducer = (CrawlingSources = [], Action) => {
	if (Action.type === 'CRAWLING_SOURCE_FETCHED') {
		return Action.payload;
	}
	return CrawlingSources;
};
const SelectedSourceReducer = (source, Action) => {
	if (Action.type === 'CRAWLING_SOURCE_SELECTED') {
		return Action.payload;
	}
	return source;
};
export { CrawlingSourcesReducer, SelectedSourceReducer };
export default {
	CrawlingSourcesReducer: CrawlingSourcesReducer,
	SelectedSourceReducer: SelectedSourceReducer,
};
