import React, { useState } from 'react'
import './App.css';

// function App() {
//   const onSubmit = (e) => {
//     e.preventDefault();
 

//  //1
// //  const {
// //    target: [
// //    {value: name}, 
// //    {value: lastName}, 
// //    {value: email}, 
// //    {value: age}, 
// //    {value: password}
// //   ]
// //   } = e;

// //2
//  const {
//    target: {
//    elements: {
//       name,
//       lastName,
//       email,
//       age,
//       password
//    }
//    }
//   } = e;



//  alert(JSON.stringify({
//    name: name.value, 
//    lastName: lastName.value, 
//    email: email.value, 
//    age: age.value, 
//    password: password.value
//   }, null, 2))


// }


//   return (
//     <div className="App">
//       <h1>This is input</h1>
//       <form onSubmit = {onSubmit} >
//   <input type="text" name="name" placeholder = "Enter your name"/>  
//     <br/>
//     <br/>
//     <input type="text" name="lastName" placeholder = "Enter your last name"/>  
//     <br/>
//     <br/>
//     <input type="email" name="email" placeholder = "Enter your email"/>  
//     <br/>
//     <br/>
//     <input type="number" name="age" placeholder = "Enter your age"/> 
//     <br/>
//     <br/>
//     <input type="password" name="password" placeholder = "Enter your pass"/>  
//     <br/>
//     <br/>
//     <button type="submit">Submit</button>
//       </form>
  
    
//     </div>
//   );
// }


// function App() {

// const name = React.useRef();
// const lastName = React.useRef();
// const email = React.useRef();
// const age = React.useRef();
// const password = React.useRef();
// const form = React.useRef();

//   const onSubmit = (e) => {
//     e.preventDefault();
 
// //  name.current.value = '' // clear input



//  alert(JSON.stringify({
//    name: name.current.value, 
//    lastName: lastName.current.value, 
//    email: email.current.value, 
//    age: age.current.value, 
//    password: password.current.value
//   }, null, 2))

// // name.current.value = '';
// // lastName.current.value = '';
// // email.current.value = '';
// // age.current.value = '';
// // password.current.value = '';
 
// form.current.reset()
// }



//   return (
//     <div className="App">
//       <h1>This is input</h1>
//       <form 
//       ref={form}
//       onSubmit = {onSubmit} >
//   <input ref={name} type="text" name="name" placeholder = "Enter your name"/>  
//     <br/>
//     <br/>
//     <input ref={lastName} type="text" name="lastName" placeholder = "Enter your last name"/>  
//     <br/>
//     <br/>
//     <input ref={email} type="email" name="email" placeholder = "Enter your email"/>  
//     <br/>
//     <br/>
//     <input ref={age} type="number" name="age" placeholder = "Enter your age"/> 
//     <br/>
//     <br/>
//     <input ref={password} type="password" name="password" placeholder = "Enter your pass"/>  
//     <br/>
//     <br/>
//     <button type="submit">Submit</button>
//       </form>
  
    
//     </div>
//   );
// }


function App() {
// const [firstName, setFirstName] = React.useState('')
// const [lastName, setLastName] = React.useState('')
// const [email, setEmail] = React.useState('')
// const [age, setAge] = React.useState('')
// const [pass, setPass] = React.useState('')

//short view

const [userData, setUserData] = React.useState({
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  pass: '',
})


  const handleSubmit = () => {
     //  alert(JSON.stringify({
//    firstName,
//    lastName,
//    email,
//    age,
//    pass,
//   }, null, 2))
 
//short view

 alert(JSON.stringify(userData, null, 2))
setUserData({   //clean fields
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  pass: '',
})
}

// const updateUserData = (field, value) => {
// setUserData({...userData, [field]: value})  //[field]: value -  бере поле яке змынюэтья ы кладе туди його значення
// }

const updateUserData = (e) => {
  const {target: {value, name}} = e // з івента деструктуризуєм name
 if(name === 'age' && Number(value) >=99){
   return
 }
if (name === 'firstName' && typeof value == Number) {
  return
}

setUserData({...userData, [name]: value})  
}


  return (
    <div className="App">
      <h1>This is input</h1>
    
    <input 
    value={userData.firstName} 
    onChange={updateUserData} 
    type="text" 
    name="firstName" 
    placeholder = "Enter your name"
    />  
    <br/>
    <br/>
    <input 
    value={userData.lastName} 
    onChange={updateUserData} 
    type="text" 
    name="lastName" 
    placeholder = "Enter your last name"
    />  
    <br/>
    <br/>
    <input 
    value={userData.email} 
    onChange={updateUserData} 
    type="email" 
    name="email" 
    placeholder = "Enter your email"
    />  
    <br/>
    <br/>
    <input 
    value={userData.age} 
    onChange={updateUserData} 
    type="number" 
    name="age" 
    placeholder = "Enter your age"
    /> 
    <br/>
    <br/>
    <input 
    value={userData.pass} 
    onChange={updateUserData} 
    type="password" 
    name="pass" 
    placeholder = "Enter your pass"
    />  
    <br/>
    <br/> 
    <button onClick={handleSubmit}>Submit</button>
          
          {userData.age >28? (<h3>you are old!</h3>): (<h3>You are young!</h3>)}

    </div>
  );
}


export default App;
