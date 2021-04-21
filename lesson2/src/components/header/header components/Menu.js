import React, {Component} from 'react';
import './MenuStyle.css'
class Menu extends Component {
	render() {
		let {value, id} = this.props
		console.log(value)
		return (
				<div className={'nav_list'}>
					<a href={id}>
						{value}
					</a>
				</div>
		);
	}
}

export default Menu;