import React, {useState, useEffect} from 'react'
// import Buttons from './components/Buttons'
import Commentlist from './components/Commentslist'
import Albumlist from './components/Albumslist'
import Userlist from './components/Userslist'
import Todolist from './components/Todoslist'
import Photoslist from './components/Photoslist'
import Postlists from './components/Postslist'
import Input from './components/input'




const USER_LINK = 'https://jsonplaceholder.typicode.com'
const AVAILABLE_RESOURCES = [
  'posts',
  'comments',
  'albums',
  'users',
  'todos',
  'photos',
]

function App() {

const [endpointsData, setEndpointsData] = useState('')
const [id, setId] = useState('')

const [errorMessage, setErrorMessage] = useState('')

const [items, setItems] = useState([])
const [singleItems, setSingleItems] = useState('')

const onSubmit = () =>{
//перевірка першого інпут на валідність значення
// перевірити чи перший інпут не є пустим
if (!endpointsData){
 return setErrorMessage('Enter data')
};

if (!AVAILABLE_RESOURCES.includes(endpointsData.trim().toLowerCase())) { // враховує пробіли
 return setErrorMessage('Enter correct data')
}

// перевірка чи значення є числом
// перевірка значення на діапазон 1-100
const idToNum = Number(id)
if (!idToNum && id !== '' && !idToNum !==0) {
  return setErrorMessage('Enter correct id, use number 1-100')
}

if (idToNum < 0 || idToNum > 100) {
  return setErrorMessage('Enter correct id')
}


  fetchData(
    setErrorMessage('')
  )
}


const fetchData = async() => {
  const response = await fetch(`${USER_LINK}/${endpointsData.trim().toLowerCase()}/${id.trim().toLowerCase()}`)
  const json = await response.json()
  console.log(json);
if(id) {
  setSingleItems(json)
  setItems([])
  return
}
setSingleItems('')
setItems(json)
  
  }



  return (
    <div className='App'> 
        <div>
    
            <Input endpoint={endpointsData} id={id} setEndpointsData={setEndpointsData} setId={setId} onSubmit={onSubmit}/>

                  <h2 style={{color:'red'}}>{errorMessage}</h2>
                  <div>
                  {endpointsData === 'posts' && <Postlists key={items} posts={items} singleItems={singleItems}/>}
                  {endpointsData === 'comments' && <Commentlist key={items} comments={items} singleItems={singleItems}/>}
                  {endpointsData === 'albums' && <Albumlist key={items} albums={items} singleItems={singleItems}/>}
                  {endpointsData === 'users' &&  <Userlist key={items} users={items} singleItems={singleItems}/>}
                  {endpointsData === 'todos' && <Todolist key={items} todos={items} singleItems={singleItems}/>}
                  {endpointsData === 'photos' && <Photoslist key={items} photos={items} singleItems={singleItems}/>}
                  </div>
                 
                  
        </div>          
    </div>
    
  )
                }

  export default App

//  потрібно створити логіку, яка задовільнить наступні вимоги
//  в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами'(posts, comments, albums, photos, todos, users)
//  дефолтно обрана таба - пости
//  по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через.map
//  лише 1 список видимий одночасно
//  потрібно створити 6 компонент, які займатимуться рендерінгом списків(отримуватимуть пропсами список) - PostList, CommentsList...

// ендпоінти
//   /
//   posts /
//   comments /
//   albums /
//   photos /
//   todos /
//   users
