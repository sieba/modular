import React from 'react'

const Method = () => {

    const data = [
    { name: "sieba damucay", age: 24, gender: "Male", birth_dateL: "05-02-2001" },
    { name: "rosette renaliza", age: 23, gender: "Male", birth_dateL: "05-02-2002"},
    { name: "jack liwag", age: 21, gender: "Male", birth_dateL: "05-02-2004" },
    { name: "fabro jansev", age: 22, gender: "Male", birth_dateL: "05-02-2003"},
    { name: "reynald kyle", age: 21, gender: "Male", birth_dateL: "05-02-2001"},
    { name: "kenneth john", age: 24, gender: "Male", birth_dateL: "05-02-2001"},
    ];


    const findTheData = data.filter(item => item.age > 20);
    const filteredItems = data.find(item => item.name === 24);


    return (
        <div>
            <div className='looping'>
                <h1>Accessing array using for loop</h1> <br />
                <div className="loop_content">

                    <div className="content_left">
                        <h1>FILTER</h1>
                        {filteredItems}
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
        </div>
    )
}

export default Method