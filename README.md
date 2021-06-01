### Setup
- Clone the app
- cd github-issues/
- run "npm install" (to install node_modules)
- run "npm start" to start the project
- Open [http://localhost:3000] to view the app in the browser.

### Technical decision
## Styling: 
- Putting CSS styles in index.css file and using 'className' property to implement the styles. It is easier to customize the styling acording to projects' needs.
- Use react-bootstrap because of the ease of use. Additionally, it has been evolving and growing along with React making it a suitable tool for React in terms of designing user interface. In addition, it removes the redundancies of ordering HTML elements and instead uses pure JavaScript to have React take over page-rendering entirely.
- However, the disadvatage of react-bootstrap is it may be unable to provide customized designs that meet project's specific needs


## Sharing state between components:
- Passing state as props from parent to child components
    Pros: keeping state in a few components and passing it to as many child components as needed which helps writing code that is easier to maintain
- using Redux for managing application state
    - Pros: creating a single store that can manage state and all communication, such as reading, updating or creating data can happen through the store. This helps prevent data inconsistency bugs from happening. 
    - Cons: for small applications with not much state, using Redux would unnecessarily over-complicate the app.

##  React hooks 
 - React hooks like useState and useEffect is used. 
    - Pros: They allow always using functions instead of having to switch between functions, classes, higher-order components, and render props. Therefore, it is easier to test and maintain. 
    - Cons: need to follow their rules and may be difficult to know which rules have been broken. Need time to practice using them and sometimes may lead to wrong use (eg. useCallback, useMemo).

 ## Need improvement
 - User interface of the app
 - Add routing
 - Move all state and data fetching to redux

## Prevent wasted renders
 - Use React hooks (e.g set dependecies value in the useEffect hook) and React.memo to prevent wasted renders

 ## Handle side-effects (e.g. data fetching)
 - Use the useEffect(callback, dependencies) hook to handle side-effects
 - Pros: the dependencies argument of useEffect helps control when the side-effects run. The side-effect runs only when the dependency value changes.
 - Cons: As the hook relies heavily on closures, may encounter stale closures issue. In addition, if not careful with what the side-effect does, the hook may trigger infinite loop of component renderings