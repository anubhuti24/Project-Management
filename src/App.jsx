import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import { useState, useRef } from 'react';
import NoProjects from "./components/NoProjects";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  })

  function handleStartProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID
      }

      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  }

  function handleProjectDeletion() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter((project) => (project.id !== prevState.selectedProjectID))
      }
    })
  }

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskID = Math.random();
      const newTask = {
        text: text,
        id: taskID, 
        projectId: prevState.selectedProjectID
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => (task.id !== id))
      }
    })
  }

  const selectedProject = projectsState.projects.find((project) => (project.id === projectsState.selectedProjectID));
  console.log(projectsState.tasks);

  let content = <SelectedProject project={selectedProject} onDeleteProject={handleProjectDeletion} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onSave={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjects onStartAddProject={handleStartProject} />
  }



  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStartAddProject={handleStartProject}
        projectsList={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectID}
      />
      {content}
    </main>
  );
}

export default App;
