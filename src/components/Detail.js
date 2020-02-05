import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import './Detail.css'

const Detail = (props) => {

  const [collapsed, setCollapsed] = useState(true)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const collapsibleContent = () => {
    if (collapsed) {
      return null;
    }
    return (
      <div>
        {props.content.map(participant => 
          <div key={participant.Name + participant.Title} className='contentRow'>
            <h5 className='participantName'>{participant.Name.toUpperCase()}</h5>
            <h5 className='participantTitle'>{participant.Title.toUpperCase()}</h5>
          </div>
        )}
      </div>
    )
  }


  return (
    <div>

      <div className='detailTitleBar'>
        <div className='detailIcon'>
          <img src={props.icon} alt=''/>
        </div>
        <div className='detailTitle'>
          <p>{props.title}</p>
        </div>
        {props.type === 'collapse' ? 
          // show collapse icon for collapsible content
          <div className='detailCollapse' onClick={() => toggleCollapsed()}>
            {collapsed ? <Icon name='chevron down' size='large'/> : <Icon name='chevron up' size='large'/>}
          </div> :
          null
        }
        
      </div>

      {props.type ?
        props.type === 'collapse' ?

        // collapsible content (Array)
        
          collapsibleContent() :

          // regular content (String)
          <div className='contentRow'>
            <p className='description'>{props.content}</p>
          </div>
        :
        // no content
        null
      }

    </div>
  )
}

export default Detail