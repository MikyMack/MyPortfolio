import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaAddressCard } from "react-icons/fa";
import ImageOne from "../../images/snjmart.jpg";
import ImageTwo from "../../images/quiz.webp";
import ImageThree from "../../images/netflix.jpg";
import ImageFour from "../../images/worldwise.png";
import ImageFive from "../../images/eatandsplit.jpg";
import ImageSix from "../../images/blog.jpg";
import ImageSeven from "../../images/tesla.jpg";
import ImageEight from "../../images/bookmyshow.jpg";
import ImageNine from "../../images/portfolio.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 1,
    name: "Ecommerce",
    image: ImageOne,
    categories: [1, 2],
    link: "https://snjmart.shop/",
  },
  {
    id: 2,
    name: "React Quiz",
    image: ImageTwo,
    categories: [1, 2],
    link: "https://github.com/MikyMack/react-quiz",
  },
  {
    id: 3,
    name: "Netflix Clone",
    image: ImageThree,
    categories: [3],
    link: "https://github.com/MikyMack/Netflix-Clone",
  },
  {
    id: 4,
    name: "World Wise",
    image: ImageFour,
    categories: [1, 2],
    link: "https://github.com/MikyMack/World-Wise",
  },
  {
    id: 5,
    name: "Eat and Split",
    image: ImageFive,
    categories: [1, 2],
    link: "https://github.com/MikyMack/Eat-and-split",
  },
  {
    id: 6,
    name: "Blogs",
    image: ImageSix,
    categories: [1, 2],
    link: "https://github.com/MikyMack/atomic-blog",
  },
  {
    id: 7,
    name: "Tesla Clone",
    image: ImageSeven,
    categories: [3],
    link: "https://mikymack.github.io/Tesla-Clone/",
  },
  {
    id: 8,
    name: "Book My Show Clone",
    image: ImageEight,
    categories: [3],
    link: "https://github.com/MikyMack/Book-my-show-clone",
  },
  {
    id: 9,
    name: "Portfolio",
    image: ImageNine,
    categories: [3],
    link: "https://mikymack.github.io/portfolio/",
  },
];
const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "React Projects",
  },
  {
    filterId: 3,
    label: "Designs",
  },
];

// ... (your imports)

export default function Portfolio() {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
    setHoveredValue(null); // Reset hoveredValue when changing the filter
  }

  function handleHover(itemId) {
    setHoveredValue(itemId);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) =>
          item.categories?.includes(filteredvalue)
        );

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaAddressCard size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={`filterItem${item.filterId}`}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio__content__cards__item"
              onMouseEnter={() => handleHover(item.id)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="mine" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {item.id === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, '_blank')}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
