# Customer Support Zone

A React-based **Customer Support Ticket System** where support agents can manage customer issues, track tasks in progress, and mark them as resolved.

---

## Questions & Answers

### 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello World</h1>;
```

**Why JSX is used:**

* Makes UI code easier to read and write.
* Allows combining HTML structure with JavaScript logic.
* React converts JSX into regular JavaScript using tools like **Babel**.

---

### 2. What is the difference between State and Props?

| Feature    | State                                      | Props                                      |
| ---------- | ------------------------------------------ | ------------------------------------------ |
| Definition | Data managed inside a component            | Data passed from parent to child component |
| Mutability | Can be changed                             | Read-only                                  |
| Purpose    | Controls component behavior and updates UI | Passes data between components             |

Example of **Props:**

```jsx
<TicketCard title="Login Issue" />
```

Example of **State:**

```jsx
const [count, setCount] = useState(0);
```

---

### 3. What is the `useState` hook, and how does it work?

`useState` is a **React Hook** used to create and manage state in functional components.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Click
</button>
```

**How it works:**

1. `useState()` creates a state variable.
2. It returns the current state and a function to update it.
3. When the state changes, React **re-renders the component**.

---

### 4. How can you share state between components in React?

State can be shared by **lifting the state up** to the nearest common parent component and passing it down to child components through **props**.

Example:

Parent Component:

```jsx
const [tasks, setTasks] = useState([]);
```

Passing to child:

```jsx
<TaskList tasks={tasks} />
```

This allows multiple components to access and update the same state.

---

### 5. How is event handling done in React?

React handles events using **camelCase syntax** and by passing a function as the event handler.

Example:

```jsx
function handleClick() {
  console.log("Button clicked");
}

<button onClick={handleClick}>
  Click Me
</button>
```

Common React events include:

* `onClick`
* `onChange`
* `onSubmit`
* `onMouseEnter`
* `onKeyDown`

React events work similarly to DOM events but use a **Synthetic Event system** for better cross-browser compatibility.

---

## Technologies Used

* React
* Tailwind CSS
* DaisyUI
* React Toastify
* Font Awesome

---

## Features

* Customer ticket display
* Task progress tracking
* Mark tasks as resolved
* Toast notifications
* Responsive design
