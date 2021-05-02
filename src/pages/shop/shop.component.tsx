import SHOP_DATA from './shop.data';
import React from 'react';
import CollectionPreview
    from '../../components/preview-collection/collection-preview.component';

export default class ShopPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {collections: SHOP_DATA};
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}: any) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                })}
            </div>
        )
    }
}
