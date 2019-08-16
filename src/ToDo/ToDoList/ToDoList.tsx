import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// --------------------------------------------- //
import { fetchToDos } from './actions/ToDoListActions';

class ToDoList extends React.Component<any, any> {
    constructor(props) {
        super(props);
        // axios.get('https://api.github.com/users')
        // .then(response => {
        //     console.log(response)
        // })
        console.log(props);
        // this.props.fetchToDos();
        
    }

    public getToDoList() {

    }
    public render() {
        return <ul className="list-group">
                    { 
                        this.props.todos && this.props.todos.map((data: any, index: number) =>
                            <li className="list-group-item" key={index}>{data.login}</li>
                        )
                    }
               </ul>
    }
}

const mapStateToProps = (state: any) => ({
    todos: state.toDo.list.todos
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchToDos: () => dispatch(axios.get('https://api.github.com/users')
    .then(response => {
        fetchToDos(response.data)
    }))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);