import React from 'react';
import './MainUdrzbarske.css';
import { SekciaHlavicka } from './components/SekciaHlavicka';
import { DetailyPoziadavky } from './components/DetailyPoziadavky';
import { InformacieUzivatel } from './components/InformacieUzivatel';

function MainUrzbarske() {

    return (
        /*In React, you typically don't need to use <head>, <body>, and <title> tags in your component as these are typically handled outside of React in the public/index.html file of your project. The <title> tag specifically is managed outside of React components and is usually set in the public/index.html file in a Create React App project.*/
        <div className="MainUrzbarske">
            <div className="container">
                <SekciaHlavicka />
                <DetailyPoziadavky />
                <InformacieUzivatel />
            </div>
        </div>

    );
}
export default MainUrzbarske;