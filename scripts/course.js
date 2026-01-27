const courses = [
    { name: 'WDD130', credits: 2, completed: true},
    { name: 'WDD131', credits: 2, completed: true},
    { name: 'WDD231', credits: 2, completed: false},
    { name: 'CSE110', credits: 2, completed: true},
    { name: 'CSE111', credits: 2, completed: true},
    { name: 'CSE210', credits: 2, completed: true}
];
const container = document.querySelector('.certificate.courses');
const creditsDisplay = document.querySelector('#total-courses span');

function displayCourses(filteredCourses){
    container.innerHTML= '';
    // const totalCourses = filteredCourses.
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    creditsDisplay.textContent = `The total number of credits is: ${totalCredits}`;

    filteredCourses.forEach(course => {
        const p = document.createElement('p');
        p.textContent = course.name;
        p.classList.add('course-card');
       
        if(course.completed){
            p.classList.add('completed');
        }
        container.appendChild(p);
    });
}

document.getElementById('all').addEventListener("click", () => {
    displayCourses(courses);
});

document.getElementById('cse').addEventListener('click', () => {
    const cse = courses.filter((course) => course.name[0] == 'C')
    displayCourses(cse);
})

document.getElementById('wdd').addEventListener('click', () => {
    const wdd = courses.filter((course) => course.name[0] == 'W')
    displayCourses(wdd);
})
displayCourses(courses);

// const dialog = document.querySelector('#courses-detail')

// function displayDialog(course){
//     dialog.innerHTML= '';
//     dialog.innerHTML= `
//     <button id="closeModal">❌</button>
//     <h2>${course.subject} ${course.number}</h2>
//     <h3>${course.title}</h3>
//     <p><strong>Credits</strong>: ${course.credits}</p>
//     <p><strong>Certificate</strong>: ${course.certificate}</p>
//     <p>${course.description}</p>
//     <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
//     `;
//     dialog.showModal();

//     closeModal.addEventListener("click", () => {
//     courseDetails.close();
//   });
// }

