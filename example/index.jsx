import React from 'react';
import ReacDOM from 'react-dom';
import CounterInput from './react-bootstrap-personalized-counter';

class App extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<div className="col-lg-2 2">
					<CounterInput 
						value={1} 
						min={10} 
						minus={{type:'img', value:'/public/baseline-add-24px.svg', styles: {width: '18px'}}} 
						plus={{type:'img', value:'/public/baseline-remove-24px.svg', styles : {width: '18px'}}} 
						onChange={(value) => {console.log(value)}} />
				</div>
			</div>
		)
	}
}

ReacDOM.render(
	<App />,
	document.getElementById('app')
);