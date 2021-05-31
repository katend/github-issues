import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Badge from 'react-bootstrap/Badge'

import Issue from './components/Issue';
import Pagination from './components/Pagination';
import Notification from './components/Notification';

function App() {
  const [issues, setIssues] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [chosenIssue, setChosenIssue] = useState();
  const [recentHighlights, setRecentHighlights] = useState([]);
  const uniqueRecentIssues = Array.from(new Set(recentHighlights));
  const notificationCounter = uniqueRecentIssues.length;

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

  const onHighlight = (issue) => {
    setChosenIssue(issue)
    setRecentHighlights([...recentHighlights, issue])
  }

  return (
    <div>
      <h2>
        Recent highlighted issues <Badge variant="danger">{notificationCounter}</Badge>
      </h2>
      {uniqueRecentIssues.length > 0 ?
        <Notification uniqueRecentIssues={uniqueRecentIssues} />
         : null 
      }
      
      <h2>Github issues</h2>
        {issues.map((issue, index) => (
          <Issue 
            key={index}
            issue={issue}
            active={issue === chosenIssue}
            onHighlight={onHighlight}
          />
        ))}
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
