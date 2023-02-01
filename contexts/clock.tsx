import { create } from 'zustand';

interface ClockState {
	date: Date;
	time: Date;
	setDate: (date: Date) => void;
	setTime: (time: Date) => void;
}

const useClockStore = create<ClockState>()((set) => ({
	date: new Date(),
	time: new Date(),
	setDate: (date) =>
		set((state) => ({
			date: date,
		})),
	setTime: (time) =>
		set((state) => ({
			time: time,
		})),
}));

export { useClockStore };
