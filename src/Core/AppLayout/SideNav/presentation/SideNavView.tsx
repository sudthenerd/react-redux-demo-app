import React from 'react';
import { Link } from 'react-router-dom';

const SideNavView: React.FC<any> = (props: any): any => {
    return (
        !!props.sideMenuItems.length && <ul className="list-group">
            {
                props.sideMenuItems.map((item: any, index: number) => 
                    <li className="list-group-item" key={index}>
                        <Link to={item.path}>{item.menuName}</Link>
                    </li>
                )
            }
        </ul>
    );
}

export default SideNavView;