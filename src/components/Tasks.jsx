import NewTasks from "./NewTasks";

export default function Tasks({ children, onAdd, onDelete, tasks }) {
    return (
        <section>
            <h2 className="text-xl font-bold text-stone-500 my-4">{children}</h2>
            <NewTasks onAdd={onAdd} />
            {tasks.length === 0 &&
                (<p className="text-stone-700 my-4">
                    This project does not have any tasks yet.
                </p>
                )}
            {tasks.length > 0 &&
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Clear</button>
                    </li>
                    ))}
                </ul>}
        </section>
    );
}