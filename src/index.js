import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: ` background: pink`,
      backgroundStyle: `yellow`,
    }
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote(newData) {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      this.setState({opacity: 0});
      const response = fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          backgroundStyle: `${randomColor}`,
          colorStyle: `${randomColor}`,
        })
        setTimeout(() => {this.setState({currentQuote: ' ' + data.content, opacity: 1, author: '- ' + data.author,})}, 1000);
      })

  }

  render() {
    const accessToken = "ad39cde4932d44255558ce7e74a116d61123e511a8584f3cb901ca68d77ce525b3b4ce44a6ad020ec2806&v=5.131";
    console.log(this.state.opacity);
    return (
      <div className='wrapper' style={{backgroundColor: this.state.backgroundStyle, color: this.state.colorStyle,}}>
        <div id="quote-box">
            <figure>
            <blockquote id="text" style={{opacity: this.state.opacity}}><i class="fa-solid fa-quote-left"></i>{this.state.currentQuote}</blockquote>
            <figcaption id="author" style={{opacity: this.state.opacity}}>{this.state.author}</figcaption>
            </figure>
          <div className="buttons-section">
            <a id="tweet-quote"  href="twitter.com/intent/tweet" target="_blank"><button style={{backgroundColor: this.state.backgroundStyle}} className="btn"><i class="fa-brands fa-vk fa-2x"></i></button></a>
            <a id="new-quote" ><button style={{backgroundColor: this.state.backgroundStyle}} className="btn" onClick={() => this.changeQuote()}>New Quote</button></a>
          </div>
        </div>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
