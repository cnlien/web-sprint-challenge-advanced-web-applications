
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList"
import Navigation from './Navigation'

import '../styles/bubblePage.scss'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(()=>{
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err=>console.log('Error on BubblePage.js UseEffect: ', err.message))
  })

  return (
    <>
    <Navigation />
    <div className="color-page">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
    </>
  );
};

export default BubblePage;