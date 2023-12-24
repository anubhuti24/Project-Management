import ProjectImage from "../assets/no-projects.png"
import Button from "./Button";

export default function NoProjects({onStartAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={ProjectImage} alt="empty projects" className="w-16 h-16 object-contain mx-auto"></img>
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <div>
                <Button onClick={onStartAddProject}>Create new project</Button>
            </div>
        </div>
    );
}