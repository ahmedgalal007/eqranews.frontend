import React from 'react';
import clsCrawling from '../../../Models/Crawling/clsCrawling';
// import axios from 'axios';
import CrawlingSource from './CrawlingSource';

export default class Crawling extends React.Component {
	constructor(props) {
		super(props);
		this.state = { Data: [] };
		//this.items.push(<CrawlingSource></CrawlingSource>);
	}

	componentDidMount() {
		fetch('Data/CrawlingSources.json')
			.then(res => res.json())
			.then(data => {
				this.setState({ Data: data });
				// console.log('Data:', data);
			});
	}

	render() {
		return (
			<div className="Crawling">
				<div>Crawling Component</div>
				{this.state.Data.map((el, i) => (
					<CrawlingSource
						key={'Source_' + i}
						Source={new clsCrawling.clsCrawlingSource(el)}
						className="crawling-source"
					/>
				))}
			</div>
		);
	}
}
