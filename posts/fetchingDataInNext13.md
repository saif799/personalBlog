---
title: "fetching data in React before server Componants"
date: "2023-07-31"
link: "/"
linkTitle: "React server components "
---

## Before React server components existed

Before **React server comonents** where a thing fetching data in react was somewhat strange, the most popular approach to fetch data in react back then and arguably still till now is by using the **useEffect** hook .

```javascript
  import React, { useState } from 'react';
  function App() {
  const [data, setData] = useState({ hits: [] });
  return (
      <ul>
      {data.hits.map(item => (
          <likey={item.objectID}>
          <ahref={item.url}>{item.title}</a>
          </li>
      ))}
      </ul>
  );
  }
  export default App;
```

this code will take our data that comes in the form of an array and then map over it giving us a **li** of each element in our array of data .

now we want to actually get our data and then set it in the **data** using the **setData** function as we said the common way to do this is by using **useEffect** hook and here is how

```javascript
useEffect(async () => {
  const result = await axios(
    "https://hn.algolia.com/api/v1/search?query=redux"
  );

  setData(result.data);
});
```

this code is very simple it declare a async function that will run every time the component re-render but we dont want that we dont want the data to be fetched every time the component re-render that's inefficient to avoid this we add an empty dependencies array to the **useEffect** hook so it only runs when the component get mounted for the first time and here is how you do that

```javascript
useEffect(async () => {
  const result = await axios(
    "https://hn.algolia.com/api/v1/search?query=redux"
  );

  setData(result.data);
}, []);
```

now we will only fetch the data once when the component is mounted but there is another catch According to the documentation every function annotated with async returns an implicit promise . however an effect hook should return nothing or a clean up function in this case the promise returned by the async function will be consider as a clean up function and we dont want that to avoid that Let's implement a workaround for it, by using the async function inside the effect.

```javascript
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      "https://hn.algolia.com/api/v1/search?query=redux"
    );

    setData(result.data);
  };

  fetchData();
}, []);
```

That's all there is to fetching data in React before **server components**. With the introduction of server components, things have changed, and we will explain how in the next article
