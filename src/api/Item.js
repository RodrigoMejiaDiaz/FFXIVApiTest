import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const savedItem = localStorage.getItem(`item-${itemId}`);

    if (savedItem) {
      setItem(JSON.parse(savedItem));
      return;
    }

    fetch(`https://xivapi.com/item/${itemId}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        localStorage.setItem(`item-${itemId}`, JSON.stringify(data));
      });
  }, [itemId]);

  return (
    <>
      <h3>Item name: {item.Name}</h3>
      <p>Description: {item.Description}</p>
      <p>Price: {item.PriceMid} Gil</p>
      <p>URL: {item.Url}</p>
    </>
  );
}

export default Item;
