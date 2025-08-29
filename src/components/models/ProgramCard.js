import BaseCard from './BaseCard'

export default class ProgramCard extends BaseCard {
    constructor({ name, startDate, endDate, courses = [] }) {
        super(name)
        this.startDate = startDate
        this.endDate = endDate
        this.courses = courses
    }
}