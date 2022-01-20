import "./styles.css";

function displayThings(first, last, apps, year, color, scene) {
  return (
    <div>
      Hello {first} {last}! You like {apps} and the color {color}. You graduate
      in {year}. You prefer {scene}.
    </div>
  );
}

export default function App() {
  let people = [
    ["Victor", "Lymar", "Instagram", 1923, "green", "mountains"],
    ["Traci", "Siebel", "Instagram", 2022, "purple", "mountains"],
    ["Ida", "Voong", "Instagram", 2022, "blue", "beach"],
    ["Ana", "Rivera", "Instagram", 2051, "green", "beach"],
    ["Aidan", "Fuller", "Instagram", 2023, "red", "beach"],
    ["kyle", "wan", "Ticktok", 2023, "yeah", "mountains"],
    ["Enjun", "Li", "Instagram", 2022, "black", "mountains"],
    ["Luis", "Garcia", "Instagram", 2025, "black", "beach"],
    ["Amanda", "Yu", "Instagram", 2022, "blue", "mountains"],
    ["Yifei", "Du", "Instagram", 2022, "black", "beach"],
    ["Hector", "Del Valle", "Instagram", 2022, "gray", "beach"],
    ["HaoYu", "Lin", "Instagram", 2023, "red", "beach"]
  ];

  let elements = [];
  for (let i = 0; i < 12; i++) {
    console.log(people[i]);
    let first = people[i][0];
    let last = people[i][1];
    let app = people[i][2];
    let year = people[i][3];
    let color = people[i][4];
    let scene = people[i][5];
    elements.push(displayThings(first, last, app, year, color, scene));
  }

  return <div> {elements} </div>;
}
