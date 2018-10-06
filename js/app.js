const xButtons = document.querySelectorAll(".hide-modal"),
  subGoalButtons = document.querySelectorAll(".r-item");

function hideModal() {
  const modal = document.querySelector(".modal-overlay");
  modal.style.display = "none";
}

xButtons.forEach(function(button) {
  button.addEventListener("click", hideModal);
});

class SubGoal {
  constructor(title, questions, type) {
    this.title = title;
    this.questions = questions;
    this.type = type;
    this.image = null;
    this.links = [];
  }
}

let questionsArray = [
  {
    type: "add-scene",
    title: "Add Game Play Area",
    questions: [
      "Have the images been loaded?",
      "Is there any code that would render the game play area in the starter code?",
      "Should it already be rendering?",
      "Did you check the console for any information?"
    ]
  },
  {
    type: "fix-console",
    title: "Resolve Console Errors",
    questions: [
      "Do you know why those errors are there?",
      "What lines of code are making that happen?",
      "Can you resolve these errors without creating an allEnemies and player variables?",
      "What do you usually do with code that you want to save until later but don't want to execute at the moment?"
    ]
  },
  {
    type: "object-syntax",
    title: "ES5 or ES6",
    questions: [
      "Are you going to proceed with ES5 syntax or change to ES6?",
      "Can you identify different object syntax?",
      "What are the key differences between them?",
      "Are there any similarities between Player and Enemy that would make room for a superordinate object?"
    ]
  },
  {
    type: "create-enemy",
    title: "Finish Enemy Object",
    questions: [
      "Does it have a render method?",
      "Have you added the other properties necessary for an Enemy instance to render?",
      "Have you added update position functionality?",
      "Have you created instances of enemies?",
      "Have you created an allEnemies array?",
      "Do you have an example of an object with properties and methods to guide your efforts?"
    ]
  },
  {
    type: "create-player",
    title: "Build Player Object",
    questions: [
      "Have you looked at the Enemy obect to guide your efforts?",
      "What properties and methods will the Player object need?",
      "Do you have an example of an object with properties and methods to guide your efforts?"
    ]
  },
  {
    type: "create-modal",
    title: "Construct Modal",
    questions: [
      "Have you Googled 'modal javascript'?",
      "Have you created a created a working modal in CodePen?"
    ]
  },
  {
    type: "render-enemies",
    title: "Render Enemies",
    questions: [
      "How is the canvas being drawn?",
      "What properties does the render method need?",
      "How can you add object properties when they are being constructed?",
      "Are you familiar with how canvas renders images?",
      "Did you create 3 instances of Enemy and put them in allEnemies array?",
      "Did you comment out any code in Engine.js?"
    ]
  },
  {
    type: "render-player",
    title: "Render Player",
    questions: [
      "How is the canvas being drawn?",
      "What properties does the render method need?",
      "How can you add object properties when they are being constructed?",
      "Are you familiar with how canvas renders images?",
      "Did you create an instance of Player?",
      "How did you decide on the name for the Player instance?",
      "What variable was the console error not recognizing?",
      "Did you comment out any code in Engine.js?"
    ]
  },
  {
    type: "move-enemies",
    title: "Move Enemies",
    questions: [
      "How are images moved around the canvas?",
      "What coorinate changes to move images further right on the canvas?",
      "How can you change a Number variable programmatically?",
      "Did you locate the Enemy method where update enemy position method goes?",
      "Did you multiple whatever value you are adding to the x-coordinate times 'dt'?"
    ]
  },
  {
    type: "move-player",
    title: "Move Player",
    questions: [
      "How are images moved around the canvas?",
      "What coorinate changes to move images further right on the canvas?",
      "How can you change a Number variable programmatically?",
      "Did you add an update method to your Player object?",
      "Did you multiple whatever value you are adding to the x-coordinate times 'dt'?"
    ]
  },
  {
    type: "handle-collision",
    title: "Handle Collision",
    questions: [
      "Are you enemies moving?",
      "Is you player moving?",
      "Does your player have a resetPosition method?",
      "What exactly are you checking for?",
      "Can you write what needs to happen as an if.. then.. statement?",
      "What properties of player and enemy intersect?",
      "Can you identify the coordinates of your player as the move around the board?"
    ]
  },
  {
    type: "handle-win",
    title: "Handle Win",
    questions: [
      "What y-coordinate will your player be at when they win?",
      "Have you created a resetPlayer method?",
      "Where do you need to place your openModal function?",
      "Did you make sure the up arrow is inactive once it reaches the winning y-coordinate?"
    ]
  },
  {
    type: "submit-project",
    title: "Submit Project",
    questions: ["Congratulations!!"]
  }
];

let subGoalsArray = questionsArray.map(
  questionObject =>
    new SubGoal(
      questionObject.title,
      questionObject.questions,
      questionObject.type
    )
);

function getSubGoalSupport(e) {
  let currentQuestion = e;
  const title = document.querySelector(".support-header"),
    content = document.querySelector(".support-content"),
    modalExample = `<a target="_blank" class="link" href="https://codepen.io/goldiamond2k/pen/XxKXdL?editors=1010"><li class="bullets">Here is a modal I have on CodePen.</li></a>`,
    es6Example = `<a target="_blank" class="link" href="https://codepen.io/goldiamond2k/pen/GYjWjN?editors=0012"><li class="bullets">Here is an ES6 class example</li></a>`;
  subGoalsArray.map(subGoal => {
    if (currentQuestion === subGoal.type) {
      title.innerText = subGoal.title;
      content.innerHTML = subGoal.questions
        .map(question => `<li class="bullets">${question}</li>`)
        .join("");
      if (currentQuestion === "create-modal") {
        content.innerHTML += modalExample;
      }
      if (
        currentQuestion === "object-syntax" ||
        currentQuestion === "create-enemy" ||
        currentQuestion === "create-player"
      ) {
        content.innerHTML += es6Example;
      }
    }
  });
}

subGoalButtons.forEach(function(subGoal) {
  subGoal.addEventListener("click", function() {
    getSubGoalSupport(this.id);
  });
});
