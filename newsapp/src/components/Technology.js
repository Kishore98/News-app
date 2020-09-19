import React,{useState,useEffect} from 'react'

function Technology() {
    const [trending,setTrending]=useState([]);

    const fetchNews=()=>{
        fetch('http://newsapi.org/v2/top-headlines?' + 'country=in&category=technology&' + 'apiKey=a123d8c08cb741f5a0dec6a2a0f7dc1d')
        .then(result=>result.json())
       // .then(data=>console.log(data))
        .then(data=>setTrending((data.articles),console.log(data)))
    }
    useEffect(()=>{
        fetchNews()
    },[])

    return (
        <div>
             <h1 className='trend'>Tech News</h1>           
            {
                trending.map(trend=>(
                    
                    <div className='poda'>
                   <br></br> <h2 key={trend.id}>{trend.title} </h2>
                     
                    <h3 className='des'>{trend.description}</h3>
                    <a class='read' href={trend.url}>click here to read more</a>
                   <h4 className='author'>{trend.author}</h4><br></br>
                  <img src={trend.urlToImage} className='image' /><br></br>
                  <hr className="line"></hr>
                    </div>
                 
                ))
            }
         
         
    
        </div>
    )
}

export default Technology
