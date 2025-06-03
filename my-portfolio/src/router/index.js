import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Projects from '../views/ProjectsPage.vue'
import Contact from '../views/ContactPage.vue'
import Education from '../views/EducationPage.vue'
import Experiences from '../views/ExperiencesPage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/jobs', name: 'Experiences', component: Experiences },
    { path: '/education', name: 'Education', component: Education },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
