import BaseCard from './BaseCard'
import MissionCard from './MissionCard'

export default class ExperienceCard extends BaseCard {
    constructor({ name, startDate, endDate, location, company, description, missions = [] }) {
        super(name)
        this.startDate = startDate
        this.endDate = endDate
        this.location = location
        this.company = company
        this.description = description
        this.missions = missions.map(m => m instanceof MissionCard ? m : new MissionCard(m))
    }
}