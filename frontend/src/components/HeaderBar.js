import React from 'react'

const HeaderBar = ({pageName, pagePath}) => {
    let path = ''
    for (let x=0; x < (pagePath.length); x++){
        if((x+1) != pagePath.length){
            path = path + pagePath[x] + " . "
        } else {
            path = path + pagePath[x] 
        }
    }

  return (
    <div className='headerBar'>
      <div className="headerBar-name">{pageName}</div>
      <div className="headerBar-path">{path}</div>
    </div>
  )
}

export default HeaderBar
