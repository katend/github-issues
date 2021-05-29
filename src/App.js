import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Issue from './components/Issue';
import Pagination from './components/Pagination';

function App() {
  const [issues, setIssues] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [chosenIssue, setChosenIssue] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/repos/rails/rails/issues?page=${pagination}&per_page=5`)
    .then(response => response.json())
    .then(data => setIssues([...issues, ...data]));
  }, [pagination]);

  const handlePageChange = () => {
    setPagination(pagination + 1)
  };

  return (
    <div>
        {issues.map(issue => (
          <Issue 
            key={issue.id} 
            issue={issue}
            active={issue === chosenIssue}
            onHighlight={() => setChosenIssue(issue)}
          />
        ))}
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
