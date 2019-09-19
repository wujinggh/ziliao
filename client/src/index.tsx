import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import { store } from './redux/store';
import MovieAction from './redux/actions/MovieAction';
import { MovieService } from './services/MovieService';


// store.dispatch(MovieAction.fetchMovies({
//     page: 2
// })).then(()=>{
//     store.dispatch(MovieAction.deleteMovie('5d81e7df3082ca03b8baade9'))
// })



ReactDOM.render(<App />, document.getElementById('root'));



