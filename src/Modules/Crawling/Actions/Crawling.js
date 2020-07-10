const fetchCrawlingSources = CrawlingSources => {
	return {
		type: 'CRAWLING_SOURCE_FETCHED',
		payload: CrawlingSources,
	};
};

export { fetchCrawlingSources };

export default {
	fetchCrawlingSources: fetchCrawlingSources,
};
