const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівня', 'Теорія автоманів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];
const studentsCopy = [...students];
const themesCopy = [...themes];
const marksCopy = [...marks];
let boys = [];
let girls = [];
let pairs = [];
let eachPair = [];
let studentGender = [];
let studentsEach = [];
let studentsPlusTheme = [];
let studentsMark = [];
let studentsPlusThemeCopy = [];
let eachStudentTheme = [];
let eachStudentThemeString = [];
let studentsFinalResult = [];
function getBoys(arr) {
	for (let i = 0; i <= studentsCopy.length - 1; i++){
		if (studentsCopy[i] === 'Олександр' || studentsCopy[i] === 'Ігор' || studentsCopy[i] === 'Олексій'){
			 const eachStudent = studentsCopy.slice(i, i + 1) + '';
			boys.push(eachStudent);
			
		} 
	}
	return boys;

}
function getGirls(arr) {
	for (let i = 0; i <= studentsCopy.length - 1; i++){
		if (studentsCopy[i] === 'Олена' || studentsCopy[i] === 'Іра' || studentsCopy[i] === 'Світлана'){
			 const eachStudent = studentsCopy.slice(i, i + 1) + '';
			girls.push(eachStudent);
			
		} 
	}
	return girls;

}
console.log(getBoys(studentsCopy));
console.log(getGirls(studentsCopy));
function getPairs (boys, girls) {
	for (let i = 0; i <= studentsCopy.length / 2 - 1; i++){
		eachPair = boys.slice(i, i + 1);
      
		eachPair.push(girls[i]);
		pairs.push(eachPair);
	}
	return pairs;
}

console.log(getPairs(boys, girls));
function getPairsThemes (pairs, themesCopy) {
	 studentGenderArray = [...pairs];
	for (let i = 0; i <= studentGenderArray.length - 1; i++){
		studentsEach = studentGenderArray.slice([i], [i + 1]);
      let studentsGenderString = studentsEach.pop(-1);
      
      
      studentsGenderString.push(themesCopy[i]);
      studentsPlusTheme.push(studentsGenderString);
      
      
		
}
	return studentsPlusTheme;
}
console.log(getPairsThemes(pairs, themesCopy))
function giveStudentMark (a){
	for (let i = 0; i <= a.length - 1; i++){
		let eachStudent = a.slice(i, i + 1);
		eachStudent.push(marksCopy[i]);
		studentsMark.push(eachStudent);
	}
	return studentsMark;
}
console.log(giveStudentMark(studentsCopy));
function getPairsThemesAndMarks (studentsPlusThemeCopy, marksCopy) {
	 studentsPlusThemeCopy = [...studentsPlusTheme];
  console.log(studentsPlusThemeCopy);
	for (let i = 0; i <= studentsPlusThemeCopy.length - 1; i++){
		const randomMark = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
		 eachStudentTheme = studentsPlusThemeCopy.slice([i], [i +1]);
      eachStudentThemeString = eachStudentTheme.pop(-1);
      eachStudentThemeString.push(randomMark);
      console.log(eachStudentThemeString);
      studentsFinalResult.push(eachStudentThemeString);
		
}
  return studentsFinalResult;
}
console.log(getPairsThemesAndMarks(studentsPlusThemeCopy, marksCopy));

const container=document.querySelector("#container");
container.innerHTML=`
<p>Students: ${students};</p>
<p>Themes: ${themes};</p>
<p>Marks: ${marks};</p>
<p>Student/Mark: ${studentsMark};</p>
<p>Final result: ${studentsFinalResult};</p>

`;
