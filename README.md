
# WDI SG 10
This is the main workspace for WDI SG 10. Here you will find all the course materials: assignments, starter-code etc.   
Lesson notes will be kept in the
[Wiki](https://github.com/ga-students/sg-wdi-10/wiki).
The weekly calendar can also be found here.

If you have issues you can [raise them as
issues](https://github.com/ga-students/sg-wdi-10/issues).

__You must also use this repo to notify of your completed homework. Follow the Contribution Instructions below.__

## Read Only Instructions
- The quickest way to get a copy of the files on your system, is to just clone this repository to your local machine.
    + `git clone https://github.com/ga-students/sg-wdi-10`

## Contribution Instructions

- So you can notify about project completion you should fork this repository
    + Hit the fork button on the top right (this stores a copy of it on your own github)
- Clone your forked repository on your local computer
    + `git clone http://url_of_your_fork_on_github.git`
- Add an upstream, so that your local copy's remote is pointing to my repository on Github (this repository)
    + Move into the the repository `cd sg-wdi-10`
    + `git remote add upstream https://github.com/ga-students/sg-wdi-10`
    + `git pull upstream master`

### Pushing Assignments

- Push to your local version (the one that you forked)
    + `git add --all`
    + `git commit -m "Your commit message"`
    + `git pull upstream master` to check you have the latest version before making any changes
    + `git push origin master`

## Create a Pull Request on GitHub

- Go to your repo on the GitHub website
- Click on the Pull Request tab
- Click on the `New Pull Request` to create a new Pull Request
- Make sure the destination for the pull request is set to my repository

Note: If you don't mention anything in the comments, I'll assume you had no problems at all with it!


## Calendar

### __Week 1 | Front-End Fundamentals__
| Monday | Tuesday | Wednesday | Thursday | Friday |
|----------------------------|-----------------------|----------------------------------|-------------------------------------|--------------------------------|
| Kickoff!!                  | Assessment & Solution | Assessment& Solution             | Assessment & Solution               | Assessment & Solution          |
| Assessment & Solution      | RLab: Command Line    | RLab: Build a Website            | RLab: Bootstrap Website Replication | RLab: Functions                |
|                            | HTML Basics           | Box Model and Positioning        | [Data Types, Variables, Arrays](https://github.com/ga-students/lesson-js-data-types-variables-and-arrays)       | [JS Debugging](https://github.com/ga-students/lesson-js-debugging)                   |
| LUNCH                      | LUNCH                 | LUNCH                            | LUNCH                               | LUNCH                          |
| Installing Software        | Chrome Dev Tools      | ILab: HTML CSS Site Replication  | Mastering the Flow                  | Fundamentals Review            |
| Navigating the File System | [CSS Selector Basics](https://github.com/ga-students/lesson-css-selector-basic) | Bootstrap CSS Slides  | [HLab: Functions](https://github.com/ga-students/lab-js-functions) | Review - Rock, Paper, Scissors |
|- | [CSS Selector Game](http://flukeout.github.io/)| Bootstrap CSS Lesson | - | HLab: JS Koans |
|- | [HLab: Simple Website](https://github.com/ga-students/lab-simple-website) | [HLab: Bootstrap Site Replication](https://github.com/claussian/lab-bootstrap-site-replication) |- |- |

<a name="week2"></a>
### __Week 2 | Front-end Fundamentals__

| [Monday](#w2d1)                  | [Tuesday](#w2d2)                      | [Wednesday](#w2d3)             | [Thursday](#w2d4)             | [Friday](#w2d5)                 |
| -------------------------------- | ------------------------------------- | ------------------------------ | ----------------------------- | ------------------------------- |
| [JS Objects][2-1A]               | [Assessment][2-2A] & [Solution][2-2Z] | [@Dom Manipulation][2-3A]      | [RLab: Shopping Cart][2-3E]   | [Project Spec][2-5A]            |
| [ILab: JS Objects][2-1B]         | [RLab: Objects & Arrays][2-1E]        | [ILab: Dom Manipulation][2-3B] | [ILab: Tic-Tac-Toe][2-4A]     | [Presentation Guidelines][2-5B] |
| LUNCH                            | [Function and Scope][2-2B]            | LUNCH                          | LUNCH                         | LUNCH                           |
| [JS Arrays][2-1C]                | LUNCH                                 | [JQuery Lesson][2-3C]          | [ILab: 10 Seconds Math][2-4B] | [Agile Framework][2-5C]         |
| [ILab: JS Arrays Problems][2-1D] | [Github Lesson][2-2C]                 | [JQuery Game][2-3D]            | -                             | Project Pitch Day1              |
| [HLab: Objects & Arrays][2-1E]   | [ILab: Github][2-2D]                  | [HLab: Shopping Cart][2-3E]   | -                             | -                               |
| -                                | [Read: Git][2-2E]                     | -                              | -                             | -                               |

[2-1A]: 00-programming/js-objects-lesson                                      "JS Objects"
[2-1B]: https://github.com/wdi-hk-12/lab-js-problems-objects                  "ILab: JS Objects"
[2-1C]: 00-programming/js-arrays-lesson                                       "JS Arrays"
[2-1D]: https://github.com/wdi-hk-12/lab-js-problems-arrays                   "ILab: JS Arrays Problems"
[2-1E]: https://github.com/wdi-hk-12/lab-js-problems-objects-and-arrays       "HLab: Objects & Arrays"

[2-2A]: 14-assessments/w02d2.md                                               "Assessment"
[2-2Z]: 14-assessments/w02d2-solution.md                                      "Assessment Solution"
[2-2B]: 00-programming/js-functions-and-scope                                 "Function and Scope"
[2-2C]: 01-workflow/git-github-lesson                                         "Github Lesson"
[2-2D]: https://github.com/wdi-hk-12/lab-git-github                           "ILab: Github"
[2-2E]: https://git-scm.com/doc                                               "Read: Git"

[2-3A]: 02-front-end-intro/js-dom-manipulation-lesson                         "Dom Manipulation"
[2-3B]: https://github.com/wdi-hk-12/lab-js-dom-manipulation                  "ILab: Dom Manipulation"
[2-3C]: 02-front-end-intro/js-jquery-lesson                                   "JQuery Lesson"
[2-3D]: http://jqexercise.droppages.com/                                      "JQuery Game"
[2-3E]: https://github.com/wdi-hk-12/lab-shopping-cart                        "HLab: Shopping Cart"

[2-4A]: https://github.com/wdi-hk-12/lab-js-tic-tac-toe                       "ILab: Tic-Tac-Toe Lab"
[2-4B]: https://github.com/wdi-hk-12/lab-ten-seconds-math                     "ILab: 10 Seconds Math"

[2-5A]: projects/project-01.md                                                "Project Spec"
[2-5B]: projects/presentation_guideline.md                                    "Presentation Guidelines"
[2-5C]: 01-workflow/agile-user-stories-wireframes-lesson                      "Agile Framework"


<a name="week3"></a>
### Week 3 | Project 1

Time   | [Monday](#w3d1)                          | [Tuesday](#w3d2)                        | [Wednesday](#w3d3)                      | [Thursday](#w3d4)                       | [Friday](#w3d5)                         |
------ | ---------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
09:00  | Daily Standup             | Daily Standup                           | Daily Standup                           | Daily Standup                           | Daily Standup                           |
10:00  |                            |                                         |                                         |                                         |                                         |
11:00  |                            |                                         |                                         |                                         |                                         |
12:00  | LUNCH                                    | LUNCH                                   | LUNCH                                   | LUNCH                                   | *JS CHANGE FREEZE* + LUNCH              |
13:00  |                                |                                         |                                         |                                         | Final touch up (HTML & CSS)             |
14:00  |                                          |                                         |                                         |                                         |                                         |
15:00  |                                          |                                         |                                         |                                         | Presentation                            |
16:00  | Demo                                     | Demo                                    | Demo                                    | Demo                                      |                                  |
17:00  | Done for Day                             | Done for Day                            | Done for Day                            | Done for Day                            | Done for Day                            |


<a name="week4"></a>
### __Week 4 | Node.js Introduction__

| [Monday](#w4d1)                  | [Tuesday](#w4d2)                      | [Wednesday](#w4d3)             | [Thursday](#w4d4)             | [Friday](#w4d5)                 |
| -------------------------------- | ------------------------------------- | ------------------------------ | ----------------------------- | ------------------------------- |
| Week 1-3 Retrospective               | Node.js First Steps | RLab: Express Routes      | Review JSON & AJAX   | RLab: Mongo Restaurants            |
| -         | -      | - | -     | Node.js: Models with Mongoose |
| LUNCH                            | LUNCH            | LUNCH                          | LUNCH                         | LUNCH                           |
| [Project 1 Code Review][4-2A]                | Templating in JS                     | Node.js: JSON          | MongoDB: Setup | HLab: Mongoose Modeling        |
| How to Structure Code| HLab: Express Routes                 | Node.js: AJAX            | MongoDB: Basics                            | -            |
| -   | -            | -   | ILab: Mongo Restaurants     | -  |


[4-2A]: projects/project_1_code_review.md                   "Project 1 Code Review"


## Licensing
0. All content is licensed under a CC­-BY-­NC-­SA 4.0 license.    
0. All software code is licensed under GNU GPLv3. For commercial use or
alternative licensing, please contact legal@ga.co.
