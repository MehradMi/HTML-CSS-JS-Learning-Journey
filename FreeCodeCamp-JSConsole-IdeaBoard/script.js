const projectStatus = {
    PENDING: {
        description: "Pending Execution"
    },
    SUCCESS: {
        description: "Executed Successfully"
    } ,
    FAILURE: {
        description: "Execution Failed"
    } 
};

class ProjectIdea {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = projectStatus.PENDING;
    }

    updateProjectStatus(newStatus) {
        this.status = newStatus;
    }
};

class ProjectIdeaBoard {
    constructor(title) {
        this.title = title;
        this.ideas = []; 
    }

    pin(projectIdeaInstance) {
        this.ideas.push(projectIdeaInstance);
    }

    unpin(projectIdeaInstance) {
        const indexToRemove = this.ideas.indexOf(projectIdeaInstance);
        if (indexToRemove !== -1) {
            this.ideas.splice(indexToRemove, 1);
        }
    }

    count() {
        return this.ideas.length;
    }

    formatToString() {
        const projectInfo = this.ideas
        .map(element => `${element.title} (${element.status.description}) - ${element.description}`).join("\n");
        let formattedToString = `${this.title} has ${this.count()} idea(s)\n${projectInfo}`;
        return formattedToString;
    }
};

let techProject = new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.");
let techProjects = new ProjectIdeaBoard("Tech Projects Board");
techProjects.pin(techProject);

let output = techProjects.formatToString();
console.log(output);