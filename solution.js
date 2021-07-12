const data = require('./data.json')

function howManyEmployees(data) {
    return data.length;
}

function howManyFrench(data) {
   return data.filter((employee) => employee.country === "FR").length;
}

function howMuchEarnsDrake(data) {
    const drake = data.filter((employee) => employee.first_name === "Drake");
    return drake[0].annual_salary;
}

function howMuchEarnsJulie(data) {
    const julie = data.filter((employee) => employee.first_name === "Julie");
    return julie[0].annual_salary;
}

function howMuchEarnsSyd(data) {
    const syd = data.filter((employee) => employee.first_name === "Syd");
    return syd[0].annual_salary;
}

function calculateAverageSalary(data) {
    let salariesTotal = 0;
    data.map((employee) => {
        salariesTotal = salariesTotal + employee.annual_salary;
    })
    return Math.floor(salariesTotal / data.length);
}

function calculateAverageFrenchSalary(data) {
    const frenchSalaries = data.filter((employee) => employee.country === "FR");
    return calculateAverageSalary(frenchSalaries);
}

function howOldAverageEmployee(data) {
    let agesTotal = 0;
    data.map((employee) => {
        agesTotal = agesTotal + employee.age;
    })
    return Math.floor(agesTotal / data.length); 
}

function howManyLikeLions(data) {
    let lions = 0;
    data.map((employee) => {
        if (employee.spirit_animal.toLowerCase().includes("lion")) {
            lions++;
        }
    })
    return lions;
}

function getTopThreeRichestSpiritAnimals(data) {
    const sorted = data.sort((a, b) => {
        return b.annual_salary - a.annual_salary;
    });
    let arr = [];
    sorted.map((employee, id) => {
        if (id < 3) arr.push(employee.spirit_animal);
    })
    return arr;
}

function getTopThreePoorestSpiritAnimals(data) {
    const sorted = data.sort((a, b) => {
        return a.annual_salary - b.annual_salary;
    });
    const arr = [];
    sorted.map((employee, id) => {
        if (id < 3) arr.push(employee.spirit_animal);
    })
    return arr;
}

function howManyDepartments(data) {
    const arr = [];
    data.map((employee) => {
        if (!arr.includes(employee.department)) {
            arr.push(employee.department);
        }
    })
    return Math.floor(arr.length);
}

function averageNumberByDepartment(data) {
    const arr = [];
    data.map((employee) => {
        if (!arr.includes(employee.department)) {
            arr.push(employee.department);
        }
    })
    const deptsLength = [];
    arr.map((dept) => {
        const depts = data.filter((employee) => employee.department === dept);
        deptsLength.push(depts.length);
    })
    const reduced = deptsLength.reduce((a, c) => a + c);
    return Math.floor(reduced / deptsLength.length);
}

function getEmailProvidersNumber(data) {
    return 0
}

function mostGenerousDepartment(data) {
    return ""
}

function leastGenerousDepartment(data) {
    return ""
}

function howManyPeopleShareFirstName(data) {
    return 0
}

function howManyPeopleShareLastName(data) {
    return 0
}

function topThreeSalaryAgeRatioIds(data) {
    return []
}

module.exports = {
    howManyEmployees,
    howManyFrench,
    howMuchEarnsDrake,
    howMuchEarnsJulie,
    howMuchEarnsSyd,

    calculateAverageSalary,
    calculateAverageFrenchSalary,
    howOldAverageEmployee,

    howManyLikeLions,
    getTopThreeRichestSpiritAnimals,
    getTopThreePoorestSpiritAnimals,
    howManyDepartments,
    averageNumberByDepartment,

    getEmailProvidersNumber,
    mostGenerousDepartment,
    leastGenerousDepartment,
    howManyPeopleShareFirstName,
    howManyPeopleShareLastName,

    topThreeSalaryAgeRatioIds,
    
}