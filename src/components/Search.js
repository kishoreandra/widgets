import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  const onUserInput = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term) {
      searchWiki();
    }
  }, [term]);

  const searchData = results.map((res) => {
    return (
      <div className="item" key={res.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${res.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="render">
            <h2>{res.title}</h2>
          </div>
          <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label>Search Any Term:</label>
        <input onChange={onUserInput} value={term} type="text" />
      </div>
      <div className="ui celled list">{searchData}</div>
    </div>
  );
};

export default Search;
