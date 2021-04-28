import React from 'react';
import './menu-item.styles.scss';

type MenuItemProps = {
    title: string;
    imageUrl: string;
    size: string | undefined;
}

const MenuItemComponent = ({title, imageUrl, size}: MenuItemProps) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image'
                 style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItemComponent;
