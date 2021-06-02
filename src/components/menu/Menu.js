import { MenuOpen } from '@material-ui/icons'
import './menu.scss'

export default function Menu({menuOpen, SetMenuOpen}) {
    return (
        <div className={'menu '+(menuOpen && 'active')}>
            <ul>
                <li>
                    <a href="" id="intro">Home</a>
                </li>
                <li>
                    <a href="" id="intro">Portfolio</a>
                </li>
                <li>
                    <a href="" id="intro">Works</a>
                </li>
                <li>
                    <a href="" id="intro">Testimonials</a>
                </li>
                <li>
                    <a href="" id="intro">Contact</a>
                </li>
            </ul>
        </div>
    )
}
