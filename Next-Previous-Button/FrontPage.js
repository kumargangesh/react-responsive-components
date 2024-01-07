import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleComponent from './SingleComponent';
import "./Style.css";

function FrontPage() {

  const [pageNumber, changePageNumber] = useState(1);
  const [newsTitle, setNewsTitle] = useState([]);
  const [isNewsLoaded, changeNewsLoading] = useState(false);

  const emptyArray = () => {
    for(let i=0;i<newsTitle.length;i++){
      newsTitle.pop();
    }
    console.log("newsTitle length after empty : "+newsTitle.length);
  }

  useEffect(() => {
    (
      async () => {
        const news = await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-01-05&to=2024-01-05&sortBy=popularity&apiKey=7170c63a57604df9af3272078490ac14");
        const newsItem = await news.json();
        newsItem.articles.map((news) => {
          newsTitle.push(news);
        });
        changeNewsLoading(true);
      }
    )();

  });

  const getNewsList =async() => {
    const news = await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-01-05&to=2024-01-05&sortBy=popularity&apiKey=7170c63a57604df9af3272078490ac14&page="+ pageNumber);
    const newsItem = await news.json();
    newsItem.articles.map((news) => {
      newsTitle.push(news);
    });
    changeNewsLoading(true);
  }

  const previous = () => {
    if (pageNumber > 1) {
      emptyArray();
      console.log("previous clicked");
      changePageNumber((parseInt(pageNumber))-1);
      console.log("pagenumber : " + setPageNumber(pageNumber, 1));
      getNewsList();
    } else {
      alert("can't go previous");
    }
  }

  const next = () => {
    if (pageNumber < 5) {
      emptyArray();
      console.log("next clicked");
      changePageNumber((parseInt(pageNumber))+1);
      console.log("pagenumber : " + setPageNumber(pageNumber, 0));
      getNewsList();
    } else {
      alert("can't go next");
    }
  }

  const setPageNumber = (page, operand) => {
    if (operand === 0) {
      return (parseInt(page)) + 1;
    } else if (operand === 1) {
      return (parseInt(page)) - 1;
    }
  }

  return (
    <div>
      {
        isNewsLoaded === true ?
          <div>
            <center><u><h1>Previous-Next Button</h1></u></center>
            <div className="line"></div>
            {
              newsTitle.map((news) => {
                return (
                  <div style={{ marginTop: "1%" }} key={news.publishedAt
}>
                    <SingleComponent heading={news.title} />
                  </div>
                )
              })
            }
            <center><h1>{pageNumber}</h1></center>
            <div className="container">
              <div className="buttons d-flex justify-content-between">
                <button className="btn btn-outline-success" onClick={previous}>&#10094;</button>
                <button className="btn btn-outline-success" onClick={next}>&#10095;</button>
              </div>
            </div>
          </div>
          :
          console.log()
      }
    </div>
  )
}

export default FrontPage;
