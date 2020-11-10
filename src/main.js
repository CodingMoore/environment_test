import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



import { Saysomething } from "./cards.js";
import { DatFunction } from "./cards.js";

$(document).ready(function() {
  let test = new Saysomething;
  alert(test.something);
  let datTest = new DatFunction;
  alert(datTest.nothingToSeeHere);
});

