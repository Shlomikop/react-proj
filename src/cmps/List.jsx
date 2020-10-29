import React from 'react'
import { Preview } from './Preview'

export function List({ items }) {
    return (
        <div className="item-list">
            {
                items.map(item => <Preview item={ item } key={ item._id } />)
            }

        </div>
    )
}
