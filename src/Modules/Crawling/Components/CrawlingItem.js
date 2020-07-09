import React from 'react';
import clsCrawling from '../../../Models/Crawling/clsCrawling';
export default class CrawlingItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { item: new clsCrawling.clsCrawlingItem(props.CrawlItem) };
	}

	componentDidMount() {}

	render() {
		return (
			<div className="crawling-item">
				Crawling item
				<br />
				{this.state.item.Name}
				<br />
				{this.state.item.Selector}
				<br />
				{this.state.item.Attr}
				<br />
				{this.state.item.Value}
				<br />
			</div>
		);
	}
}
