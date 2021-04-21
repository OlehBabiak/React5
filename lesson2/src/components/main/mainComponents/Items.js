import React, {Component} from 'react';
import './ItemsStyle.css'
class Items extends Component {
	
	render() {
		let {size, brand, model, img} = this.props
		return (
			<div className={'itemList'}>
				<h2>{size}</h2>
				<h3>{brand}</h3>
				<h3>{model}</h3>
				<div className={'img'}>
					<img src={img} alt={'tyre photo'}/>
				</div>
				
			</div>
		);
	}
}

export default Items;