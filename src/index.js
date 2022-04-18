import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';


$(document).ready(function() {
  $('#trivia').click(function() {

    let request = new XMLHttpRequest();
    const url = `https://opentdb.com/api.php?amount=6&type=boolean`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();
    getElements(response);
    
    function getElements(response) {
      $(".text1Showing").text("the answer is ${answer.main.}")
    }
  });
});
