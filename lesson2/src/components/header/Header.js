import React, {Component} from 'react';
import Menu from "./header components/Menu";
import './HeaderStyle.css'
import logo from "../../imgs/logo_png.png";




let menu = [
	{value: 'Summer', id: '#win'},
	{value: 'Winter', id: '#sum'},
	{value: 'Allseason', id: '#all'}
	]

let shop = 'Інтернет-магазин шин';
let choice = 'Виберіть шини'
class Header extends Component {
	render() {
		return (
			<div className={'header'}>
				<img src={logo} width="200" height="200"/>
				<div className={'menu'}>{shop}</div>
				<div className={'menu'}>{choice}</div>
				<div className={'menu'}>
					<div className={'nav'}>
						{
							menu.map(value => (<Menu {...value}/>))
						}
					</div>
				</div>
			</div>
		);
	}
}

export default Header;