import React, { FC } from 'react';
import './post-card.scss';

interface PostCardProps {
  post: IPost;
}
const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-card__img">
        <img src={post.img} alt={`Post image of ${post.title}`} />
      </div>
      <div className="post-card__footer">
        <img className="post-card__footer__avatar" src={post.avatarImg} alt={`Avatar image of ${post.title}`} />
        <div className="post-card__footer__texts">
          <p className="post-card__footer__texts__title">{post.title}</p>
          <span className="post-card__footer__texts__hashtag">{post.hashTag}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
