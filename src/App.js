import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Badge from 'react-bootstrap/Badge'

import { addHighlightedIssues } from './redux';

import Issue from './components/Issue';
import Pagination from './components/Pagination';
import Notification from './components/Notification';

function App(props) {
  const [issues, setIssues] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [chosenIssue, setChosenIssue] = useState();

  const notificationCounter = props.highlightedIssues.length;

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
    props.addHighlightedIssue(issue)
  }

  return (
    <div>
      <h2>
        Recent highlighted issues <Badge variant="danger">{notificationCounter}</Badge>
      </h2>
   
      {props.highlightedIssues.length > 0 ?
        <Notification uniqueRecentIssues={props.highlightedIssues} />
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

const mapStateToProps = state => {
  return {
    highlightedIssues: state.highlightedIssues
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addHighlightedIssue: (issue) => dispatch(addHighlightedIssues(issue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
