
# React Trainee Evaluation Test

## Purpose:
This test is designed to evaluate whether you are ready to work on real-world React projects. It checks your understanding of JavaScript, React fundamentals, problem solving, debugging, and professional workflow.

## Section 1 – JavaScript Fundamentals (30 Marks)

#### 1. Difference between == and ===

- The == operator is known as the loose equality operator. It compares two values for equality after performing type coercion, meaning it converts the values to the same type before comparing them.
- The === operator is called the strict equality operator. It checks for equality without type conversion, meaning both the value and the type must be exactly the same for the comparison to return true.

#### 2. What is a closure?

- A closure is a versatile concept, most commonly a programming feature where an inner function retains access to variables from its outer (enclosing) function's scope, even after the outer function has finished running, allowing for private data and state preservation.

#### 3. What is destructuring?

- Destructuring is a programming feature that unpacks values from arrays, objects, or other iterables into distinct variables in a single, concise statement, making code cleaner and easier to read by extracting data without manual indexing or property access. It's widely used in JavaScript (ES6+) to assign array elements or object properties to variables, effectively "breaking down" complex data structures into simpler, usable parts. 

#### 4. Difference between map and forEach

- `map()`

    - Returns: A new array with transformed elements.
    - Purpose: Transforming data, creating a new array from an old one (e.g., doubling numbers, extracting properties).
    - Chainable: Yes (e.g., array.map().filter().reduce()).
    - Best for: When you need the resulting array for further processing or rendering.

- `forEach()`

    - Returns: undefined.
    - Purpose: Performing actions (side effects) on each element, like printing to the console, updating a database.
    - Chainable: No, because it returns undefined.
    - Best for: When you only need to iterate and do something with each item, not create a new collection. 

## Section 2 – React Fundamentals (30 Marks)

#### 1. Difference between props and state

- Props (Properties)
    - Purpose: Pass data and functions from parent to child components. 
    - Ownership: Owned by the parent component. 
    - Mutability: Immutable (read-only) within the child component; the child cannot change them directly. 
    - Use Case: Customizing a component's appearance or behavior, like a title prop for a Header.

- State
    - Purpose: Manage internal, component-specific data that changes over time.
    - Ownership: Owned and managed within the component itself.
    - Mutability: Mutable (changeable) using functions like setState or useState hook.
    - Use Case: Counters, form inputs, loading indicators, toggles.  

#### 2. What is useEffect and when do you use it?

- The useEffect Hook in React allows you to perform side effects in functional components. Side effects are actions that occur outside the normal React rendering process, such as interacting with the browser API, fetching data, or managing subscriptions to external systems. It combines the functionality of the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods from class components. 

#### 3. Why does useEffect run twice in development sometimes?

- React intentionally mounts, unmounts, and then re-mounts every component once in development with StrictMode to help developers write more resilient and predictable code: 

#### 4. What is controlled vs uncontrolled input?

- Controlled Input
    - State Management: Handled by React state (e.g., useState).
    - Data Flow: State dictates the input's value; onChange updates the state.
    - Source of Truth: The React component's state.
    - Validation: Easy real-time validation and formatting.
    - Use Case: Complex forms needing immediate feedback, dynamic UI changes. 

- Uncontrolled Input
    - State Management: Handled by the DOM.
    - Data Flow: Input manages its own state; access value via ref.
    - Source of Truth: The DOM element itself.
    - Validation: Usually done after submission.
    - Use Case: Simple forms, basic input capture, less boilerplate. 

## Section 3 – Real World Assignment (40 Marks)

### Build a Task Manager App :

* Features : 

    - Add a task (title, description, status)
    - Edit a task
    - Delete a task
    - Status: Todo / In Progress / Done
    - Filter tasks by status
    - Persist data in localStorage
    - Simple form validation
    - Clean UI (Tailwind or CSS)

* Bonus (Optional) :

    - Search tasks
    - Drag & drop
    - Dark mode

* Technical Rules :

    - Use React with Vite or Next.js
    - Use functional components only
    - No external state libraries
    - Handle errors and empty states
