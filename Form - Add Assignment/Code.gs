function addRecord(courseTitleF, assignmentF, assignTypeF, dayStartDateF, dayDueDateF, timeDueDateF, noteF) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("[HIDDEN] Assignment Raw Data");
  if(courseTitleF != '' && assignmentF != '' && assignTypeF != '' && dayStartDateF != '' && dayDueDateF != '' && timeDueDateF != '' && noteF)
  {
    dataSheet.appendRow([courseTitleF, assignmentF, assignTypeF, dayStartDateF, dayDueDateF, timeDueDateF, noteF]);
    return "<span style=\"font-weight: bold\">Record Saved</span>";
  }
  else
  {
    return "<span style=\"font-weight: bold; color: red\">Not All Data Entered</span>";
  }
}

//Populate dropdown section

function addMenu() {
  var menu = SpreadsheetApp.getUi().createMenu('DADDY'); //change createMenu(___) to the name of the menu
  menu.addItem('Add Assignment', 'addAssign'); // if changing 'addAssign' be sure to change it in the function, also called addAssign, as well
  //add more menu items here
  menu.addToUi();
}

function addAssign() {
  var form = HtmlService.createHtmlOutputFromFile('FormList').setTitle('Add Assignment'); // change createHtmlOutputFromFile('___') to the name of the form html file
  SpreadsheetApp.getUi().showSidebar(form);
}

function getCourseTitleList() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var courseTitleSheet = ss.getSheetByName("[HIDDEN] Course Titles");
  var getLastRow = courseTitleSheet.getLastRow();
  return courseTitleSheet.getRange(2, 1, getLastRow - 1, 2).getValues();
}

function getAssignTypeList() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var assignTypeSheet = ss.getSheetByName("[HIDDEN] Assignment Types");
  var [headers, ...data] = assignTypeSheet.getDataRange().getValues();
  return data;
}

function onOpen(e) {
  addMenu();
}