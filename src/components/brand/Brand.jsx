import React from 'react'
import './brand.css'
import { assian, dropbox, google, shopify, slack } from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={assian} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
    </div>
  )
}

export default Brand