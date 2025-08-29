import BaseCard from './BaseCard'

export default class MissionCard extends BaseCard {
    constructor({ name, startDate, endDate, location, company, description }) {
        super(name)
        this.startDate = startDate
        this.endDate = endDate
        this.location = location
        this.company = company
        this.description = description
    }
}