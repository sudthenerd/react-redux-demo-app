import React from 'react';
import  { 
    BrowserRouter as Router
  } from 'react-router-dom';
// ----------------------------------------------- //
import AppHeader from './AppHeader';
import SideNav from './SideNav';

class AppLayout extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <section className="p-1">
                <Router> 
                    <AppHeader />
                    <main className="d-flex">
                        <SideNav />
                        <section className="col px-3 pb-3 bg-light mx-3 rounded justify-content-strech">
                            {this.props.children}
                        </section>
                    </main>
                </Router>
            </section>
        );
    }
}

// const AppLayout: React.FC = (props: any) => {
// }

export default AppLayout;