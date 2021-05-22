import React, { useState, useEffect } from "react";
import { images } from "./utils";
import "./styles.css";

const App = () => {
  const [selectedImage, setSelectedImage] = useState();

  const changeHandler = (image) => setSelectedImage(image);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, []);

  return (
    <div className="app-container">
      <div className="nav-container">
        {images.map((image, i) => (
          <button key={i} onClick={() => changeHandler(image)}>
            {image.title}
          </button>
        ))}
      </div>
      <div className="main-image">
        <p>{`This is the view from ${selectedImage?.title}`}</p>
        <img alt="main-image" src={selectedImage?.url} />
      </div>

      <div className="images-container">
        {images.map((image, i) => (
          <div className="image-container">
            <img key={i} src={image.url} onClick={() => changeHandler(image)} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
