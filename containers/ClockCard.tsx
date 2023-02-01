import { Card, Text, Container } from '@nextui-org/react';
import { useEffect } from 'react';
import { useClockStore } from '../contexts/clock';

export default function ClockCard() {
	const time = useClockStore((state) => state.time);
	const date = useClockStore((state) => state.date);
	const setDate = useClockStore((state) => state.setDate);
	const setTime = useClockStore((state) => state.setTime);

	useEffect(() => {
		const timeInterval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		const dateInterval = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return function cleanupIntervals() {
			clearInterval(timeInterval);
			clearInterval(dateInterval);
		};
	});

	return (
		<Card variant='bordered'>
			<Card.Body>
				<Container
					css={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignContent: 'center',
					}}
				>
					<Text
						h2
						size='xl'
						b
						css={{
							textAlign: 'center',
						}}
					>
						{time.toLocaleTimeString()}
					</Text>
					<Text
						h3
						size='xl'
						b
						css={{
							textAlign: 'center',
						}}
					>
						{date.toLocaleString('en-US', {
							day: '2-digit',
							month: 'long',
							year: 'numeric',
						})}
					</Text>
				</Container>
			</Card.Body>
		</Card>
	);
}
