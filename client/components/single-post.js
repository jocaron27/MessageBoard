import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PostReplies from './post-replies';
import AddReply from './add-reply';


function SinglePost(props) {
    const { postId, posts } = props;
    let currentPost = posts.find(post => post.id === postId)
    return (
    <div className="post">
    {currentPost ? (
        <div>
            <div>
                <div>{currentPost.title}</div>
                <div>By: {currentPost.user}</div>
                <div>On: {currentPost.date}</div>
                <Link to="/"><button>Back to Posts</button></Link>
                <div>{currentPost.text}</div>
            </div>
            <hr />
            <div>Responses:</div>
            <PostReplies postId={postId} />
            <AddReply postId={postId} />
        </div>
        ) : <span />
    }
    </div>)
}

const mapStateToProps = function (state, ownProps) {
    const postId = Number(ownProps.match.params.id);
    return {
        posts: state.allPosts,
        postId
    }
};

const mapDispatchToProps = function (dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);