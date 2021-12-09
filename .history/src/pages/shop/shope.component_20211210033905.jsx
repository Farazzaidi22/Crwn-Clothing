import React from "react";
import SHOP_DATA from './shop.data'

class ShopePage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        return (<div>SHOP PAGE</div>)
    }
}

export default ShopePage