const fetchCrawlingSources = CrawlingSources => {
	return {
		Type: 'CRAWLING_SOURCE_FETCHED',
		payload: CrawlingSources,
	};
};
const selectCrawlingSource = CrawlingSource => {
	return {
		Type: 'CRAWLING_SOURCE_SELECTED',
		payload: CrawlingSource,
	};
};
export { fetchCrawlingSources, selectCrawlingSource };
export default {
	fetchCrawlingSources: fetchCrawlingSources,
	selectCrawlingSource: selectCrawlingSource,
};
