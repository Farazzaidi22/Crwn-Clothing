import React from "react";
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";

import {selectCollections} from '../../redux/shop/shop.selectors'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({ collections }) => (
        <div className="shop-page">
            {
                collections.map( ({ id, ...otheCollectionProps }) => (
                    <CollectionPreview key={id} {...otheCollectionProps}/>
                ) )
            }

        </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)