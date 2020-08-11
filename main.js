const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівня', 'Теорія автоманів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];
const studentsCopy = [...students];
const themesCopy = [...themes];
const marksCopy = [...marks];
const boys = [];
const girls = [];
const pairs = [];
const studentsPlusTheme = [];
const studentsMark = [];
const studentsFinalResult = [];
function getBoys(arr) {
	for (let i = 0; i <= studentsCopy.length - 1; i++){
		if (arr[i] === 'Олександр' || arr[i] === 'Ігор' || arr[i] === 'Олексій'){
			 const eachStudent = arr.slice(i, i + 1) + '';
			boys.push(eachStudent);
			
		} 
	}
	return boys;

}
function getGirls(arr) {
	for (let i = 0; i <= studentsCopy.length - 1; i++){
		if (arr[i] === 'Олена' || arr[i] === 'Іра' || arr[i] === 'Світлана'){
			 const eachStudent = arr.slice(i, i + 1) + '';
			girls.push(eachStudent);
			
		} 
	}
	return girls;

}
getBoys(studentsCopy);
getGirls(studentsCopy);
function getPairs (boys, girls) {
	let eachPair = '';
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
	 let studentGenderArray = [...pairs];
	 let studentsGenderString = [];
	for (let i = 0; i <= studentGenderArray.length - 1; i++){
	const studentsEach = studentGenderArray.slice([i], [i + 1]);
       studentsGenderString.push(studentsEach.pop(studentsEach.length - 1));
      
      
      studentsGenderString.push(themesCopy[i]);
      studentsPlusTheme.push(studentsGenderString);
      studentsGenderString = [];
      
      
		
}
	return studentsPlusTheme;
}
getPairsThemes(pairs, themesCopy);
function giveStudentMark (students, marks){
	for (let i = 0; i <= students.length - 1; i++){
		let eachStudent = students.slice(i, i + 1);
		eachStudent.push(marks[i]);
		studentsMark.push(eachStudent);
	}
	return studentsMark;
}
giveStudentMark(studentsCopy, marksCopy);
function getPairsThemesAndMarks (studentsTheme, marks) {
	 let studentsPlusThemeCopy = [...studentsTheme];
	 let eachStudentThemeArray = [];
	for (let i = 0; i <= studentsPlusThemeCopy.length - 1; i++){
		const randomMark = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
		let eachStudentTheme = studentsPlusThemeCopy.slice([i], [i +1]);
      eachStudentThemeArray = eachStudentTheme.pop(eachStudentTheme.length - 1);
      eachStudentThemeArray.push(randomMark);
      studentsFinalResult.push(eachStudentThemeArray);
		
}
  return studentsFinalResult;
}
getPairsThemesAndMarks(studentsPlusTheme, marksCopy);

const container=document.querySelector("#container");
container.innerHTML=`

<p>Pairs: ${pairs};</p>
<p>Student/Mark: ${studentsMark};</p>
<p>Final result: ${studentsFinalResult};</p>

`;

