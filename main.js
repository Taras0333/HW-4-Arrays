const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівня', 'Теорія автоманів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];
const studentsCopy = [...students];
const themesCopy = [...themes];
const marksCopy = [...marks];
const boys = [];
const girls = [];
const pairs = [];
let eachPair = '';
let studentGenderArray = [];
let studentsGenderString = [];
let studentsEach = [];
const studentsPlusTheme = [];
const studentsMark = [];
let studentsPlusThemeCopy = [];
let eachStudentTheme = [];
let eachStudentThemeArray = [];
const studentsFinalResult = [];
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
getBoys(studentsCopy);
getGirls(studentsCopy);
function getPairs (boys, girls) {
	for (let i = 0; i <= studentsCopy.length / 2 - 1; i++){
		eachPair = boys.slice(i, i + 1);
      
		eachPair.push(girls[i]);
		eachPair = eachPair.join(' i ');
		pairs.push(eachPair);
	}
	return pairs;
}

getPairs(boys, girls);

function getPairsThemes (pairs, themesCopy) {
	 studentGenderArray = [...pairs];
	for (let i = 0; i <= studentGenderArray.length - 1; i++){
		studentsEach = studentGenderArray.slice([i], [i + 1]);
       studentsGenderString.push(studentsEach.pop(-1));
      
      
      studentsGenderString.push(themesCopy[i]);
      studentsPlusTheme.push(studentsGenderString);
      studentsGenderString = [];
      
      
		
}
	return studentsPlusTheme;
}
getPairsThemes(pairs, themesCopy);
function giveStudentMark (a){
	for (let i = 0; i <= a.length - 1; i++){
		let eachStudent = a.slice(i, i + 1);
		eachStudent.push(marksCopy[i]);
		studentsMark.push(eachStudent);
	}
	return studentsMark;
}
giveStudentMark(studentsCopy);
function getPairsThemesAndMarks (studentsPlusThemeCopy, marksCopy) {
	 studentsPlusThemeCopy = [...studentsPlusTheme];
	for (let i = 0; i <= studentsPlusThemeCopy.length - 1; i++){
		const randomMark = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
		 eachStudentTheme = studentsPlusThemeCopy.slice([i], [i +1]);
      eachStudentThemeArray = eachStudentTheme.pop(-1);
      eachStudentThemeArray.push(randomMark);
      studentsFinalResult.push(eachStudentThemeArray);
		
}
  return studentsFinalResult;
}
getPairsThemesAndMarks(studentsPlusThemeCopy, marksCopy);

const container=document.querySelector("#container");
container.innerHTML=`

<p>Pairs: ${pairs};</p>
<p>Student/Mark: ${studentsMark};</p>
<p>Final result: ${studentsFinalResult};</p>

`;

