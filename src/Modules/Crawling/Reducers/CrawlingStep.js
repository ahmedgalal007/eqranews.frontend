const CrawlingStepReducer = CrawlingStep => {
	return {
		Type: 'CRAWLING_STEP_SELECTED',
		payload: CrawlingStep,
	};
};
export { CrawlingStepReducer };
export default {
	CrawlingStepReducer: CrawlingStepReducer,
};
