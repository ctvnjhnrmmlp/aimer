import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import produce from 'immer';

interface TasksState {
	tasks: { id: string; name: string }[];
	addTask: () => void;
	updateTask: (payload: { id: number; name: string }) => void;
	deleteTask: (payload: string) => void;
}

const useTasksStore = create<TasksState>()((set) => ({
	tasks: [],
	addTask: () => {
		set(
			produce((draft) => {
				draft.tasks.push({
					id: uuidv4(),
					completed: false,
				});
			})
		);
	},
	updateTask: (payload) => {
		set(
			produce((draft) => {
				const task = draft.tasks.find(
					(el: { id: any }) => el.id === payload.id
				);
				task.name = payload.name;
			})
		);
	},
	deleteTask: (payload: any) =>
		set(
			produce((draft) => {
				const taskIndex = draft.tasks.findIndex(
					(el: { id: any }) => el.id === payload
				);
				draft.tasks.splice(taskIndex, 1);
			})
		),
}));

export { useTasksStore };
