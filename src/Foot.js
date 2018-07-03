import React, {Component} from 'react';

class ClickBait extends Component {
    render() {
        return (
            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src={this.props.clickBait.img} alt={this.props.clickBait.alt} />
                <p>{this.props.clickBait.name}</p>
              </a>
            </div>
        )
    }
}

class Foot extends Component {
    constructor() {
        super()
        this.state = {
            clickBait: [
                { name: "Single Orcs in Indianapolis",
                  img: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
                  alt: "orc"
                },
                {
                  name: "You won't believe what's under this mountain",
                  img: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
                  alt: "mountain"
                },
                {
                  name: "Mine 20% more gold with One Weird Trick",
                  img: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
                  alt: "gold"
                },
                {
                  name: "Surprise for Indiana Hobbits born before 1999",
                  img: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
                  alt: "hobbit"
                }
            ]
        }
    }
    render() {
        return (
            <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            {this.state.clickBait.map(currentClickBait => <ClickBait clickBait={currentClickBait} /> )}
            </div>
        )
    }
}

export default Foot