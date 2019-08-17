import React from 'react';
import { connect } from 'react-redux';
// --------------------------------------------- //
import { fetchToDos, getToDos } from './actions/ToDoListActions';

class ToDoList extends React.Component<any, any> {
    constructor(props) {
        super(props);

        if (this.props.todos && !this.props.todos.length) {
            this.props.getToDos();
        }
    }

    public render() {
        return !!this.props.todos.length && <ul className="list-group d-flex justify-content-center align-items-center">
                    { 
                         this.props.todos.map((data: any, index: number) =>
                            <li className="list-group-item d-flex col-6" key={index}>
                                <span className="col">{data.name}</span>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger ml-4">Delete</button>
                            </li>
                        )
                    }
               </ul>
    }
}

const mapStateToProps = (state: any) => ({
    todos: state.toDo.list.todos,
    state: state
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchToDos: (responseData: any) => dispatch(fetchToDos(responseData)),
    getToDos: () => dispatch(getToDos())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);