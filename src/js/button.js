"use strict"

const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: false }
  }

  render() {
    if (this.state.liked) {
      return "You liked this."
    }

    /* スタイリングをpropsで行うボタンコンポーネント。
    コンポーネントとしてラップしてしまえば、外側からtailwindのありようを気にすることがない。
    TODO: 関数型コンポーネント化して、propsで大小や色を変えられるようにする */
    return (
      <button class="rounded-full bg-gradient-to-tr from-orange-300 to-red-600 px-6 py-2 text-base font-bold text-white drop-shadow-lg hover:scale-95 hover:opacity-70 hover:transition-all">
        ボタン大
      </button>
    )
  }
}

const domContainer = document.querySelector(
  "#component_button"
)
const root = ReactDOM.createRoot(domContainer)
root.render(e(LikeButton))
