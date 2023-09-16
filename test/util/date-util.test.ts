import { expect, test, describe } from "bun:test";
import { getWeekCount, getWeekdayFromMonday } from "../../src/util/date-util";

describe("date-util: getWeekdayFromMonday", () => {
	test("Returns 1 on monday", () => {
		const monday = new Date(2023, 8, 11);
		expect(getWeekdayFromMonday(monday)).toBe(1);
	});
	test("Returns 3 on wednesday", () => {
		const wednesday = new Date(2023, 8, 13);
		expect(getWeekdayFromMonday(wednesday)).toBe(3);
	});
	test("Returns 7 on sunday", () => {
		const sunday = new Date(2023, 8, 17);
		expect(getWeekdayFromMonday(sunday)).toBe(7);
	});
});

describe("date-util: getWeekCount", () => {
	test("Returns 6 on January 2023", () => {
		expect(getWeekCount(2023, 1)).toBe(6);
	});
	test("Returns 5 on September 2023", () => {
		expect(getWeekCount(2023, 9)).toBe(5);
	});
	test("Returns 5 on December 2023", () => {
		expect(getWeekCount(2023, 12)).toBe(5);
	});
	test("Returns 4 on February 2027", () => {
		expect(getWeekCount(2027, 2)).toBe(4);
	});
});
