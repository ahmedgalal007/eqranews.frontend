const selectCrawlingSource = CrawlingSource => {
	return {
		type: 'CRAWLING_SOURCE_SELECTED',
		payload: CrawlingSource,
	};
};
export { selectCrawlingSource };
export default {
	selectCrawlingSource: selectCrawlingSource,
};
