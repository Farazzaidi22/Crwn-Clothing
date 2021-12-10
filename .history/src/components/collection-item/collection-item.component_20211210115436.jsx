
i
import './collection-item.styles.scss'


const CollectionItem = ({ title, items}) => (
    <div className='collection-item'>

        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='item'>
            { items.filter((item, idx) => idx < 4)
                .map( item => (
                <div key={ item.id }>{item.name}</div>
            ))}
        </div>
    </div>
)
export default CollectionItem
