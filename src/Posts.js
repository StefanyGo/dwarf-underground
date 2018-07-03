import React, {Component} from 'react';
import PostsAuthor from './PostsAuthor';
import ArticleBody from './ArticleBody';
import ArticleButtonOptions from './ArticleButtonOptions'

class Posts extends Component {
    render(){
        return (
            <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <PostsAuthor />
            <ArticleBody />
            <ArticleButtonOptions />
          </div>
        )
    }
}

export default Posts