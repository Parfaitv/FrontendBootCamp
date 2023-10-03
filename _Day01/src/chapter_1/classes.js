export class Employee {
    constructor(name, grade, hardSkills, company) {
        this.name = name,
        this.grade = grade,
        this.hardSkills = hardSkills,
        this.company = company
    }

    changeCompany(newCompanyName) {
        this.company = typeof newCompanyName === 'undefined' ? "" : newCompanyName;
    }

    upGrade() {
        this.grade = this.grade === 'L1' ? 'L2' :
        this.grade === 'L2' ? 'L3' :
        this.grade === 'L3' ? 'L4' :
        this.grade === 'L4' ? 'L4' : 'L1'
    }

    addSkill(newSkillName) {
        this.hardSkills = [...this.hardSkills, typeof newSkillName ===  'undefined' ? 'empty' : newSkillName ]
    }
}



const testEmployee = new Employee('test', 'L2', ['js', 'ts'], 'prostokvashino')
testEmployee.changeCompany('SBER'); 
testEmployee.upGrade(); 
testEmployee.addSkill('css')
console.log(testEmployee);