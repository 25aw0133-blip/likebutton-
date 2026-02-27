import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>Likes</p>
      <p>❤️ {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>+1</button>
    </div>
  );
}

export default LikeButton;
