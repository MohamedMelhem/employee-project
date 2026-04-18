import { describe, test, expect } from "vitest";
import { DolgozoStatisztika } from "../src/EmployeeStatistics.js";

describe("tesztek", () => {

const emberek = [
    { name: "Szabi", age: 25, salary: 300000 },
    { name: "Bela", age: 40, salary: 500000 },
    { name: "Geza", age: 30, salary: 450000 }
];

test("ures lista hiba", () => {
    expect(() => new DolgozoStatisztika([])).toThrow();
});

test("max fizu", () => {
    let stat = new DolgozoStatisztika(emberek);
    expect(stat.legjobbanFizetettDolgozo()).toBe(emberek[1]);
});

test("atlag kor", () => {
    let stat = new DolgozoStatisztika(emberek);
    expect(stat.atlagEletkor()).toBeCloseTo(31.7, 1);
});

test("legjobban fizetett", () => {
    let stat = new DolgozoStatisztika(emberek);
    expect(stat.legjobbanFizetettDolgozo().name).toBe("Bela");
});

test("tobb mint fizetes", () => {
    let stat = new DolgozoStatisztika(emberek);

    expect(stat.ennyienKeresnekTobbet(400000)).toBe(2);
    expect(stat.ennyienKeresnekTobbet(300000)).toBe(2);
});


// HATAR ERTEK TESZTEK


test("HATAR ERTEK - pont a legnagyobb fizu", () => {
    let stat = new DolgozoStatisztika(emberek);
    expect(stat.ennyienKeresnekTobbet(500001)).toBe(0);
});

test("HATAR ERTEK - eggyel kisebb mint max", () => {
    let stat = new DolgozoStatisztika(emberek);
    expect(stat.ennyienKeresnekTobbet(499999)).toBe(1);
});

test("HATAR ERTEK - nulla fizetes", () => {
    let stat = new DolgozoStatisztika(emberek);
    expect(stat.ennyienKeresnekTobbet(0)).toBe(3);
});

test("HATAR ERTEK - nagyon nagy szam", () => {
    let stat = new DolgozoStatisztika(emberek);
    expect(stat.ennyienKeresnekTobbet(9999999)).toBe(0);
});

});
