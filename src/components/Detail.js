import React from 'react'
import './Detail.css'

const Detail = (props) => {
  return (
    <div>

      <div className='detailTitleBar'>
        <div className='detailIcon'>
          <p>X</p>
        </div>
        <div className='detailTitle'>
          <p>{props.title}</p>
        </div>
        <div className='detailCollapse'>
          <p>X</p>
        </div>
      </div>

      {props.type ?
        props.type === 'collapse' ?
        //collapse content
          <div>
            {props.content.map(participant => <div key={participant}>{participant.Name}</div>)}
          </div> :
          // show content
          <div>
            <p>normal content</p>
          </div>
        :
        // no content
        null
      }

    </div>
  )
}

export default Detail