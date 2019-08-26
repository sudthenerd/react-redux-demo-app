import React from 'react';
import { 
    Route,
    Redirect,
    Switch 
} from 'react-router-dom';
// ------------------------------------------------------------ //
import ContactAdd from './ContactAdd';
import ContactList from './ContactList';

const ContactRouter: React.FC = () => {
    return (
        <>
            <Switch>
                <Redirect exact from="/contact/" to="/contact/list"/>
                <Route exact path="/contact/list" component={ContactList}/>
            </Switch>
            <Route path="/contact/add" component={ContactAdd}/>
        </>
    );
}

export default ContactRouter;