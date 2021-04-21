import React, {Component} from 'react';

class User extends Component {
	// state = {
	// 	user: this.props.user
	// }
	constructor(props) {
		super(props);
		let {user} = this.props
		this.state = {user}
	}
	
	render() {
		let {user} = this.props //Робим деструктуризацію, props - властивість user
		// user - обєкт юзера
		console.log(user);
		return ( //return відпрацьовує тільки раз і при зміні обєкта він не буде переренджувати,
			// плють хотел.., для цього використовуєм обєкт state
			<div>
				<h4>{user.name}</h4> -
				<p>{user.username} - {user.status.toString()}</p>
				
				<button onClick={()=> {
					user.status = !user.status
					this.setState(user)
				}}>Change status</button>
			</div>
			
		);
	}
}

export default User;