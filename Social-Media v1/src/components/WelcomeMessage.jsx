/* eslint-disable react/prop-types */
function WelcomeMessage({ onGetPostsClick }) {
  return (
    <center className="welcome">
      <h1>Welcome, No posts yet.</h1>
      <button className="btn btn-info" onClick={onGetPostsClick}>
        Get Posts from Server
      </button>
    </center>
  );
}

export default WelcomeMessage;
