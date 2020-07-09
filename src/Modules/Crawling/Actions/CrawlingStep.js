const fetchCrawlingSteps = CrawlingSteps => {
	return {
		Type: 'CRAWLING_STEP_FETCHED',
		payload: CrawlingSteps,
	};
};

const selectCrawlingStep = CrawlingStep => {
	return {
		Type: 'CRAWLING_STEP_SELECTED',
		payload: CrawlingStep,
	};
};

const addCrawlingStep = CrawlingStep => {
	return {
		Type: 'CRAWLING_STEP_ADDED',
		payload: CrawlingStep,
	};
};

const updateCrawlingStep = CrawlingStep => {
	return {
		Type: 'CRAWLING_STEP_UPDATED',
		payload: CrawlingStep,
	};
};

const deleteCrawlingStep = CrawlingStep => {
	return {
		Type: 'CRAWLING_STEP_DELETED',
		payload: CrawlingStep,
	};
};
export {
	fetchCrawlingSteps,
	selectCrawlingStep,
	addCrawlingStep,
	updateCrawlingStep,
	deleteCrawlingStep,
};
export default {
	fetchCrawlingSteps: fetchCrawlingSteps,
	selectCrawlingStep: selectCrawlingStep,
	addCrawlingStep: addCrawlingStep,
	updateCrawlingStep: updateCrawlingStep,
	deleteCrawlingStep: deleteCrawlingStep,
};
