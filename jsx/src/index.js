import React from 'react';
import ReactDOM from 'react-dom';
import faker, { lorem } from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Onur'
          timeAgo='Today at 4:45PM'
          avatar={faker.image.avatar()}
          comment={faker.lorem.paragraph(2)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Yiğit'
          timeAgo='Today at 2:00AM'
          avatar={faker.image.avatar()}
          comment={faker.lorem.paragraph(1)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Öykü'
          timeAgo='Yesterday at 5:00PM'
          avatar={faker.image.avatar()}
          comment={faker.lorem.paragraph(1)}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
