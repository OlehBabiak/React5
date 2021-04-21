import './App.css';
import Counter from "./components/Counter";
import {Provider} from 'react-redux'
import {store} from "./redux/";
import PhotosList from "./components/PhotosList";
import {Header} from "./components/Header";




const App =() => {

  return (
          <div className="App">
              <Provider store={store}>
                  <Header/>
                  <PhotosList/>
                  <Counter/>
              </Provider>
          </div>
  );
}

export default App;
