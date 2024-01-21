import React, { useEffect, useState } from 'react';
import SingleComponent from './SingleComponent';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Style.css";
import EndMessage from './EndMessage';


function FrontPage() {

  const [News, loadNews] = useState([]);
  const [PageNumber, changePageNumber] = useState(1);
  const [newsLoaded, toggleNewsLoaded] = useState(false);
  const [isNext, toggleIsNext] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getNewsList();
  }, []);

  const getNewsList = async () => {
    const news = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=7170c63a57604df9af3272078490ac14&page=" + PageNumber);
    console.log(news);
    const newsItem = await news.json();
    if (news.status === 200 && newsItem.articles.length > 0) {
      console.log(newsItem);
      newsItem.articles.map((news) => {
        News.push(news);
      });
      console.log("News in useEffect : " + News);
      console.log("in useEffect, length : " + News.length);
      setTotal(newsItem.totalResults);
      toggleNewsLoaded(true);
      toggleIsNext(true);
      changePageNumber(PageNumber + 1);
      console.log("Page number : "+PageNumber);
    } else {
      console.log("No new news avaiable");
      setTotal(News.length);
    }
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={News.length}
        next={getNewsList}
        hasMore={News.length < total}
        loader={<center><h1>Loading...</h1></center>}
        endMessage={<EndMessage />}
      >
        {
          newsLoaded === true ?
            <div className="container">
              <center><u><h1>Infinite-Scroll</h1></u></center>
              <div className="row" style={{marginBottom: "5%"}}>
                {
                  isNext === true ?
                    News.map((news) => {
                      return (
                        <div className="col-md-4" style={{ marginTop: "2.5%" }} key={news.publishedAt}>
                          <SingleComponent title={news.title.slice(0, 40)+"..."} info={news.title.slice(0, 100)+"..."} />
                        </div>
                      )
                    })
                    :
                    <div className="container">
                      <center><h1>All the top News headlines has been fetched</h1></center>
                    </div>
                }
              </div>
            </div>
            :
            console.log("News not loaded")
        }
      </InfiniteScroll>
    </div>
  )
}

export default FrontPage;


// steps to implement Infinite-Scroll :

// 1. first-of-all install package :

//     npm install --save react-infinite-scroll-component

// 2. after that implment the above code 

// that's all enjoy the Infinit-Scroll using React.JS


