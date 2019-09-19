import { IMovieState } from "../redux/reducers/MovieReducer";
import React from "react";
import { Table } from "antd";
import { IMovie } from "../services/MovieService";
import { ColumnProps } from "antd/lib/table";

export interface IMovieTableEvents{
    onload:()=>void;
}

export default class extends React.Component<IMovieState & IMovieTableEvents>{

    componentDidMount(){
        if(this.props.onload){
            this.props.onload()
        }
    }

    private getColumns():ColumnProps<IMovie>[] {
        return [
            { 
                title: '名称', 
                dataIndex: 'name'
            },
            {   title: '地区',
                dataIndex: 'areas',
                render(text) {
                    return text.join(', ')
                }
            },
            {
                title: '类型',
                dataIndex: 'types',
                render(text) {
                    return text.join(', ')
                }
            },
        ]
    }
    render(){
        return(
            <Table rowKey="_id" dataSource={this.props.data} columns={this.getColumns()}></Table>
        )
    }
}