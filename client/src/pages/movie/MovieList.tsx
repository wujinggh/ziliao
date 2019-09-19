import  React, { Dispatch }  from "react";
import MovieTable, { IMovieTableEvents } from "../../components/MovieTable"
import { connect } from "react-redux"
import { IRootState } from "../../redux/reducers/RootReducer";
import { IMovieState } from "../../redux/reducers/MovieReducer";
import MovieAction from "../../redux/actions/MovieAction";

function mapStateToProps(state: IRootState): IMovieState{
    return state.movie;
}
function mapDispatchToProps(dispatch: Dispatch<any>): IMovieTableEvents{
    return{
        onload(){
            dispatch(MovieAction.fetchMovies({
                limit: 10,
                key: '',
                page: 1
            }))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
