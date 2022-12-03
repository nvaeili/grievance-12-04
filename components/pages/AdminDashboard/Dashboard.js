import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import "./DashboardMP.css";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("contacts").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(), //spread operator
          key: doc.id, // `id` given to us by Firebase
        });
      });
      setPosts(getPostsFromFirebase);
      setLoading(false);
    });

    // return cleanup function
    return () => subscriber();
  }, [loading]); // empty dependencies array => useEffect only called once

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  return (
    <div className="container">
      <h1>Answers:</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.key}>
            {post.Name}
            {post.Email}
            {post.StudentNumber}
            {post.ContactNumber}
            {post.CurrentCollege}
            {post.CurrentYear}
            {post.ClassificationConcern}
            {post.NatureConcern}
            {post.AboutConcern}
            {post.Concern}
          </div>
        ))
      ) : (
        <h1>no answers yet :(</h1>
      )}
    </div>
  );
};

export default Dashboard;
