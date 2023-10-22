import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "Why do crowds look so low at Cricket World Cup?",
      description:
        "BBC Sport analyses why so many matches at the Cricket World Cup have been poorly attended so far.",
      url: "http://www.bbc.co.uk/sport/cricket/67118882",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1094D/production/_131471976_gettyimages-1707881409.jpg",
      publishedAt: "2023-10-20T14:22:22.3004629Z",
      content:
        "Empty stands have been a feature of Cricket World Cup games in India which don't feature the hosts\r\nTwo weeks in and, on the pitch, the Cricket World Cup in India is bubbling away nicely.\r\nShock resu… [+4532 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container mt-3">
        <h1 style={{ marginLeft: "400px" }}>DailyDose - Top Headlines</h1>
        <hr />
        <div className="row mt-5">
          <div className="col-md-3">
            <NewsItem
              title="Mytitle"
              description="Mydescription"
              imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1094D/production/_131471976_gettyimages-1707881409.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Mytitle"
              description="Mydescription"
              imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1094D/production/_131471976_gettyimages-1707881409.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Mytitle"
              description="Mydescription"
              imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Mytitle"
              description="Mydescription"
              imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}
