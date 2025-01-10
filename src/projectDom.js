

const projectAddBtn = document.querySelector('.project_add_btn');
const projectList = document.querySelector('.proj_list');

// project_add_btn
export function addNewProject(){

    const newLi = document.createElement('li');

    const newLink = document.createElement('a');
    newLink.href = `#Project${projectList.children.length + 1}`;
    newLink.textContent = `Project ${projectList.children.length + 1}`;
    
    newLink.className = 'common-color nav-link px-0 align-middle';

    newLi.appendChild(newLink);
    projectList.appendChild(newLi);

    console.log('Here we are');
}
projectAddBtn.addEventListener('click', addNewProject);