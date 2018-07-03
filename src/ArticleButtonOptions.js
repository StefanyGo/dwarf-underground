import React, {Component} from 'react'

class ArticleButtonOptions extends Component {
    render() {
        return (
            <div className="article-links">
              <a className="article-link" href="#">
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
                <textarea rows="4" cols="50" name="comment" form="usrform">
                  Enter text here...
                </textarea>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
            </div>
        )
    }
}

export default ArticleButtonOptions