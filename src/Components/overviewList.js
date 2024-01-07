import React from 'react';
import "./overviewList.css";

const OverviewList = ({ data }) => {
  const renderList = (items, level = 0) => {
    return (
      <ul className={`indent-level-${level}`}>
        {items.map((item, index) => (
          <li key={index} className="overview-item" style={{ marginLeft: `${level * 20}px` }}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            {item.subitems && renderList(item.subitems, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="overview-list">{renderList(data)}</div>;
};

export default OverviewList;