class Course {
    constructor(courseID, courseName, courseDuration, coursePrice){
        this.courseID = courseID;
        this.courseName = courseName;
        this.courseDuration = courseDuration;
        this.coursePrice = coursePrice;
    }
  }
  
  // Create courses
  let courseGit = new  Course("GIT100", "Git Training", "3 Days", "$75");
  let courseJava = new  Course("JAVA100", "Java Training", "5 Days", "$100");
  let courseAgile = new  Course("AGILE100", "Python Training", "7 Days", "$50");
  
  // Create array of courses
  let courseList = [courseGit, courseJava, courseAgile];
  
  console.log(courseList[0].courseID, courseList[1].courseID, courseList[2].courseID);
  