var popupOverlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popupbox")
function registerAfterCalculation()
{
    popupbox.style.display = "block"
    popupOverlay.style.display = "block"
    
    var studentInputName = document.getElementById("inputName")
    var studentPopupName = document.getElementById("studentName")
    var name = studentInputName.value
    studentPopupName.textContent = `Hello ${name}`
}

function closePopup()
{
    popupbox.style.display = "none"
    popupOverlay.style.display = "none"
}

function exitProject(){
    var closebtn = document.getElementById("exit")
    closebtn.addEventListener("click", function() {
        window.location.href = "thankPage.html";})
}


const grades = [];
function addGrade() {
    const courseName = document.getElementById("courseName").value;
    const grade = document.getElementById("grade").value;
    
    if (courseName && grade) {
        grades.push({ courseName, grade });
        displayGrades();
        calculateGPA();
        document.getElementById("courseName").value = "";
        document.getElementById("grade").value = "";
    }
}

function displayGrades() {
    const gradesList = document.getElementById("grades");
    gradesList.innerHTML = "";
    grades.forEach(grade => {
        const listItem = document.createElement("li");
        listItem.textContent = `${grade.courseName}: ${grade.grade}`;
        gradesList.appendChild(listItem);
    });
}

function calculateGPA() {
    const totalCredits = grades.length;
    let totalGradePoints = 0;
    
    grades.forEach(grade => {
        const gradePoints = parseFloat(grade.grade);
        totalGradePoints += gradePoints;
    });
    
    const gpa = (totalGradePoints / totalCredits).toFixed(2);
    document.getElementById("gpa").textContent = `GPA: ${gpa}`;
}
