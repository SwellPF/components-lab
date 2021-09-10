import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">  
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:54pm" text="Super cool!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:03am" text="I'm sleepy...Zzzz" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 8:21pm" text="ROFL OMG!!!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>


    );
};

ReactDOM.render(<App />, document.querySelector('#root'));