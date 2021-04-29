import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom'

type MenuItemProps = any;
// type MenuItemProps = {
//     title: string;
//     imageUrl: string;
//     size: string | undefined;
// }

const MenuItem = ({
                      title,
                      imageUrl,
                      size,
                      history,
                      linkUrl,
                      match
                  }: MenuItemProps) => {
    return (
        <div className={`${size} menu-item`}
             onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image'
                 style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
