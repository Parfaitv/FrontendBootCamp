// import { Employee } from "./classes";

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

export class Company {
    constructor(companyName, currentProjects, completedProjects, staff) {
        this.companyName = companyName;
        this.currentProjects = currentProjects;
        this.completedProjects = completedProjects;
        this.staff = staff;
    }

    addNewCompanyMember(member) {
        member.companyName = this.companyName;
    }

    addProject(project) {
        this.currentProjects.push(project);
    }

    getMembersQuantity() {
        let count = 0;
        for (let role in this.staff) {
            count += this.staff[role].length;
        }
        return count;
    }

    completeProject(project) {
        const index = this.currentProjects.indexOf(project);
        if (index !== -1) {
            this.currentProjects.splice(index, 1);
            this.completedProjects.push(project);
            project.team.manager.projectQuantity++;
            for (let role in project.team.developers) {
                project.team.developers[role].forEach((developer) => {
                    developer.projectQuantity++;
                });
            }
        }
    }
}

export class Project {
    constructor(projectName, minQualification, team) {
        this.projectName = projectName;
        this.minQualification = minQualification;
        this.team = team;
    }

    addNewProjectMember(member) {
         if (
            member.qualification >= this.minQualification &&
            member.companyName === ''
        ) {
            if (this.team.developers[member.developerSide]) {
                this.team.developers[member.developerSide].push(member);
            } else {
                this.team.developers[member.developerSide] = [member];
            }
            member.companyName = '';
        }
    }
}

export class Manager extends Employee {
    constructor(projectQuantity, name, age, qualification) {
        super(name, age, qualification);
        this.projectQuantity = projectQuantity;
    }

    checkMember(minQualification, member) {
        if (
            member.qualification >= minQualification &&
            member.companyName === ''
        ) {
            return true;
        }
        return false;
    }
}

export class FrontendDeveloper extends Employee {
    constructor(name, age, qualification, stack, projectQuantity) {
        super(name, age, qualification);
        this.stack = stack;
        this.developerSide = 'frontend';
        this.projectQuantity = projectQuantity;
    }

    expandStack(someTech) {
        this.stack.push(someTech);
    }
}

export class BackendDeveloper extends Employee {
    constructor(name, age, qualification, stack, projectQuantity) {
        super(name, age, qualification);
        this.stack = stack;
        this.developerSide = 'backend';
        this.projectQuantity = projectQuantity;
    }

    expandStack(someTech) {
        this.stack.push(someTech);
    }
}


const testEmployee = new Employee('test', 'L2', ['js', 'ts'], 'prostokvashino')
// console.log(testEmployee)

// console.log("=========================");

const testFrontendDeveloper = new FrontendDeveloper(['js', 'ts'], 'frontend', 19)
// console.log(testFrontendDeveloper)

// console.log("=========================");


const testBackendDeveloper = new BackendDeveloper(['php', 'java'], 'backend', 2)
// console.log(testBackendDeveloper)

// console.log("=========================");


const testManager = new Manager(14)
// console.log(testManager)

// console.log("=========================");


const testProject = new Project('secretSchool', 'L2', {manager:testManager, developers:{frontend:testFrontendDeveloper, backend:testBackendDeveloper}})
// console.log(testProject)
// 
// console.log("=========================");


const testCompany = new Company('SBER', testProject,[], {
    manager:testManager, 
    developers:
    {
    frontend:testFrontendDeveloper,
    backend:testBackendDeveloper
    }
})
// console.log(testCompany)



addedNewCompanyMember()