import React, { Component } from 'react';
import resumeData from './Resume.data_sample';

class ResumePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			resume: resumeData.sample
		};
	}

	render() {

		const description = (desc) => desc.map(obj => {
			if(obj) {
				const sub_topic = obj.sub_topic.map(val => <li> { val } </li> ); 
				return (
					<ul>
						<li> { obj.topic }
							<ul> { sub_topic } </ul>
						</li>
					</ul>
				);
			}
			
		});

		const experience = this.state.resume.map(obj => {
			return (
				<div>
					<div className="row">
						<div className="col-md-6">
							<h4>{ obj.department }, { obj.title }</h4>
							<h5>{ obj.company }, { obj.location}</h5>
						</div>
						<div className="col-md-6">
							<h5 className="text-right">{ obj.dates }</h5>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<p>{ obj.summary }</p>
							{ description(obj.description) }
						</div>
					</div>
				</div>
			);
		});

		return (
			<div>
				<h2 className="page-title"><i className="fa fa-file-text-o"></i> Resume</h2>
				<div className="container-fluid">

					{ experience }

				</div>
			</div>
		);
	}
}

export default ResumePage;