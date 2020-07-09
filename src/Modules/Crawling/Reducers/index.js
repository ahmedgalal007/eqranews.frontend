import { combineReducers } from 'redux';

import { CrawlingSourceReducer, SelectedSourceReducer } from './CrawlingSource';
import { CrawlingStepReducer, SelectedStepReducer } from './CrawlingStep';
import { CrawlingItemsReducer, SelectedItemReducer } from './CrawlingItem';

// export { CrawlingSourceReducer, CrawlingStepReducer, CrawlingItemsReducer };
export default combineReducers({
	CrawlingSources: CrawlingSourceReducer,
	SelectedSource: SelectedSourceReducer,
	CrawlingSteps: CrawlingStepReducer,
	SelectedStep: SelectedStepReducer,
	CrawlingItems: CrawlingItemsReducer,
	SelectedItem: SelectedItemReducer,
});
