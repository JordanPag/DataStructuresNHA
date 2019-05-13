class Course {
  constructor(name) {
    this._name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  get classSize() {
    return this.students.length;
  }

  isNanoInTheClass(nano) {
    return this.students.includes(nano);
  }

  isMentorInTheClass(mentor) {
    return this.mentors.includes(mentor);
  }

  setMentor(mentor) {
    console.log("You can't set a mentor! Try addMentor() instead."); //This method is supposed to be private
  }

  addMentor(mentor) {
    if(!this.isMentorInTheClass(mentor)) {
      this.mentors.push(mentor);
    }
  }

  setMentors(mentors) {
    this.mentors.concat(mentors);
  }

  get mentorSize() {
    return this.mentors.length;
  }

  removeMentor(mentor) {
    const index = this.mentors.indexOf(mentor);
    if (index > -1) {
       this.mentors.splice(index, 1);
    }
  }

  removeStudent(student) {
    let index = this.students.indexOf(student);
    if (index > -1) {
       this.students.splice(index, 1);
    }
  }

  rosterSortedAlphabetically() {
    return this.students.sort((a,b) => a.name.localeCompare(b.name));
  }
}
