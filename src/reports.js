// src/reports.js

<<<<<<< HEAD
export class Reports {
  constructor() {
    this.chart = null;
    this.init(); //
  }

  init() {
    const ctx = $('#category-chart')[0].getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Spending by Category',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {}
    }); //

    this.updateChart();
=======
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
>>>>>>> 60d899e1dd730628a69ac13d2458a29605dbfbaa
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

<<<<<<< HEAD
    expenses.forEach((expense) => {
      if (!categoryTotals[expense.category]) {
        categoryTotals[expense.category] = 0; //
      }
      categoryTotals[expense.category] += expense.amount;
    });
=======
  render() {
    const { reports, loading } = this.state;
    if (loading) return <div>Loading...</div>;
>>>>>>> 60d899e1dd730628a69ac13d2458a29605dbfbaa

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
