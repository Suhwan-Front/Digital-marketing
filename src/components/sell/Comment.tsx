import React from 'react';

interface Comment {
  id: number;
  writer: string;
  content: string;
  date: string;
}

interface CommentListProps {
  comments?: Array<Comment>
}

const Comment: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <ul>
        {comments && comments.map((comment, idx) => (
        <li key={comment.id}>
          <div>
            <div>{comment.writer}</div>
            <div>{comment.content}</div>
            <div>{comment.date}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Comment;