import React, {useState, useEffect} from 'react'
import Buttons from './components/Buttons'
import Commentlist from './components/Commentslist'
import Albumlist from './components/Albumslist'
import Userlist from './components/Userslist'
import Todolist from './components/Todoslist'
import Photoslist from './components/Photoslist'
import Postlists from './components/Postslist'



const usersLink = 'https://jsonplaceholder.typicode.com/'

function App() {

const onTabChangeHandler =(tab) => {
  if (tab !== lastPartOfUrl){
setLastPartOfUrl(tab)
setList([])
  }
}

const tabs = [
  {title: 'posts', clickHandler: () => onTabChangeHandler('posts')},
  {title: 'comments', clickHandler: () => onTabChangeHandler('comments')},
  {title: 'albums', clickHandler: () => onTabChangeHandler('albums')},
  {title: 'photos', clickHandler: () => onTabChangeHandler('photos')},
  {title: 'todos', clickHandler: () => onTabChangeHandler('todos')},
  {title: 'users', clickHandler: () => onTabChangeHandler('users')}
]
const [lastPartOfUrl, setLastPartOfUrl] = useState(tabs[0].title)
const [list, setList] = useState([])
const [isLoading, setisLoading] = useState(false)


  const fetchLinks = async () => {
    setisLoading(true)
    const response = await fetch(`${usersLink}${lastPartOfUrl}`)
    const data = await response.json()
    setList(data)
    setisLoading(false)
  }

  useEffect(() => {
    fetchLinks()
  }, [lastPartOfUrl])


  return (
    <div className='App'> 
        <div>
                  {<Buttons tabs={tabs} lastPartOfUrl={lastPartOfUrl}/>}

                  {isLoading ? <h1>LOADING...</h1> : (
                  <>
                  {lastPartOfUrl === 'posts' && <Postlists key={list} posts={list}/>}
                  {lastPartOfUrl === 'comments' && <Commentlist key={list} comments={list}/>}
                  {lastPartOfUrl === 'albums' && <Albumlist key={list} albums={list}/>}
                  {lastPartOfUrl === 'users' && <Userlist key={list} users={list}/>}
                  {lastPartOfUrl === 'todos' && <Todolist key={list} todos={list}/>}
                  {lastPartOfUrl === 'photos' && <Photoslist key={list} photos={list}/>}
                  </>
                  )}
                  
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
