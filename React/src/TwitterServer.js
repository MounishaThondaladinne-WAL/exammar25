import { useState, useEffect } from "react";
import axios from "axios";
const TwitterServer = () => {
  const [tweet, setTweets] = useState([]);
  useEffect(() => {
    getTweets();
  }, []);
  const getTweets = () => {
    axios
      .get("/tweets")
      .then((res) => {
        setTweets(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const tweetSubmit = (event) => {
    event.preventDefault();
    let tweetOb = {
      title: event.target.title.value,
      body: event.target.body.value,
      doc: event.target.doc.value,
      author: event.target.author.value,
      category: event.target.category.value,
    };
    axios
      .post("/tweets", tweetOb)
      .then((res) => {
        getTweets();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteTweet = (indexToDelete) => {
    axios
      .delete("/tweets/" + indexToDelete)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getTweets();
  };
  const deleteAll = () => {
    axios
      .put("/tweets/deleteall")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getTweets();
  };
  return (
    <div>
      <form onSubmit={tweetSubmit} className="Twitter-Form">
        <h1 className="twitter-Heading">Twitter App</h1>
        <input
          type="text"
          name="title"
          placeholder="Tweet Title"
          className="form-element"
        />
        <textarea
          name="body"
          placeholder=" Tweet Description"
          className="form-element description"
        ></textarea>
        <input type="date" name="doc" className="form-element" />
        <input
          type="text"
          name="author"
          placeholder="Tweet Author"
          className="form-element"
        />
        <select name="category" className="form-element">
          <option>Tweet Category</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Study">Study</option>
          <option value="Politics">Politics</option>
          <option value="Sports">Sports</option>
        </select>
        <button className="Twitter-Button">Add Tweet</button>
      </form>
      <div className="Twitter-Container">
        {tweet.map((val, index) => {
          return (
            <div className="Twitter-Div">
              <h3>Tweet {index + 1}</h3>
              <p>
                <b>Tweet Title: </b>
                {val.title}
              </p>
              <div className="Twitter-Description ">
                <b>Tweet Description : </b>
                {val.body}
              </div>
              <p>
                <b>Date of Creation: </b>
                {val.doc}
              </p>
              <p>
                <b>Tweet Author : </b>
                {val.author}
              </p>
              <p>
                <b>Tweet Category : </b>
                {val.category}
              </p>
              <button
                onClick={() => deleteTweet(index)}
                className="Twitter-Button"
              >
                Delete Tweet
              </button>
            </div>
          );
        })}
        <button onClick={deleteAll} className="Product-Button">
          Delete All Tweets
        </button>
      </div>
    </div>
  );
};
export default TwitterServer;
