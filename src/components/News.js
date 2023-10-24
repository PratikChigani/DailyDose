import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
    console.log("constructor");
  }

  async componentDidMount() {
    console.log("componentDidMount");
    let url =
      "https://newsapi.org/v2/top-Headlines?country=in&apiKey=3e768e74275f424cb172d2818919cedd";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    // console.log(parsedData);
  }

  render() {
    console.log("render");
    // let { url, title, description, urlToImage } = this.props;
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
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://cdn.ndtv.com/common/images/ogndtv.png"
                  }
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
