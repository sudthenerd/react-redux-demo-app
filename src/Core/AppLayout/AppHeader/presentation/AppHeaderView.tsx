import React from 'react';
import { Link } from 'react-router-dom';

const AppHeaderView: React.FC<any> = ({headerMenus, ...props}): any => {
    return (
        !!headerMenus.length && <ul className="nav d-flex justify-content-center bg-light mb-4">
            {
                headerMenus.map((item: any, index: number) => 
                    <li className="nav-item" key={index} onClick={() => {props.showSideMenuItems(item.subMenu)}}>
                        <Link className="nav-link"  to={item.path}>{item.menuName}</Link>
                    </li>
                )
            }
        </ul>
    );
}

export default AppHeaderView;