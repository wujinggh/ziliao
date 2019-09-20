import { IMovie } from "../../services/MovieService";
import { ISearchCondition } from "../../services/CommonTypes";
import { MovieAction, SaveMoviesAction, SetConditionAction, SetLoadingAction, DeleteAction, MovieChangeSwitchAction } from "../actions/MovieAction";
import { Reducer } from "react";

export type IMovieCondition = Required<ISearchCondition>;

export interface IMovieState {
    data: IMovie[];
    condition: IMovieCondition;
    total: number;
    loading: boolean;
    totalPage: number;
}

const defaultState:IMovieState = {
    data: [],
    condition:{
        limit: 10,
        page: 1,
        key: ''
    },
    total: 0,
    loading: false,
    totalPage: 0
} 
type MovieReducer<A> = Reducer<IMovieState, A>

const saveMovie: MovieReducer<SaveMoviesAction> = function(state, action) {
    return {
        ...state,
        data: action.payload.movies,
        total: action.payload.total,
        totalPage: Math.ceil(action.payload.total / state.condition.limit)
    }
}
const setCondition: MovieReducer<SetConditionAction> = function (state, action) {
    const newState = {
        ...state,
        condition: {
            ...state.condition,
            ...action.payload
        }
    };
    newState.totalPage = Math.ceil(newState.total / newState.condition.limit);
    return newState;
}
const setLoading: MovieReducer<SetLoadingAction> = function (state, action) {
    return {
        ...state,
        loading: action.payload
    }
}
const deleteMovie: MovieReducer<DeleteAction> = function (state, action) {
    return {
        ...state,
        data: state.data.filter((item)=>item._id !== action.payload),
        total: state.total - 1,
        totalPage: Math.ceil((state.total - 1) / state.condition.limit)
    }
}

const changeSwitch: MovieReducer<MovieChangeSwitchAction> = function (state, action) {
    // action.payload.
    //1. 根据id找到对象
    const movie = state.data.find(d => d._id === action.payload.id);
    if (!movie) {
        return state;
    }
    //2. 对象克隆
    const newMoive = { ...movie };
    newMoive[action.payload.type] = action.payload.newVal;

    //3. 将对象重新放入到数组
    const newData = state.data.map(d => {
        if (d._id === action.payload.id) {
            return newMoive;
        }
        return d;
    })

    return {
        ...state,
        data: newData
    }
}

export default function (state: IMovieState = defaultState, action:MovieAction){
    switch (action.type) {
        case 'movie_save':
            return saveMovie(state,action);
        case 'movie_setLoading':
            return setLoading(state, action);
        case 'movie_setCondition':
            return setCondition(state, action);
        case 'movie_delete':
            return deleteMovie(state, action);
        case 'movie_switch':
            return changeSwitch(state, action);
        default:
            return state;
    }
}

