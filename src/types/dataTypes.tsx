import data from "../../data/greek_text.json"

export type testament = keyof typeof data["newtestament" | "oldtestament"]

export type newTestamentAuthor = keyof typeof data["newtestament"]["mathew" | "mark" | "luke" | "john"] 

export type oldTestamentAuthor = keyof typeof data["oldtestament"]["genesis"] 