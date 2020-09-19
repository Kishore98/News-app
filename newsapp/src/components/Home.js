import React,{useState,useEffect} from 'react'
import './NewsApp.css'


function Home() {

    const [details,setDetails]=useState([]);
  
    const fetchNews=()=>{
        
        fetch('http://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=a123d8c08cb741f5a0dec6a2a0f7dc1d')
        
          
        .then(result=>result.json())
      //  .then(data=>console.log(data))
        .then(data=>setDetails((data.articles),console.log(data)))
        
    }
    useEffect(()=>{
        fetchNews()
    },[])
       

    return (
        <div>
            
            <h1 className='trend'> Trending  news</h1>          
            
            {
                details.map(detail=>(
                    
                    <div className='poda'>
                   <br></br> <h2 key={detail.id}>{detail.title} </h2>
                     
                    <h3 className='des'>{detail.description}</h3>
                    <a class='read' href={detail.url}>click here to read more</a>
                   <h4 className='author'>{detail.author}</h4><br></br>
                  <img src={detail.urlToImage} className='image' /><br></br>
                  <hr className="line"></hr>
                    </div>
                 
                ))
            }
         
    
            
        </div>
    )

        }
export default Home