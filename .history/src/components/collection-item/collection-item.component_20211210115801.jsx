
import './collection-item.styles.scss'


const CollectionItem = ({ id, name, price, imageUrl}) => (
    <div className='collection-item'>

       <div
            className='image'
            style={{
                background: `url(${imageUrl})`
            }}/>

        <div className='collection-footer'>
            span
        </div>
    </div>
)
export default CollectionItem
