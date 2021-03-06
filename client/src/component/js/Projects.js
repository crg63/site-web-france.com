import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project.js'
import '../css/Projects.css'

class ProjectsWrap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: 0,
		};
	}

	componentDidMount() {
		var projectTab = []
		fetch("https://api.mlab.com/api/1/databases/projects/collections/projects?apiKey=fF9iSxFIZA8zMgnrw9eNdbLGakDxQx1V")
		.then(response => response.json())
		.then(data => {
			this.setState({ data })			
			for (var i = this.state.data.length - 1; i >= 0; i--) {
				const projects = <Project key={this.state.data[i]._id} data={this.state.data[i]}  />
				projectTab.push(projects)
				this.setState({projectsComponents: projectTab})
			}
		});
	  }

	render() {
		return (
			<div className="Projects" id="Projects">
				<div className="BlockPrincipal">
					{this.state.projectsComponents}
				</div>
			</div>
		);
	}
};

export default ProjectsWrap
