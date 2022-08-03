import React from "react";
import CourseGoalItem from "./CourseGoalItem";

const CourseGoalList = () => {
  const data = [
    { text: "learn react", id: "0" },
    { text: "learn js", id: "1" },
  ];
  const [courseGoal, setCourseGoal] = React.useState(data);
  const handleInputData =(e)=>{
    const enteredData = e.target.value;
    
    
  }
  const addNewCourseGoal = (e) => {
    e.preventDefault();
    const newData = [
      ...courseGoal,
      { text: e.target.value, id: (Math.Random() * 100).toString() },
    ];
    setCourseGoal(newData);
  };

  return (
    <div>
      <form onSubmit={addNewCourseGoal}>
        <input type="text" name="name" onChange={handleInputData} />

        <button type="submit" value="Add a course Goal" />
      </form>
      {courseGoal.map((goal) => (
        <CourseGoalItem data={goal} />
      ))}
    </div>
  );
};

export default CourseGoalList;
