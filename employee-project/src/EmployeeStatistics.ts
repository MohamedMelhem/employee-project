import { Employee } from "./Employee.js";

export class DolgozoStatisztika {
private dolgozok: Employee[];


constructor(dolgozok: Employee[]) {
    if (!dolgozok || dolgozok.length === 0) {
        throw new Error("A dolgozók megadása kötelező");
    }
    this.dolgozok = dolgozok;
}


legnagyobbFizetes(): number {
    let legnagyobb = this.dolgozok[0]!.salary;

    for (let d of this.dolgozok) {
        if (d.salary > legnagyobb) {
            legnagyobb = d.salary;
        }
    }

    return legnagyobb;
}


atlagEletkor(): number {
    let osszeg = 0;

    for (let d of this.dolgozok) {
        osszeg += d.age;
    }

    return osszeg / this.dolgozok.length;
}


legjobbanFizetettDolgozo(): Employee {
    let legjobb = this.dolgozok[0]!;

    for (let d of this.dolgozok) {
        if (d.salary > legjobb.salary) {
            legjobb = d;
        }
    }

    return legjobb;
}

ennyienKeresnekTobbet(fizetes: number): number {
    let darab = 0;

    for (let dolgozo of this.dolgozok) {
        if (dolgozo.salary > fizetes) {
            darab++;
        }
    }

    return darab;
}


}
