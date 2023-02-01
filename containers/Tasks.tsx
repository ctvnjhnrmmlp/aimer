import { Card, Spacer, Button } from '@nextui-org/react';
import { useTasksStore } from '../contexts/tasks';
import { FaPlus } from 'react-icons/fa';
import Task from './Task';

export default function Tasks() {
	const tasks = useTasksStore((state) => state.tasks);
	const addTask = useTasksStore((state) => state.addTask);

	return (
		<Card variant='bordered'>
			<Card.Body>
				{tasks.map((task) => {
					return <Task key={task.id} id={task.id} name={task.name} />;
				})}
				<Spacer y={0.5} />
				<Button
					aria-label='New Todo'
					size='sm'
					color='primary'
					icon={<FaPlus />}
					css={{
						marginInline: 'auto',
					}}
					onPress={() => addTask()}
				/>
			</Card.Body>
		</Card>
	);
}
