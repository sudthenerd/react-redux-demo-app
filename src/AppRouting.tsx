import React from 'react';
import  { 
    Route 
} from 'react-router-dom';
// -------------------------------------------- //
import Home from './Home'
import ToDo from './ToDo'
import Contact from './Contact';

const AppRouting: React.FC = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={ToDo} />
            <Route path="/contact" component={Contact} />
        </>
    );
}

export default AppRouting;