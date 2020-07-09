const CrawlingItemsReducer = (CrawlingItems = [], Action) => {
	if (Action.type === 'CRAWLING_ITEM_FETCHED') {
		return Action.payload;
	}
	return CrawlingItems;
};
const SelectedItemReducer = (item, Action) => {
	if (Action.type === 'CRAWLING_ITEM_SELECTED') {
		return Action.payload;
	}
	return item;
};
export { CrawlingItemsReducer };
export default {
	CrawlingItems: CrawlingItemsReducer,
	SelectedItem: SelectedItemReducer,
};
