import { useState } from 'react'

const LikeArea = () => {
  const [numberOfLikes, setNumberOfLikes] = useState(0)
  const increaseLikeHandler = () => {
    setNumberOfLikes(prev => {
      return prev + 1
    });
  }
  const decreaseLikeHandler = () => {
    if (numberOfLikes > 0)
      return setNumberOfLikes(numberOfLikes - 1);
  }
  return (
    <div>
      <button onClick={increaseLikeHandler}>Increase likes</button>
      <button onClick={decreaseLikeHandler}>Decrease likes</button>
      <h2>This page has been liked {numberOfLikes} times.</h2>
    </div>
  );
}

export default LikeArea