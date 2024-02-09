import { demoProject } from "./demo.js";

// Рандомный цвет фона и полоски
function randomHSLA(opacity) {
    return `hsla(${~~(360 * Math.random())}, 70%,  72%, ${opacity})`;
}

//Вывод даты
function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const secondsPast = (now.getTime() - date.getTime()) / 1000;

    if (secondsPast < 60) {
        return parseInt(secondsPast) + ' seconds ago';
    }
    if (secondsPast < 3600) {
        return parseInt(secondsPast / 60) + ' minutes ago';
    }
    if (secondsPast <= 86400) {
        return parseInt(secondsPast / 3600) + ' hours ago';
    }
    if (secondsPast > 86400) {
        const day = parseInt(secondsPast / 86400);
        if (day <= 1) {
            return '1 day ago';
        } else {
            return day + ' days ago';
        }
    }
}

// Проекты
function createProject(demoProject) {
    const box = document.querySelector(".project-boxes");
    box.innerHTML = "";
    if (demoProject.length <= 0 || demoProject === "undefined") {
        return (box.innerHTML = "<p class='status-number'>No projects</p>");
    } else {
        demoProject.map((data, index) => {
            const div = document.createElement("div");
            div.classList.add("project-box-wrapper");
            div.innerHTML = `
              <div class="project-box jsGridView" style="background-color: ${randomHSLA(
                0.75
            )}">
                  <div class="project-box-header">
                  <span>${data.created}</span>
                  <div class="more-wrapper">
                      <button class="project-btn-more">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-more-vertical">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                      </svg>
                      </button>
                  </div>
                  </div>
                  <div class="project-box-content-header">
                  <p class="box-content-header">${data.title}</p>
                  <p class="box-content-subheader">${data.category}</p>
                  </div>
                  <div class="box-progress-wrapper">
                  <p class="box-progress-header">Progress</p>
                  <div class="box-progress-bar">
                      <span class="box-progress" style="width: ${data.progress
                }%; background-color: ${randomHSLA(1)}"></span>
                  </div>
                  <p class="box-progress-percentage">${data.progress}%</p>
                  </div>
                  <div class="project-box-footer">
                  <div class="participants">
                      <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      alt="participant">
                      <img
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                      alt="participant">
                      <button class="add-participant" style="color: #ff942e;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-plus">
                          <path d="M12 5v14M5 12h14" />
                      </svg>
                      </button>
                  </div>
                  <div class="days-left" style="color: #ff942e;">
                      ${timeAgo(data.startDate)}
                  </div>
                  </div>
              </div>
              `;
            box.append(div);
        });
    }
}
createProject(demoProject);
