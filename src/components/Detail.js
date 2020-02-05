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
            {props.content.map(participant => 
              <div key={participant.Name + participant.Title} className='contentRow'>
                <h5 className='participantName'>{participant.Name.toUpperCase()}</h5>
                <h5 className='participantTitle'>{participant.Title.toUpperCase()}</h5>
              </div>
            )}
          </div> :
          // show content
          <div className='contentRow'>
            <p>{props.content}</p>
          </div>
        :
        // no content
        null
      }

    </div>
  )
}

export default Detail