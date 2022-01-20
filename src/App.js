import "./styles.css";

function displayThings(first, last, apps, year, color) {
  return (
    <div>
      Hello {first} {last}! You like {apps} and the color {color}. You graduate
      in {year}. 
    </div>
  );
}

export default function App() {
  let people = [
    ["Victor", "Lymar", "Instagram", 1923, "green"],
    ["Traci", "Siebel", "Instagram", 2022, "purple"],
    ["Ida", "Voong", "Instagram", 2022, "blue"],
    ["Ana", "Rivera", "Instagram", 2051, "green"],
    ["Aidan", "Fuller", "Instagram", 2023, "red"],
    ["kyle", "wan", "Ticktok", 2023, "yeah"],
    ["Enjun", "Li", "Instagram", 2022, "black"],
    ["Luis", "Garcia", "Instagram", 2025, "black"],
    ["Amanda", "Yu", "Instagram", 2022, "blue"],
    ["Yifei", "Du", "Instagram", 2022, "black"],
    ["Hector", "Del Valle", "Instagram", 2022, "gray"],
    ["HaoYu", "Lin", "Instagram", 2023, "red"]
  ];

  let elements = [];
  for (let i = 0; i < 12; i++) {
    console.log(people[i]);
    let first = people[i][0];
    let last = people[i][1];
    let app = people[i][2];
    let year = people[i][3];
    let color = people[i][4];
    elements.push(displayThings(first, last, app, year, color));
  }

  return <div> {elements} </div>;
}
