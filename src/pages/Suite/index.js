import React from 'react';
import './index.scss';
import {
	useRouteMatch,
	Link
} from 'react-router-dom';

function SuitePage(props) {
	console.log(useRouteMatch())
	const suiteId = useRouteMatch().params.suiteId;
	console.log('SUITE PAGE - "suiteList" inherited from App.js:', props.suitesList);
	return (
		<div>
			{/* Title */}
			<h1>
				Details for Suite #{suiteId}
			</h1>

			<br/>
			
			{/* Link to homepage */}
			<Link to='/'>
				Back to all suites
			</Link>
		</div>
	)
}

export default SuitePage;