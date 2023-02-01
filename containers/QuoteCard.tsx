import { Card, Text, Button, Spacer } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { FaRandom } from 'react-icons/fa';

export default function QuoteCard() {
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ['quotes'],
		queryFn: async () => {
			return fetch('https://api.quotable.io/random').then((res) => {
				const response = res.json();
				return response;
			});
		},
	});

	if (isLoading) {
		return (
			<Card variant='bordered'>
				<Card.Body>
					<Text
						h1
						b
						size='2rem'
						css={{
							textAlign: 'center',
						}}
					>
						Loading. Please wait.
					</Text>
				</Card.Body>
			</Card>
		);
	}

	if (error) {
		return (
			<Card variant='bordered'>
				<Card.Body>
					<Text
						h1
						b
						size='2rem'
						css={{
							textAlign: 'center',
						}}
					>
						An error occured. Please try again later.
					</Text>
				</Card.Body>
			</Card>
		);
	}

	return (
		<Card variant='bordered'>
			<Card.Body>
				<Text
					h2
					b
					size='2rem'
					css={{
						textAlign: 'center',
					}}
				>
					{data.content}
				</Text>
				<Text
					h3
					b
					size='1.5rem'
					css={{
						textAlign: 'center',
					}}
				>
					{data.author}
				</Text>
				<Spacer y={0.5} />
				<Button
					aria-label='Generate'
					color='primary'
					auto
					rounded
					icon={<FaRandom />}
					css={{
						marginInline: 'auto',
					}}
					onPress={() => refetch()}
				/>
			</Card.Body>
		</Card>
	);
}
