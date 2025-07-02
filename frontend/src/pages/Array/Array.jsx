import React from 'react'

const Array = () => {

    // FOR LOOP
    const arrayValues = [1,2];
    let sum = 0;
    for(let i = 0; i < arrayValues.length; i++){
        sum += arrayValues[i];
    }



    


    

    return (
        <div className='looping'>
            <h1>Accessing array using for loop</h1> <br />


            <div className="loop_content">

                <div className="content_left">
                    <h1>for loop</h1>
                    {sum}
                </div>
                <div className="content_center">
                    <h1>for in... loop</h1>
                </div>
                <div className="content_rights">
                    <h1>for each method</h1>
                </div>
                 <div className="content_righted">
                    <h1>map method</h1>
                </div>
                
            </div>
           
        </div>
    )
}

export default Array