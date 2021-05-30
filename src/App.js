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
    fetchIssues(pagination)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchIssues = (page) => {
    fetch(`https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=5`)
      .then(response => response.json())
      .then(data => setIssues([...issues, ...data]));
  }
  
  const handlePageChange = () => {
    let newPage = pagination;
    newPage++;
    setPagination(newPage);
    fetchIssues(newPage);
  };

  return (
    <div>
        {issues.map((issue, index) => (
          <Issue 
            key={index}
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
