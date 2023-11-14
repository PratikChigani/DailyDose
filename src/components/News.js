import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // getNews = async (url) => {
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: parsedData.articles,
  //     page: this.state.page,
  //     totalResults: parsedData.totalResults,
  //   });
  // };

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3e768e74275f424cb172d2818919cedd&pageSize=20&page=1`;
    let url = `https://newsapi.org/v2/top-Headlines?country=in&apiKey=3e768e74275f424cb172d2818919cedd&pageSize=${this.props.pageSize}&page=1`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePreviousBtnClick = async () => {
    let url = `https://newsapi.org/v2/top-Headlines?country=in&apiKey=3e768e74275f424cb172d2818919cedd&pageSize=${
      this.props.pageSize
    }&page=${this.state.page - 1}`;
    // let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3e768e74275f424cb172d2818919cedd&pageSize=20&page=${
    //   this.state.page - 1
    // }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNextBtnClick = async () => {
    let url = `https://newsapi.org/v2/top-Headlines?country=in&apiKey=3e768e74275f424cb172d2818919cedd&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    // let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=3e768e74275f424cb172d2818919cedd&pageSize=20&page=${
    //   this.state.page + 1
    // }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    // console.log(`render ${this.state.page} ${this.state.pageSize}`);
    return (
      <div className="container mt-3">
        <h1 className="text-center">DailyDose - Top Headlines</h1>
        <hr />
        {this.state.loading && <Spinner />}
        <div className="row mt-5">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : " "
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
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
              // this.state.page + 1 > 5
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
