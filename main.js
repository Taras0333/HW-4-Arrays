const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівня', 'Теорія автоманів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];
const studentsCopy = [...students];
let themesCopy = [...themes];
let marksCopy = [...marks];
let boys = [];
let girls = [];
let pairs = [];
let finalResult = [];
let studentsMark = [];
let studentsFinalResult = [];
function getBoys(arr) {
	for (i = 0; i <= studentsCopy.length - 1; i++){
		if (studentsCopy[i] === 'Олександр' || studentsCopy[i] === 'Ігор' || studentsCopy[i] === 'Олексій'){
			 const eachStudent = studentsCopy.slice(i, i + 1) + '';
			boys.push(eachStudent);
			
		} 
	}
	return boys;

}
function getGirls(arr) {
	for (i = 0; i <= studentsCopy.length - 1; i++){
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
	for (i = 0; i <= studentsCopy.length / 2 - 1; i++){
		let eachPair = boys.slice(i, i + 1);
		eachPair.push(girls[i]);
		pairs.push(eachPair);
		console.log(eachPair);
	}
	return pairs;
}
getPairs(boys, girls);
function giveStudentMark (a){
	for (i = 0; i <= a.length - 1; i++){
		let eachStudent = a.slice(i, i + 1);
		eachStudent.push(marksCopy[i]);
		studentsMark.push(eachStudent);
		console.log(eachStudent);
	}
	return studentsMark;
}


function getPairsThemesAndMarks (pairs, themesCopy) {
	 finalResult = [].concat(pairs);
	for (i = 0; i <= finalResult.length - 1; i++){
		const randomMark = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
		finalResult[i].push(themesCopy[i], randomMark);
		
}
	return finalResult;
}

const container=document.querySelector("#container");
container.innerHTML=`
<p>Student/Mark: ${giveStudentMark(studentsCopy)};</p>
<p>Final result: ${getPairsThemesAndMarks(pairs, themesCopy)};</p>

`;
