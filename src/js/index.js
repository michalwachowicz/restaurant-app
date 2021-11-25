import '../scss/index.scss'
import { initNav } from './components/nav'
import ContentGenerator from './generator'

initNav()
ContentGenerator.generateContent('home')
