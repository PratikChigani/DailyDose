import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  getNews = async (url) => {
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page,
      totalResults: parsedData.totalResults,
    });
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-Headlines?country=in&apiKey=3e768e74275f424cb172d2818919cedd&pageSize=20&page=${this.state.page}`;
    this.getNews(url);
  }

  handlePreviousBtnClick = async () => {
    let url = `https://newsapi.org/v2/top-Headlines?country=in&apiKey=3e768e74275f424cb172d2818919cedd&pageSize=20&page=${
      this.state.page - 1
    }`;
    this.getNews(url);
    this.setState({ page: this.state.page - 1 });
    // console.log("Previous");
  };

  handleNextBtnClick = async () => {
    let url = `https://newsapi.org/v2/top-Headlines?country=in&apiKey=3e768e74275f424cb172d2818919cedd&pageSize=20&page=${
      this.state.page + 1
    }`;
    this.getNews(url);
    this.setState({ page: this.state.page + 1 });
    // console.log("Next");
  };

  render() {
    return (
      <div className="container mt-3">
        <h1 style={{ marginLeft: "400px" }}>DailyDose - Top Headlines</h1>
        <hr />
        <div className="row mt-5">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 50) : " "
                  }
                  imageUrl={element.urlToImage ? element.urlToImage : ""}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-5">
          <button
            type="button"
            onClick={this.handlePreviousBtnClick}
            disabled={this.state.page <= 1}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            onClick={this.handleNextBtnClick}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
