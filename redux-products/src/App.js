import './App.css';
import Products from "./components/Product";
import {Provider} from 'react-redux'
import {store} from "./redux/";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Header/>
            <Products/>
        </Provider>
    </div>
  );
}

export default App;
