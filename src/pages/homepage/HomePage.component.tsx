import React from 'react';
import './homepage.styles.scss';
import DirectoryComponent from '../../components/directory/directory.component';

const HomePageComponent = () => {
    return (
        <div className="homepage">
            <DirectoryComponent/>
        </div>
    );
};

export default HomePageComponent;
