import { useEffect, useState } from 'react';
import './App.css';

import Issue from './components/Issue';

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/rails/rails/issues?page=1&per_page=5')
    .then(response => response.json())
    .then(data => setIssues(data));
  }, [])

  return (
    <div>
        {issues.map(issue => (
          <Issue key={issue.id} issue={issue} />
        ))}
    </div>
  );
}

export default App;
