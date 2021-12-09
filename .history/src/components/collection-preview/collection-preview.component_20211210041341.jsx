import './collection-preview.styles.scss'


const CollectionPreview = ({ title, items}) => (
    <div className='collection-preview'>

        <h1 className='title'></h1>
        <div className='preview'>
            { items.map( item => (
                <div key>{item.name}</div>
            ))}
        </div>
    </div>
)
export default CollectionPreview
