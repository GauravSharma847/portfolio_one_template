import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
        id : "featured",
        title : "Featured",
    },
    {
        id : "scraper",
        title : "Espn Cricinfo webScraper",
    },
    {
        id : "jira",
        title : "Jira Clone App",
    },
    {
        id : "excel",
        title : "Excel Clone App",
    },
    {
        id : "movies",
        title : "Movies App",
    },
    {
        id : "instagram",
        title : "Insta Reels",
    },
    {
        id : "ecommerce",
        title : "E-Commerce",
    },
];

useEffect(() =>{
  switch (selected) {
    case "featured":
      setData(featuredPortfolio);
      break;
    case "web":
      setData(webPortfolio);
      break;
    case "mobile":
      setData(mobilePortfolio);
      break;
    case "design":
      setData(designPortfolio);
      break;
    case "content":
      setData(contentPortfolio);
      break;
    default:
      setData(featuredPortfolio);
  }
},[selected])
  return (
    <div className="portfolio" id = "portfolio">
      <h1>Portfolio</h1>
      <ul>
        {/* <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Blog</li>
        <li>Branding</li> */}

        {list.map((item) => (
          <PortfolioList title = {item.title} 
          active = {selected === item.id}
          setSelected = {setSelected}
          id = {item.id}/>
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}