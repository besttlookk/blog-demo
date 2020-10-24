import React from 'react'
import {BounceLoader } from 'react-spinners'
import { css } from '@emotion/core'

const loaderCSS = css`
    margin: 50px auto
`

const Loader = () => {
    return (
        <>
            <BounceLoader loading size={48} css={loaderCSS} />
        </>
    )
}

export default Loader
