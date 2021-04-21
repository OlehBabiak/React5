import React from 'react'

export default function Buttons({tabs, lastPartOfUrl}) {
    return (
        <div style = {{
            display: 'flex',
        }}>
                  {tabs.map(tab => 
                  <button
                  key={tab.title} 
                  style={{
                      flex: 1, 
                      height: '50px',
                      background: lastPartOfUrl === tab.title? 'green' : 'lightgrey'}} 
                      onClick={tab.clickHandler}
                      >
                          {tab.title}
                          </button>)}
        </div>
    )
}
