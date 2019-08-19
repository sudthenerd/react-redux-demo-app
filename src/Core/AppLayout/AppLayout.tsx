import React from 'react';
import  { 
    BrowserRouter as Router
  } from 'react-router-dom';
// ----------------------------------------------- //
import AppHeader from './AppHeader';
import SideNav from './SideNav';

const AppLayout: React.FC = (props: any) => {
    return (
        <section className="p-1">
            <Router> 
                <AppHeader />
                <main className="d-flex">
                    <SideNav />
                    <section className="col px-3 pb-3 bg-light mx-3 rounded justify-content-strech">
                        {props.children}
                    </section>
                </main>
            </Router>
        </section>
    );
}

export default AppLayout;