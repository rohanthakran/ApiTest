import axios from "axios";
import React,{useEffect,useState} from "react"
import Card from "./Card"

import './App.css';

function App() {
  
  const [Myimage,setImage] = useState([]);

  useEffect( () =>  {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res=>{
      console.log(res)
   
      setImage(res.data)
      console.log("Mu Images",Myimage)
      
    })
    .catch(err =>{
      console.log(err);
    })
  },[])
  
  const onDelete = (id) =>{
    setImage((olddata) =>{
    return olddata.filter((curdata,indx) =>{
                return indx !==id;
        })
    })
}

  
  return (
    <div className="container1">
    
    {
      Myimage.slice(0, 9).map((photos,index) =>
        <Card key={photos.id} id={index} url={photos.url} deleteItme={onDelete} title ={photos.title}/>
       /* <li key={photos.id}><img src={photos.url} alt={this }></img></li> */
      )
    }
    {/* <ul>
				{Myimage.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
     {/* <div> {
        Myimage.data.map(photo => <img keey={photo.id} src={photo.data.url} alt="this is im"></img>)
      }
   </div> */}
    
   </div>
    
  
  );
}

export default App;
