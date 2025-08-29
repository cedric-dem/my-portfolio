import BaseCard from './BaseCard'

export default class ProjectCard extends BaseCard {
    constructor({ name, description, github, app, technical }) {
        super(name)
        this.description = description
        this.github = github
        this.app = app
        this.technical = technical
    }
}