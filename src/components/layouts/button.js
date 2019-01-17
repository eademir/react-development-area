import React from 'react'

const Btn  = (props) => {
    const {btnName, onC} = props;
    return(
        <div>
            <button onClick={onC}>
                {btnName}
            </button>
        </div>
    )
}

export default Btn