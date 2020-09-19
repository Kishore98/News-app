import React,{useState,useEffect} from 'react'
import './NewsApp.css'

function Breaking() {
    const [myNews,setMyNews]=useState([])


    const fetchNews=()=>{
        fetch("http://newsapi.org/v2/top-headlines?"+"country=us&category=business&"+"apiKey=a123d8c08cb741f5a0dec6a2a0f7dc1d")
        .then(response=>response.json())
        .then(data=>setMyNews((data.articles),console.log(data)))
    }
    useEffect(()=>{
        fetchNews();
    })
    return (
        <div>
            <h1 className='trend'>Breaking News</h1>
            {
                myNews.map(myNew=>(
                    
                    <div className='poda'>
                   <br></br> <h2 key={myNew.id}>{myNew.title} </h2>
                     
                    <h3 className='des'>{myNew.description}</h3>
                    <a class='read' href={myNew.url}>click here to read more</a>
                   <h4 className='author'>{myNew.author}</h4><br></br>
                  <img src={myNew.urlToImage} className='image' /><br></br>
                  <hr className="line"></hr>
                    </div>
                 
                ))
            }
         
        </div>
    )
}

export default Breaking
