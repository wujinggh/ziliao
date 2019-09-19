import  React  from "react";
import { RouteComponentProps } from "react-router";
type IParams = {
    id: string
}

export default class extends React.Component<RouteComponentProps<IParams>> {
    render(){
        return (
            <h1>修改电影页{this.props.match.params.id}</h1>
        )
    }
}