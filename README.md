# Customer Support Zone

## What is JSX?
JSX stands for JavaScript XML. It allows writing HTML-like syntax inside JavaScript. It makes UI code more readable and easier to write in React.

## Difference between State and Props
State:
- Managed inside component
- Can change over time
- Causes re-render when updated

Props:
- Passed from parent to child
- Read-only
- Cannot be modified by child

## What is useState?
useState is a React hook used to create and manage state inside functional components.

Example:
const [count, setCount] = useState(0);

## How to share state between components?
By lifting state up to the nearest common parent and passing it via props.

## Event Handling in React
React handles events using camelCase syntax.

Example:
<button onClick={handleClick}>Click</button>