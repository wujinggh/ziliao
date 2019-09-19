import { combineReducers } from 'redux';  
import movie, { IMovieState } from './MovieReducer'

export type IRootState = {
    movie:IMovieState
}

export const rootReducer = combineReducers({
    movie
})


