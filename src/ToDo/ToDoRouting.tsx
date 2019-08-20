import React from 'react';
import { 
    Route,
    Redirect,
    Switch 
} from 'react-router-dom';
// ------------------------------------------------------------ //
import ToDoAdd from './ToDoAdd';
import ToDoList from './ToDoList';

const ToDoRouting: React.FC = () => {
    return (
        <>
            <Switch>
                <Redirect exact from="/todo/" to="/todo/list"/>
                <Route exact path="/todo/list" component={ToDoList}/>
            </Switch>
            <Route path="/todo/add" component={ToDoAdd}/>
        </>
    );
}

export default ToDoRouting;