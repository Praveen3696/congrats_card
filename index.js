const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="card-head">Congratulations</h1>
    <div className="lower-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="photo"
      />
      <h1 className="lower_head">Praveen K</h1>
      <p className="para">
        Vishnu Institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="photo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
