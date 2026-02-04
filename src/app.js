import { UI } from './ui.js';
import { initReports } from './reports.js';
import $ from 'jquery';
import { getExpenses } from './storage.js'; //

$(document).ready(() => {
  new UI();
  initReports();
});
