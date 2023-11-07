import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem", height: "370px" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            height={"150px"}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ height: "30px" }}>
              {title}...
            </h5>

            <p className="card-text mt-5" style={{ height: "50px" }}>
              {description}...
            </p>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark mb-3"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
