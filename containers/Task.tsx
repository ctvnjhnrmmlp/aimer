import { Checkbox, Container, Input, Spacer, Button } from '@nextui-org/react';
import { FaTrash } from 'react-icons/fa';
import { useRef } from 'react';
import { useTasksStore } from '../contexts/tasks';

export default function Task(prop: { id: string; name: string }) {
	const textInputRef = useRef<HTMLInputElement | null>(null);
	const deleteTask = useTasksStore((state) => state.deleteTask);

	const handleToggle = () => {
		textInputRef.current?.toggleAttribute('disabled');
	};

	const handleDelete = () => {
		deleteTask(prop.id);
	};

	return (
		<>
			<Container
				css={{
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<Checkbox
					aria-label='Finish Todo'
					size='xl'
					color='error'
					onClick={() => {
						handleToggle();
					}}
				/>
				<Input
					aria-label='Todo'
					placeholder='Do something'
					bordered
					size='lg'
					value={prop.name}
					css={{
						width: 'clamp(10.20rem, calc(40.46vw + -9.07rem), 22.51rem)',
					}}
					ref={textInputRef}
				/>
				<Button
					aria-label='Delete Todo'
					color='primary'
					rounded
					auto
					icon={<FaTrash />}
					onPress={() => handleDelete()}
				/>
			</Container>
			<Spacer y={0.5} />
		</>
	);
}
