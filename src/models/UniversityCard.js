import BaseCard from './BaseCard'
import ProgramCard from './ProgramCard'

export default class UniversityCard extends BaseCard {
    constructor({ name, startDate, endDate, location, description, programs = [] }) {
        super(name)
        this.startDate = startDate
        this.endDate = endDate
        this.location = location
        this.description = description
        this.programs = programs.map(p => p instanceof ProgramCard ? p : new ProgramCard(p))
    }
}