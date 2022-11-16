//pure function


const luasLingkaran = (jarijari) => {
    return 3.14 * jarijari * jarijari;
}
console.log(luasLingkaran(10));

// imutabble
const user = {
    firstName : "rizal",
    lastName : "zery"
}
const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser("zeri",user);
console.log(user.lastName);

//rekursif
const countdown = start => {
    console.log(start);
    if (start > 0) countdown(start-1);
}
countdown(10);

//array map
const newArray = ['harry','Potter','Agus'].map((name) => {return `${name}`});
console.log(newArray);

//array reduce menghasilkan 1 output
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  
  console.log(totalScore);

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);
  
  /**
   * output:
   * [ 1, 'Hallo', 'Harry', 14 ]
   * 
   */