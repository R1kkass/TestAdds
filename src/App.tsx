import "./styles.css";
import Block from "./Block";

const arr = [
  {
    id: 1,
    message: "Печень утки разварная с артишоками.",
    weight: "0,5",
    name: "фуа-гра",
    count: [10, 1]
  },
  {
    id: 2,
    message: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    weight: "2",
    name: "рыбой",
    count: [40, 2],
    advice: true
  },
  {
    id: 3,
    message: "Печень утки разварная с артишоками.",
    weight: "5",
    name: "курой",
    count: [100, 5],
    disabl: true
  }
];

export default function App() {
  return (
    <div className="App">
      <p className="App__text">Ты сегодня покормил кота?</p>
      <div className="App__block">
        {arr?.map((arr) => (
          <Block
            key={arr.id}
            count={arr.count}
            message={arr.message}
            weight={arr.weight}
            name={arr.name}
            disabl={arr?.disabl}
            advice={arr?.advice}
          />
        ))}
      </div>
    </div>
  );
}
