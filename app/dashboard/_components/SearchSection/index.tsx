import { Search } from "lucide-react";
import React from "react";

type SearchSectionProps = {
	onSearchInput: (value: string) => void;
};

export default function SearchSection({ onSearchInput }: SearchSectionProps) {
	console.log("onSearchInput", onSearchInput);
	return (
		<div className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white">
			<h2 className="text-3xl font-bold">Browse All Templates</h2>
			<p>What would you like to create today?</p>
			<div className="w-full flex justify-center items-center">
				<div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 md:w-[50%]">
					<Search className="text-primary" />
					<input
						type="text"
						placeholder="Search"
						className="bg-transparent w-full outline-none text-black"
						onChange={(event) => onSearchInput(event.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}
