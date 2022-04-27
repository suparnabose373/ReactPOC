import React, {useEffect, useState} from 'react';

const ButtonGroup = () => {
    const [color,setColor] = useState();
    useEffect(() => {
        setColor('red');
    },[]);

    function handleColorChange(e) {
        e.preventDefault();
        color === 'red' ? setColor('blue') : setColor('red');
    }

    return(
        <div>
            <button style={color === 'red' ? {backgroundColor: 'red'} : {backgroundColor: 'blue'}}
            onClick={(e) => {handleColorChange(e)}}>
                {color === 'red' ? 'Turn to Blue' : 'Turn to Red'}
            </button>
        </div>
    )
}

export default ButtonGroup;