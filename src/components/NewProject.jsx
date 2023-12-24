import Input from './Input.jsx';
import { useRef, useState } from 'react';
import Modal from './Modal.jsx';

export default function NewProject({ onSave, onCancel }) {
    const modal = useRef();
    const projectTitle = useRef();
    const projectDescription = useRef();
    const projectDate = useRef();

    function handleSave() {
        const enteredTitle = projectTitle.current.value;
        const enteredDesc = projectDescription.current.value;
        const enteredDate = projectDate.current.value;

        if (enteredDesc.trim() === '' || enteredTitle.trim() === '' || enteredDate.trim() === '') {
            modal.current.open();
            return;
        }

        onSave({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDate
        });

    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-700 my-4" >Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops ... looks like you forget to enter values.</p>
                <p className="text-stone-600 mb-4">Please provide a valid value for all inputs.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave} >Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input label="TITLE" type="text" ref={projectTitle} />
                    <Input label="DESCRIPTION" textarea ref={projectDescription} />
                    <Input label="DUE DATE" type="date" ref={projectDate} />
                </div>
            </div>
        </>
    )
}