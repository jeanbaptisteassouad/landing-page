import React from 'react'
import ReactDOM from 'react-dom'

import Main from 'components/main'

try {
  navigator.serviceWorker.getRegistration()
    .then(a=>a.unregister())
} catch(e) {
  
}

const app = () => {
  let root_div = document.createElement('div')
  root_div.setAttribute('id','root')

  if (document.body !== null) {
    document.body.appendChild(root_div)
  }

  ReactDOM.render(<Main />,root_div)
}

window.onload = app
