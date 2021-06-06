import React from "react";
import { animated, interpolate } from "react-spring";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, objs } = this.props;
    const { text, pic } = objs[i];

    return (
      <animated.div
        key={i}
        className="card-container"
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          className="card"
          style={{
            transform: interpolate([rot, scale], trans),
            backgroundImage: `url(${pic})`
          }}
        >
          <div>
              <h2>{text}</h2>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default Card;