import React from 'react';
import './Looping.css';
import { data } from '../../Assets/data';

const Looping = () => {

    // FOR LOOP
    const  getData = [];
    for (let i = 0; i < data.length; i++) {
        getData.push(
            <div key={i}>
                {i + 1}.  {data[i].name}
            </div>
        );
    }


    // FOR IN LOOP
    const storeData = [];
    for (let i in data){
        storeData.push(
            <div key={i}>
                {i}. {data[i].name}
            </div>
        );
    }

    // FOR EACH
    const fetchData = [];
    data.forEach((data, i) => {
        fetchData.push(
        <div key={i}>
             {i + 1}. {data.name}
        </div>
        )
    });

    // MAP
    const mapData = data.map((data, i) => ( 
        <div key={i}>
            {i+1}. {data.name}
        </div>
        )
    )









    return (
        <div className='looping'>
            <h1>Looping</h1> <br />


            <div className="loop_content">

                <div className="content_left">
                    <h1>for loop</h1>
                    {getData}
                </div>
                <div className="content_center">
                    <h1>for in... loop</h1>
                    {storeData}
                </div>
                <div className="content_rights">
                    <h1>for each method</h1>
                    {fetchData}
                </div>
                 <div className="content_righted">
                    <h1>map method</h1>
                    {mapData}
                </div>
                
            </div>
           
        </div>
    )
}

export default Looping