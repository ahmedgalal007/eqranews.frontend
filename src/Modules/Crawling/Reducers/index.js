import { combineReducers } from 'redux';

import {
	CrawlingSourcesReducer,
	SelectedSourceReducer,
} from './CrawlingSource';
import { CrawlingStepsReducer, SelectedStepReducer } from './CrawlingStep';
import { CrawlingItemsReducer, SelectedItemReducer } from './CrawlingItem';

// export { CrawlingSourceReducer, CrawlingStepReducer, CrawlingItemsReducer };
export default combineReducers({
	CrawlingSources: CrawlingSourcesReducer,
	SelectedSource: SelectedSourceReducer,
	CrawlingSteps: CrawlingStepsReducer,
	SelectedStep: SelectedStepReducer,
	CrawlingItems: CrawlingItemsReducer,
	SelectedItem: SelectedItemReducer,
});
