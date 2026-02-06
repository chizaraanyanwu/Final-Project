// src/reports.js

import React from 'react';

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchReports();
  }

  async fetchReports() {
    try {
      const response = await fetch('/api/reports');
      const data = await response.json();
      this.setState({ reports: data, loading: false });
    } catch (error) {
      console.error('Error fetching reports:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { reports, loading } = this.state;
    if (loading) return <div>Loading...</div>;

    return (
      <div>
        <h1>Reports</h1>
        <ul>
          {reports.map(report => (
            <li key={report.id}>{report.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Reports;
