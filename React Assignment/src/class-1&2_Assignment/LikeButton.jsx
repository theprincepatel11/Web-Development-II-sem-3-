import { useState } from "react";

function LikeCount({ likes }) {
  return <h3>Likes: {likes}</h3>;
}

function LikeButtonComponent({ handleLike }) {
  return (
    <button onClick={handleLike}>
      Like 👍
    </button>
  );
}

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <h2>Like Button with Count Display</h2>

      <LikeCount likes={likes} />

      <LikeButtonComponent handleLike={handleLike} />
    </div>
  );
}

export default LikeButton;