import React from 'react';
import  { 
    Route 
} from 'react-router-dom';
// -------------------------------------------- //
import Home from './Home'
import ToDo from './ToDo'

const AppRouting: React.FC = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={ToDo} />
        </>
    );
}

export default AppRouting;