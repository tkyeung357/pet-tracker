var React = require('react');
var CoverItem = require('../components/CoverItem');

var Cover = React.createClass({
	render: function(){
		return (
				<div>
				<CoverItem/>
				<CoverItem/>
				<CoverItem/>
				<CoverItem/>
				<CoverItem/>
				</div>
		);
	}
});

module.exports = Cover;
