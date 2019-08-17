import React from 'react';
import { connect } from 'react-redux';
// --------------------------------------------- //
import { fetchToDos, getToDos } from './actions/ToDoListActions';

class ToDoList extends React.Component<any, any> {
    constructor(props) {
        super(props);
        // axios.get('https://api.github.com/users')
        // .then(response => {
            //     console.log(this.props);
            //     this.props.fetchToDos(response.data);
        // })
        this.props.getToDos();
    }

    public getToDoList() {

    }
    public render() {
        return <ul className="list-group d-flex justify-content-center">
                TO DO LIST
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
    fetchToDos: (responseData: any) => dispatch(fetchToDos(responseData)),
    getToDos: () => dispatch(getToDos())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);