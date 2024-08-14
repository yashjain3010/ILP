import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div><ChildComponent msg="Hello from parent Compoent"/></div>
  )
}

export default ParentComponent;