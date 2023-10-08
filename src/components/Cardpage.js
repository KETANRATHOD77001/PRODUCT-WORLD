import React, { useState, useEffect } from 'react'
import Card from './Card';

function Cardpage(props) {
    const [article, setArticle] = useState([]);
    const [page, setPage] = useState(1);
    const [npage, setNpage] = useState(100);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&pageSize=${props.size}&page=${page}`
                const response = await fetch(url);
                const data = await response.json();
                const data1 = data.articles;
                setArticle(data1);
                console.log(data1)
            } catch (error) {
                console.log('Error fetching API data:', error);
            }
        };
        fetchData();
    }, []);

    const previouspage = async () => {
        try {
            setPage(page - 1);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5bd43506212c400ba60f57707622f742&pageSize=${props.size}&page=${page}`
            const response = await fetch(url);
            const data = await response.json();
            const data1 = data.articles;
            setNpage(Math.ceil(data.totalResults / props.size) - 1)
            setArticle(data1);
            console.log(page)
        } catch (error) {
            console.log('Error fetching API data:', error);
        }
    }

    const nextpage = async () => {
        try {
            setPage(page + 1);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5bd43506212c400ba60f57707622f742&pageSize=${props.size}&page=${page}`
            const response = await fetch(url);
            const data = await response.json();
            const data1 = data.articles;
            setNpage(Math.ceil(data.totalResults / props.size) - 1)
            setArticle(data1);
            console.log(page)
            console.log("sadfklsjdfklj")
        } catch (error) {
            console.log('Error fetching API data:', error);
        }
    }

    return (
        <div className='container my-3'>
            <h1 className='text-center'>Top Headlines from {props.category}</h1>
            <div className='row' >
                {article.map((news) => <div className='col-md-3'>
                    <Card image={news.urlToImage ? news.urlToImage : "https://media.cnn.com/api/v1/images/stellar/prod/230611095100-nicola-sturgeon-0320-restricted.jpg?c=16x9&q=w_800,c_fill"} url={news.url} title={news.title.slice(0, 48)} des={news.description ? news.description.slice(0, 88) : "..."} />
                </div>)}
            </div>
            <div className='d-flex justify-content-between'>
                <button disabled={page <= 1} type="button" className="btn btn-success" onClick={previouspage}>&laquo; Previous</button>
                <button disabled={page >= npage} type="button" className="btn btn-success" onClick={nextpage} id="next">Next &raquo;</button>
            </div>
        </div>
    )
}
// news.title?news.title.slice(0, 48):""
export default Cardpage