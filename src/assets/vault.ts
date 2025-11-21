import { P } from "node_modules/@kobalte/core/dist/index-766ec211";

type MovieGenres =
	| "Action"
	| "Adventure"
	| "Comedy"
	| "Documentary"
	| "Drama"
	| "Horror"
	| "Sci-Fi"
	| "Romance";

type ShowGenres =
	| "Action"
	| "Adventure"
	| "Comedy"
	| "Drama"
	| "Horror"
	| "Sci-Fi"
	| "Romance";

type BookGenres =
	| "Fiction"
	| "Non-Fiction"
	| "Fantasy"
	| "Science"
	| "History"
	| "Self-Help"
	| "Mystery";

interface Movie {
	title: string;
	series?: boolean;
	genre: MovieGenres[];
}

interface Game {
	title: string;
	developer: string;
}

interface Show {
	title: string;
	genre: ShowGenres[];
}

interface Book {
	title: string;
	series?: boolean;
	author: string;
	genre: BookGenres[];
}

const movies: Movie[] = [
	{
		title: "A Man Called Otto",
		genre: ["Comedy", "Drama"],
	},
	{
		title: "Pirates of the Caribbean",
		series: true,
		genre: ["Action", "Adventure"],
	},
	{
		title: "RED",
		series: true,
		genre: ["Action", "Comedy"],
	},
	{
		title: "The Gentlemen",
		genre: ["Action", "Comedy"],
	},
	{
		title: "Up",
		genre: ["Adventure", "Comedy"],
	},
	{
		title: "Knives Out",
		series: true,
		genre: ["Comedy", "Drama"],
	},
	{
		title: "National Treasure",
		series: true,
		genre: ["Action", "Adventure"],
	},
	{
		title: "The Grand Budapest Hotel",
		genre: ["Comedy", "Drama"],
	},
	{
		title: "My Octopus Teacher",
		genre: ["Documentary"],
	},
	{
		title: "Blue Planet",
		series: true,
		genre: ["Documentary"],
	},
	{
		title: "Our Planet",
		genre: ["Documentary"],
	},
];

const shows: Show[] = [
	{
		title: "Bob's Burgers",
		genre: ["Comedy"],
	},
	{
		title: "White Lotus",
		genre: ["Drama"],
	},
	{
		title: "Fallout",
		genre: ["Action", "Adventure"],
	},
	{
		title: "Rick and Morty",
		genre: ["Sci-Fi"],
	},
	{
		title: "Mobland",
		genre: ["Drama"],
	},
	{
		title: "Chernobyl",
		genre: ["Drama"],
	},
	{
		title: "The Boys",
		genre: ["Action", "Sci-Fi"],
	},
	{
		title: "The Queen's Gambit",
		genre: ["Drama"],
	},
	{
		title: "Schitt's Creek",
		genre: ["Comedy"],
	},
];

const books: Book[] = [
	{
		title: "A Short Stay in Hell",
		author: "Steven L. Peck",
		genre: ["Fiction"],
	},
	{
		title: "The Reading List",
		author: "Sara Nisha Adams",
		genre: ["Fiction"],
	},
	{
		title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
		author: "Susan Cain",
		genre: ["Non-Fiction"],
	},
	{
		title: "The Woman in the Library",
		author: "Sulari Gentill",
		genre: ["Fiction", "Mystery"],
	},
	{
		title: "The Books of Babel",
		series: true,
		author: "Josiah Bancroft",
		genre: ["Fantasy"],
	},
	{
		title: "Anxious People",
		author: "Fredrik Backman",
		genre: ["Fiction", "Mystery"],
	},
	{
		title: "The Beekeeper of Aleppo",
		author: "Christy Lefteri",
		genre: ["Fiction"],
	},
	{
		title: "The Midnight Library",
		author: "Matt Haig",
		genre: ["Fiction", "Fantasy"],
	},
	{
		title: "Where the Crawdads Sing",
		author: "Delia Owens",
		genre: ["Fiction", "Mystery"],
	},
	{
		title: "Beartown",
		author: "Fredrik Backman",
		series: true,
		genre: ["Fiction"],
	},
	{
		title: "The Book of Doors",
		author: "Gareth Brown",
		genre: ["Fiction", "Fantasy"],
	},
];

const games: Game[] = [
	{
		title: "Destiny 2",
		developer: "Bungie",
	},
	{
		title: "Minecraft",
		developer: "Mojang Studios",
	},
	{
		title: "The Elder Scrolls V: Skyrim",
		developer: "Bethesda Game Studios",
	},
	{
		title: "No Man's Sky",
		developer: "Hello Games",
	},
	{
		title: "Slay the Spire",
		developer: "MegaCrit",
	},
	{
		title: "Stardew Valley",
		developer: "ConcernedApe",
	},
	{
		title: "Borderlands 2",
		developer: "Gearbox Software",
	},
	{
		title: "Call of Duty: Black Ops",
		developer: "Treyarch",
	},
	{
		title: "Fable 3",
		developer: "Lionhead Studios",
	},
	{
		title: "Halo 3 ODST",
		developer: "Bungie",
	},
];
