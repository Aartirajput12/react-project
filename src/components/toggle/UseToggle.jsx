import React, { useState } from 'react'

const UseToggle = (defaultVal) => {
    const [value, setValue] = useState(defaultVal);
    const toggleValue = (val) => {
        if(typeof val!='boolean'){
            setValue(!value)
        }
        else{
            setValue(val)
        }
    }
  return [value, toggleValue]
}

export default UseToggle;