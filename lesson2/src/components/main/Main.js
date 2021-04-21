import React, {Component} from 'react';
import Items from "./mainComponents/Items";

let items = [
	{
		size: '195/65 R15',
		brand: 'Bridgestone',
		model: 'T001',
		img: 'https://lider-shyna.com.ua/image/cache/tyre/2695-1000x1000.jpg'
	},
	{
		size: '205/55 R16',
		brand: 'Grenlander',
		model: 'Colo H01',
		img: 'https://lider-shyna.com.ua/image/cache/tyre/8023-1000x1000.jpg'
	},
	{
		size: '215/65 R16',
		brand: 'Tracmax',
		model: 'S-130',
		img: 'https://lider-shyna.com.ua/image/cache/tyre/8412-1000x1000.jpg'
	},
		]
class Main extends Component {
	render() {
		return (
			<div>
				{
					items.map(value => (<Items {...value}/>))
				}
			</div>
		);
	}
}

export default Main;