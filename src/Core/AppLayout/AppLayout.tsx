import React from 'react';
// ----------------------------------------------- //
import AppHeader from './AppHeader';
import SideNav from './SideNav';

const AppLayout: React.FC = (props: any) => {
    return (
        <section className="p-1">
            <AppHeader />
            <main className="d-flex">
                <SideNav />
                <section className="col p-3">
                    {props.children}
                </section>
            </main>
        </section>
    );
}

export default AppLayout;