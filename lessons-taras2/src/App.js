import React, {useState, Component} from 'react' //імпортуємо хук useState
import logo from './logo.svg';
import './App.css';

const Header = ({props}) => {
  console.log('Cild rerender')
return (<h2>{props}</h2>)
}


//  1

// function App() {
// // let counter = 0
// const [counter, setCounter] = useState(0) //в дужках тримаємо стан компоненти (почтакове значення), викликаємо цю ф-цію, вона повертає масив
// const [newCounter, setNewCounter] = useState(3)
// const [isHeaderVisiable, setisHeaderVisiable] = useState(true);
// const [todoes, settodoes] = useState(['Hello', 'React']);


// const clickHandler = () => {
//   const newCounterValue = counter +1 + newCounter

// setNewCounter(newCounter + 3)
// setCounter(newCounterValue)
// console.log('Parent Rerender');

// }

// const toggleHeader = () => {
//   setisHeaderVisiable(!isHeaderVisiable)
// }

// const changeSmthInTodo = () => {
//   const newArr = [...todoes]
// newArr[0] = Math.floor(Math.random()*100)
//   settodoes(newArr)
// }

// const reset = () => {
//   setCounter(counter - counter)
// }

//   return (
//     <div className="App">
//      {isHeaderVisiable && <Header props = {counter}/>}
//      <button onClick={clickHandler}>inc</button>
//      <button onClick={toggleHeader}>Togle header</button>
//      <button onClick={changeSmthInTodo}>Change smth in todo</button>
//      <button onClick={reset}>Reset</button>
//      <div>{todoes[0]}</div>
//      <div>{todoes[1]}</div>
//     </div>
//   );
// }


// 2

// function App() {
// // let counter = 0
// const [state, setstate] = useState({
//   counter:0,
//   isHeaderVisiable: true,
//   todoes: ['Hello', 'React']
// });


// const clickHandler = () => {
//  setstate({
//    ...state,
//    counter: state.counter+1
//  })
// console.log('Parent Rerender');

// }

// const toggleHeader = () => {
//    setstate({
//      ...state,
//      isHeaderVisiable: !state.isHeaderVisiable
//    })
// }

// const changeSmthInTodo = () => {
//   const newArr = [...state.todoes];
//   newArr[0] = Math.floor(Math.random() * 100);
//   setstate({
//     ...state,
//     todoes: newArr
//   })
// }

// const reset = () => {
//   setstate({
//     ...state,
//     counter: 0
//   })
// }

//   return (
//     <div className="App">
//      {state.isHeaderVisiable && <Header props = {state.counter}/>}
//      <button onClick={clickHandler}>inc</button>
//      <button onClick={toggleHeader}>Togle header</button>
//      <button onClick={changeSmthInTodo}>Change smth in todo</button>
//      <button onClick={reset}>Reset</button>
//      <div>{state.todoes[0]}</div>
//      <div>{state.todoes[1]}</div>
//     </div>
//   );
// }

//3

// class App extends Component {

// state = {
//   counter: 0,
//   isHeaderVisiable: true,
//   todoes: ['Hello', 'React']
// }

// clickHandler = () => {
  
//    this.setState({counter: this.state.counter + 1})

// }
// toggleHeader = () => {
 
//  this.setState({isHeaderVisiable: !this.state.isHeaderVisiable})
// }
// changeSmthInTodo = () => {
//   const newArr = [...this.state.todoes]
// newArr[0] = Math.floor(Math.random()*100)
// this.setState({todoes: newArr})
// }

// reset = () => {
//   this.setState({counter: 0})
// }


//   render() {

//     const {isHeaderVisiable, todoes, counter} = this.state
//   return (
//     <div className="App">
//      {isHeaderVisiable && <Header props = {counter}/>}
//      <button onClick={this.clickHandler}>inc</button>
//      <button onClick={this.toggleHeader}>Togle header</button>
//      <button onClick={this.changeSmthInTodo}>Change smth in todo</button>
//      <button onClick={this.reset}>Reset</button>

//      <div>{todoes[0]}</div>
//      <div>{todoes[1]}</div>
//     </div>
//     );
//   }
// }


//Lists


const TodoItem = ({todo}) => (
    <div>
              {todo.title}
              <br/>
              {todo.content}
              <br/>
              <br/>
            </div>
  )


function App() {
// let counter = 0
const [counter, setCounter] = useState(0) //в дужках тримаємо стан компоненти (почтакове значення), викликаємо цю ф-цію, вона повертає масив
const [newCounter, setNewCounter] = useState(3)
const [isHeaderVisiable, setisHeaderVisiable] = useState(true);
const [todoes, settodoes] = useState([
  {id:0, title: 'Hello', content: 'React'}, 
  {id:1, title: 'Bye', content: 'React'},
  {id:2, title: 'Test', content: 'React'}
]);


const clickHandler = (props) => {
  const newCounterValue = counter +1 + newCounter

setNewCounter(newCounter + 3)
setCounter(newCounterValue)
console.log('Parent Rerender');

}

const toggleHeader = () => {
  setisHeaderVisiable(!isHeaderVisiable)
}

const changeSmthInTodo = () => {
  const newArr = [...todoes]
newArr[0] = {id: newArr[0].id, title:Math.floor(Math.random()*100), content: Math.floor(Math.random()*100)}
  settodoes(newArr)
}

const reset = () => {
  setCounter(counter -counter)
}

  return (
    <div className="App">
     {isHeaderVisiable && <Header props = {counter}/>}
     <button onClick={clickHandler}>inc</button>
     <button onClick={toggleHeader}>Togle header</button>
     <button onClick={changeSmthInTodo}>Change smth in todo</button>
     <button onClick={reset}>Reset</button>

      <div>
        {todoes.map(todo => <TodoItem todo={todo} key={todo.id}/>)}
      </div>

     {/* <div>
       {todoes[0].title}
       <br />
       {todoes[0].content}
       <br />
     </div>
     <div>

      {todoes[1].title}
       <br />
      {todoes[1].content}
     </div> */}
     
    </div>
  );
}



export default App;
