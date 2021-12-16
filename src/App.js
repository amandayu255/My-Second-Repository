import "./styles.css";

function displayThings(first, last, apps) {
  return (
    <div>
      Hello {first} {last}! You like {apps}.
    </div>
  );
}

export default function App() {
  let people = [
    ["Victor", "Lymar", "Instagram"],
    ["Traci", "Siebel", "Instagram"],
    ["Ida", "Voong", "Instagram"],
    ["Ana", "Rivera", "Instagram"],
    ["Aidan", "Fuller", "Instagram"],
    ["kyle", "wan", "Ticktok"],
    ["Enjun", "Li", "Instagram"],
    ["Luis", "Garcia", "Instagram"],
    ["Amanda", "Yu", "Instagram"],
    ["Yifei", "Du", "Instagram"],
    ["Hector", "Del Valle", "Instagram"],
    ["HaoYu", "Lin", "Instagram"],
    []
  ];

  let elements = [];
  for (let i = 0; i < 12; i++) {
    console.log(people[i]);
    let first = people[i][0];
    let last = people[i][1];
    let app = people[i][2];
    elements.push(displayThings(first, last, app));
  }

  return <div> {elements} </div>;
}
