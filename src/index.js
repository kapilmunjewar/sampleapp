import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="sam"
          timeAgo="Today at 6.00PM"
          post="Nice post.."
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeAgo="Today at 4.00AM"
          post="Well done bro"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Jane"
          timeAgo="Yesterday at 4.00PM"
          post="Keep it up"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
