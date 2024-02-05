import React ,{useState,useEffect} from 'react';

import './App.css';
import Fetch from './Component/Fetch';
import Search from './Component/Search';

function App() {
  const apiKEY = '2bb2cc83197443f8b7c3ce9a4c6d5639'
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [url,setUrl] = useState('https://newsapi.org/v2/top-headlines/sources?apiKey='+apiKEY)

  const handleSearchSelection = (updatedOptions) => {
    setSelectedOptions(updatedOptions);
  };

  useEffect(()=>{
    let array=''
    if (selectedOptions.length > 0) {
      selectedOptions.map((option,index)=>{
        array+=option.search+'='+option.option+'&'
      })
    }
    setUrl(`https://newsapi.org/v2/top-headlines/sources?${array}apiKey=${apiKEY}`)
  },[selectedOptions]);
  return (
    <div className='main'>
      <h1 className='heading'> News App </h1>
      <Search onSearchSelection={handleSearchSelection} />
      {/* <Search/> */}
      <Fetch url={url}/>
    </div>
  );
}

export default App;
