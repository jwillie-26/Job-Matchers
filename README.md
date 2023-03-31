# Job Matchers

[![Build Status](https://mattbrictson.semaphoreci.com/badges/rails-template/branches/main.svg?style=shields)](https://mattbrictson.semaphoreci.com/projects/rails-template)


## Main Features

* User can add job listings
* User can view info about listings
* User can create admin for the page

## ERD Diagram

![Job Matchers](https://user-images.githubusercontent.com/105637783/229124124-c5d9e53a-3121-4375-b17d-39925d947376.png)


### Project Setup

#### Ruby Version

2.4.7

[heroku Deployment](https://dashboard.heroku.com/apps/stark-everglades-43660)

View Demo-https://job-matchers.vercel.app/

### Rails Endpoints


```
GET /jobs
```

Return JSON data in the format below:

```
[  

 {name: "Human Resource"},
   {name: "Programming"},
   {name: "Data Science"},
   {name: "Others"}

]
```


```
GET /jobs listings
```
Return JSON data in the format below:

```
[  

{job_title: "Senior Program Officer", category_id: 1, description: "Monitors and analyzes programme/project development and implementation; reviews relevant documents and reports; identifies problems and issues to be addressed and proposes corrective actions; liaises with relevant parties; identifies and tracks follow-up actions", qualification: "at least a bachelor's degree in a field such as human resources, accounting, business management, business administration or communications", deadline:"3rd January 2023", employee_id: 1, employer_id: 1},
    {job_title: "Full stack developer",  category_id: 2, description: "Designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.", qualification: "Degree in computer science.Strong organizational and project management skills.Proficiency with fundamental front-end languages such as HTML, CSS, and JavaScript.Familiarity with JavaScript frameworks such as Angular JS, React, and Amber.Proficiency with server-side languages such as Python, Ruby, Java, PHP, and .Net.Familiarity with database technology such as MySQL, Oracle, and MongoDB.Excellent verbal communication skills. Good problem-solving skills. Attention to detail.", deadline:"7th February 2023", employee_id: 2, employer_id: 2},
    {job_title: "Data Analyst",  category_id: 3, description: "Review data to identify key insights into a business's customers and ways the data can be used to solve problems", qualification: "a bachelor's degree in math, statistics, economics, computer science, or another quantitative field.", deadline:"26th January 2023", employee_id: 1, employer_id: 3},
    {job_title: "Full stack developer",  category_id: 1, description: "Designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.", qualification: "Degree in computer science.Strong organizational and project management skills.Proficiency with fundamental front-end languages such as HTML, CSS, and JavaScript.Familiarity with JavaScript frameworks such as Angular JS, React, and Amber.Proficiency with server-side languages such as Python, Ruby, Java, PHP, and .Net.Familiarity with database technology such as MySQL, Oracle, and MongoDB.Excellent verbal communication skills. Good problem-solving skills. Attention to detail.", deadline:"7th February 2023", employee_id: 2, employer_id: 1}

]
```

If the `job` does not exist, return the following JSON data, along with
the appropriate HTTP status code:

```
{
  "error": "Job not found"
}
```
### First time set up

1. Clone the code from GitHub using `git clone https://github.com/jwillie-26/Job-Matchers.git`
2. Read this README ;
3. Install dependencies using `bundle`.
4. Seeding test data-rails db:seed to seed the data.
5. Turn on the server with `rails s`- The server will run on `http://localhost:3000`

.....................................................................

Install the dependencies and start the server.

