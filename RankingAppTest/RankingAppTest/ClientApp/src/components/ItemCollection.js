﻿import Item from './Item.js';

const ItemCollection = ({items, drag, imgArr }) => {
    return (
        <div className="items-not-ranked">
            {
                items.map(
                    (item) => (item.ranking === 0)
                        ? <Item item={item} drag={drag} itemImgObj={imgArr.find(i => i.id === item.imageId)} />
                        : null
                )
            }
        </div>
    )
}

export default ItemCollection