export type InterestType = "game" | "movie" | "show" | "book";

export interface Interest {
  type: InterestType;
  title: string;
  creator: string;
  link?: string;
}

export const interests: Interest[] = [
  {
    type: "book",
    title: "My Friends",
    creator: "Fredrik Backman",
    link: "https://www.goodreads.com/book/show/217163697-my-friends",
  },
  {
    type: "book",
    title: "The Midnight Library",
    creator: "Matt Haig",
    link: "https://www.goodreads.com/book/show/52578297-the-midnight-library",
  },
  {
    type: "book",
    title: "The Seven Husbands of Evelyn Hugo",
    creator: "Taylor Jenkins Reid",
    link: "https://www.goodreads.com/book/show/32620332-the-seven-husbands-of-evelyn-hugo",
  },
  {
    type: "book",
    title: "Man Called Ove",
    creator: "Fredrik Backman",
    link: "https://www.goodreads.com/book/show/18774964-a-man-called-ove",
  },
  {
    type: "book",
    title: "The Five People You Meet in Heaven",
    creator: "Mitch Albom",
    link: "https://www.goodreads.com/book/show/3431.The_Five_People_You_Meet_in_Heaven",
  },
  {
    type: "book",
    title: "The Book of Doors",
    creator: "Gareth Brown",
    link: "https://www.goodreads.com/book/show/156480764-the-book-of-doors",
  },
  {
    type: "book",
    title: "The Effective Engineer",
    creator: "Edmond Lau",
    link: "https://www.goodreads.com/book/show/25238425-the-effective-engineer",
  },
  {
    type: "book",
    title: "A Short Stay in Hell",
    creator: "Steven L. Peck",
    link: "https://www.goodreads.com/book/show/13456414-a-short-stay-in-hell",
  },
  {
    type: "book",
    title:
      "What If?: Serious Scientific Answers to Absurd Hypothetical Questions",
    creator: "Randall Munroe",
    link: "https://www.goodreads.com/book/show/21413662-what-if",
  },
  {
    type: "book",
    title: "The Woman in the Library",
    creator: "Sulari Gentill",
    link: "https://www.goodreads.com/book/show/56803179-the-woman-in-the-library",
  },
  {
    type: "book",
    title: "Anxious People",
    creator: "Fredrik Backman",
    link: "https://www.goodreads.com/book/show/53799686-anxious-people",
  },
  {
    type: "book",
    title: "The Beekeeper of Aleppo",
    creator: "Christy Lefteri",
    link: "https://www.goodreads.com/book/show/43124137-the-beekeeper-of-aleppo",
  },
  {
    type: "book",
    title: "The Last Checkmate",
    creator: "Gabriella Saab",
    link: "https://www.goodreads.com/book/show/56922702-the-last-checkmate",
  },
  {
    type: "movie",
    title: "A Man Called Otto",
    creator: "Marc Forster",
  },
  {
    type: "movie",
    title: "Barbie",
    creator: "Greta Gerwig",
  },
  {
    type: "movie",
    title: "Grand Budapest Hotel",
    creator: "Wes Anderson",
  },
  {
    type: "movie",
    title: "The Secret Life of Walter Mitty",
    creator: "Ben Stiller",
  },
  {
    type: "movie",
    title: "The Devil Wears Prada",
    creator: "David Frankel",
  },
  {
    type: "movie",
    title: "The Harry Potter Series",
    creator: "Chris Columbus, Alfonso Cuarón, Mike Newell, David Yates",
  },
  {
    type: "movie",
    title: "Dark Knight Trilogy",
    creator: "Christopher Nolan",
  },
  {
    type: "movie",
    title: "Se7en",
    creator: "David Fincher",
  },
  {
    type: "movie",
    title: "The Pianist",
    creator: "Roman Polanski",
  },
  {
    type: "movie",
    title: "Pirates of the Caribbean Series",
    creator: "Gore Verbinski, Rob Marshall, Joachim Rønning, Espen Sandberg",
  },
  {
    type: "movie",
    title: "Legally Blonde",
    creator: "Robert Luketic",
  },
  {
    type: "movie",
    title: "Knives Out",
    creator: "Rian Johnson",
  },
  {
    type: "movie",
    title: "Inside Out",
    creator: "Pete Docter, Ronnie del Carmen",
  },
  {
    type: "movie",
    title: "Shrek",
    creator: "Andrew Adamson, Vicky Jenson",
  },
  {
    type: "movie",
    title: "The Running Man",
    creator: "Paul Michael Glaser",
  },
  {
    type: "movie",
    title: "Zootopia",
    creator: "Byron Howard, Rich Moore, Jared Bush",
  },
  {
    type: "movie",
    title: "Rental Family",
    creator: "Hikari",
  },
  {
    type: "movie",
    title: "The Phoenician Scheme",
    creator: "Wes Anderson",
  },
  {
    type: "movie",
    title: "Honey Don't!",
    creator: "Ethan Coen",
  },
  {
    type: "show",
    title: "Supernatural",
    creator: "Eric Kripke",
  },
  {
    type: "show",
    title: "The Boys",
    creator: "Eric Kripke",
  },
  {
    type: "show",
    title: "Rick and Morty",
    creator: "Dan Harmon, Justin Roiland",
  },
  {
    type: "show",
    title: "Mobland",
    creator: "Ronan Bennett",
  },
  {
    type: "show",
    title: "White Lotus",
    creator: "Mike White",
  },
  {
    type: "show",
    title: "Fallout",
    creator: "Graham Wagner, Geneva Robertson-Dworet",
  },
  {
    type: "show",
    title: "Wednesday",
    creator: "Alfred Gough, Miles Millar",
  },
  {
    type: "show",
    title: "Murderbot",
    creator: "Paul Weitz, Chris Weitz",
  },
  {
    type: "show",
    title: "Maid",
    creator: "Molly Smith Metzler",
  },
  {
    type: "show",
    title: "The Good Place",
    creator: "Michael Schur",
  },
  {
    type: "show",
    title: "A Man on the Inside",
    creator: "Michael Schur",
  },
  {
    type: "show",
    title: "Chernobyl (2019)",
    creator: "Craig Mazin",
  },
  {
    type: "show",
    title: "The Queen's Gambit",
    creator: "Scott Frank, Allan Scott",
  },
  {
    type: "show",
    title: "Schitt's Creek",
    creator: "Eugene Levy, Dan Levy",
  },
  {
    type: "game",
    title: "Destiny 2",
    creator: "Bungie",
  },
  {
    type: "game",
    title: "Slay the Spire",
    creator: "Mega Crit Games",
  },
  {
    type: "game",
    title: "Slay the Spire 2",
    creator: "Mega Crit Games",
  },
  {
    type: "game",
    title: "Baldur's Gate 3",
    creator: "Larian Studios",
  },
  {
    type: "game",
    title: "Borderlands 2",
    creator: "Gearbox Software",
  },
  {
    type: "game",
    title: "Stardew Valley",
    creator: "ConcernedApe",
  },
  {
    type: "game",
    title: "Peak",
    creator: "Team PEAK",
  },
  {
    type: "game",
    title: "R.E.P.O.",
    creator: "semiwork",
  },
  {
    type: "game",
    title: "The Sims 4",
    creator: "Maxis, The Sims Studio",
  },
  {
    type: "game",
    title: "Halo 3: ODST",
    creator: "Bungie",
  },
  {
    type: "game",
    title: "Halo: Reach",
    creator: "Bungie",
  },
  {
    type: "game",
    title: "Halo 4",
    creator: "343 Industries",
  },
  {
    type: "game",
    title: "No Mans Sky",
    creator: "Hello Games",
  },
];
