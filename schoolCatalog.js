class School{
    constructor(name, level, numberOfStudents, averageTestScores, schoolOverview){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
      this._averageTestScores = averageTestScores;
      this._schoolOverview = schoolOverview;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    get averageTestScores(){
      return this._averageTestScores;
    }
    get schoolOverview(){
      return this._schoolOverview;
    }
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
      const randomIndex = Math.floor(Math.random()*substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
    set numberOfStudents(newNumberOfStudents){
      if(typeof newNumberOfStudents === 'number'){
        this._numberOfStudents = newNumberOfStudents;
      }else{
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  }
  
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents,74,'Overview');
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School{
    constructor(name, numberOfStudents,sportsTeams){
      super(name, 'high',numberOfStudents,70,'Overview');
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
      console.log(this._sportsTeams);
    }
  }
  class MiddleSchool extends School{
    constructor(name, numberOfStudents, averageTestScores, schoolOverview){
      super(name, 'middle', numberOfStudents, averageTestScores,schoolOverview);
    }
  }
  class SchoolCatalog{
    constructor(collectionOfSchools){
      this._collectionOfSchools = collectionOfSchools;
    }
    get collectionOfSchools(){
      return this._collectionOfSchools;
    }
  }
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent , guardian, or a family mamber over the age of 13.');
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher(['Jamal Crawford','Lou Williams','J. R. Smith','James Harden','Jason Terry','Manu Ginobli']);
  const alSmith = new HighSchool('Al E. Smith',415,['Baseball','Basketball','Volleyball','Track and Field']);
  alSmith.sportsTeams;
  const schoolCatalog = new SchoolCatalog([lorraineHansbury, alSmith, new MiddleSchool('C.S.M',700,79,'Overview')]);