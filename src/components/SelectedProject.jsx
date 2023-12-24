import NewTasks from "./NewTasks";
import Tasks from "./Tasks";

export default function SelectedProject({ project, onDeleteProject, onAddTask, onDeleteTask, tasks }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-stone-500 my-4">{project.title}</h2>
                    <button className="text-stone-600 hover:text-stone-950" onClick={onDeleteProject}>Delete</button>
                </div>
                <p  className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onDelete={onDeleteTask} onAdd={onAddTask} tasks={tasks}>TASKS</Tasks>
            <ul>
               
            </ul>
        </div>
    );
}