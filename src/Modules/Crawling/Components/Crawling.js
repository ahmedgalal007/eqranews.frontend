import React from 'react';
import { connect } from 'react-redux';
// import clsCrawling from '../../../Models/Crawling/clsCrawling';
// import axios from 'axios';
import { fetchCrawlingSources } from '../Actions/Crawling';

class Crawling extends React.Component {
	componentDidMount() {
		fetch('Data/CrawlingSources.json')
			.then(res => res.json())
			.then(data => {
				this.props.fetchCrawlingSources(data);
			});
	}

	renderSourceList() {
		console.log('Maped State:', this.props.sources);
		return this.props.sources.map(Source => {
			return (
				<div className="sources">
					<div>{Source.Name}</div>
					{
						// 	<CrawlingSource
						// 		key={'Source_' + i}
						// 		Source={new clsCrawling.clsCrawlingSource(el)}
						// 		className="crawling-source"
						// 	/>
					}
				</div>
			);
		});
	}

	render() {
		return (
			<div className="Crawling">
				<div>Crawling Component</div>
				{this.renderSourceList()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { sources: state.CrawlingSources };
};

export default connect(mapStateToProps, { fetchCrawlingSources })(Crawling);
