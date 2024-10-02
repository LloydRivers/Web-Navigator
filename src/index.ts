import { Stack } from "./Stack";
import Logger from "./Logger";
import promptSync from "prompt-sync";

// Call the function to get the prompt function
const prompt = promptSync();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "Start Page";
let finish = false;
let showBack = false;
let showNext = false;
// ------------------------------
// Helper Functions
// ------------------------------
function showCurrentPage(action: string) {
  Logger.Log(`\n${action}`);
  Logger.Log(`Current page = ${currentPage}`);
  Logger.Log(`Back page = ${backPages.peek()}`);
  Logger.Log(`Next page = ${nextPages.peek()}`);
}

function newPage(page: string) {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("NEW: ");
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function backPage() {
  const poppedPage = backPages.pop();
  if (isString(poppedPage)) {
    nextPages.push(currentPage);
    currentPage = poppedPage;
    showCurrentPage("BACK: ");
  }
}
function nextPage() {
  const poppedPage = nextPages.pop();
  if (isString(poppedPage)) {
    backPages.push(currentPage);
    currentPage = poppedPage;
    showCurrentPage("NEXT: ");
  }
}

showCurrentPage("DEFAULT: ");

/*
 * The following strings are used to prompt the user
 */
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// ------------------------------
// User Interface Part 1
// ------------------------------
while (finish === false) {
  const answer = prompt(question);
  Logger.Log(`You entered: ${answer}`);
  const lowerCaseAnswer = answer.toLowerCase();
  if (
    lowerCaseAnswer !== "n" &&
    lowerCaseAnswer !== "b" &&
    lowerCaseAnswer !== "q"
  ) {
    // we create a new page based on the url
    newPage(answer);
  } else if (showNext === true && lowerCaseAnswer === "n") {
    // we navigate forward a page
    nextPage();
  } else if (showBack === true && lowerCaseAnswer === "b") {
    // we navigate back a page
    backPage();
  } else if (lowerCaseAnswer === "b") {
    // invalid input to a non-available option
    Logger.Log("Cannot go back a page. Stack is empty.");
  } else if (lowerCaseAnswer === "n") {
    // invalid input to a non-available option
    Logger.Log("Cannot go to the next page. Stack is empty.");
  } else if (lowerCaseAnswer === "q") {
    // we quit the program
    finish = true;
  }

  let instructions = baseInfo;
  if (backPages.peek() != null) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }
  if (nextPages.peek() != null) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  instructions = `${instructions}, ${quitInfo}`;
  Logger.Log(instructions);
}
// ------------------------------
// User Interface Part 2
// ------------------------------
