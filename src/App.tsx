import * as React from 'react';
import './App.css';

import RecursiveProperty from './RecursiveProperty';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">Welcome to my JSON react app</h1>
        </header>
        <div className="App-intro">
          <RecursiveProperty property={nestedJson} propertyName="Root Property" excludeBottomBorder={false} rootProperty={true}/>
        </div>
      </div>
    );
  }
}

export default App;

const nestedJson = {
  "name": "Bojan",
  "surname": "Markovski",
  "EMBG": "1812993450004",
  "age": 26,
  "birthday": {
    "date": 18,
    "month": 12,
    "year": 1993,
  },
  "isActive": true,
  "balance": "650 EUR",
  "gender": "male",
  "eyeColor": "green",
  "email": "markovski.bojan@hotmail.com",
  "company": "Symphony Solutions",
  "phone": {
     "mobile-number": "+389 78 424 423",
     "phone": "+389 2 776 082"     
  },
  "address": {
    "street": "Mihail Cakov",
    "number": "9/6-9",
    "coordinaties": {
      "latitude": "41.980076",
      "longitude": "21.447072"     
    },   
  },
  "hobbies": [
    "playing piano",
    "playing football"
  ],
  "friends": [
    "A lot of friends and still counting",
  ],
  "ProperyIsEmpty": ""
};