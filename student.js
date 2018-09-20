function enrollStudent(req, res, next) {
    var student;

    //Load the user
    Student.findById(req.body.studentId).exec()

    //Capture student and load the course 
    .then(function(studentFromDb){
      student = studentFromDb
      return Course.findById(req.body.courseId).exec();
    })

    //Check if there are available seats in the course
    .then(function(course){
      if(course.isSeatAvailable()){
        //Enroll student into the course
        course.enrolledStudents.push(student.id);
        return course;
      } else {
        //throw an error
        throw new Error('No seats available');
      }
    })

    //Save the course
    .then(function(course){
      return course.save();
    })
    
    //Send the response back
    .then(function(course){
      return res.json({message : 'Enrollment successful'})
    })

    //Catch all errors and call the error handler;
    .then(null, next);

  }