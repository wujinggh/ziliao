import { Dispatch }  from "react";
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
        },
        onSwitchChange(type,newState,id){
            dispatch(MovieAction.changeSwitch(type, newState, id));
        },
        async onDelete(id:string){
            await dispatch(MovieAction.deleteMovie(id))
        },
        onChange(newPage) {
            dispatch(MovieAction.fetchMovies({
                page: newPage
            }))
        },
        onKeyChange(key) {
            dispatch(MovieAction.setConditionAction({
                key
            }))
        },
        onSearch() {
            dispatch(MovieAction.fetchMovies({
                page: 1
            }))
        }

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
