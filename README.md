# as-be

![Deploy to Amazon ECS](https://github.com/patFish/as-be/workflows/Deploy%20to%20Amazon%20ECS/badge.svg)

As part of the application process I got challenged by the task to develop an e2e prototype to display fleet information. This include this repo containing the backend to expose by an Rest-full api.

## Architecture

![Overview](/docs/backend.jpg)

## Requirements

| Requirement            | implemented | Note                                |
| ---------------------- | ----------- | ----------------------------------- |
| express.js             | :check:     |                                     |
| build on typescript    | :check:     |                                     |
| dockerized             | :check:     |                                     |
| deployed by GH Actions | :check:     |                                     |
| enabled tests          | :check:     | cypress framework                   |
| test coverage          | :x:         | no meaningful coverage achieved atm |
| deploy in stages       | :check:     | fails after tests                   |
