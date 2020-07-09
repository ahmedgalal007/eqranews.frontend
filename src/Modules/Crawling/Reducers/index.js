import { combineReducers } from 'redux';
import { CrawlingSourceReducer } from './CrawlingSource';
import { CrawlingStepReducer } from './CrawlingStep';
import { CrawlingItemsReducer } from './CrawlingItem';

// export { CrawlingSourceReducer, CrawlingStepReducer, CrawlingItemsReducer };
export default combineReducers({
	CrawlingSources: CrawlingSourceReducer,
	CrawlingSteps: CrawlingStepReducer,
	CrawlingItems: CrawlingItemsReducer,
});
