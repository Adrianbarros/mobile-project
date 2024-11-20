import React from 'react'
import PropTypes from 'prop-types'

interface Props {
    name: string;
    link: string;
}
function categoryTab(data: Props) {
    return (
        <div>{data.name}</div>
    )
}

export default categoryTab
