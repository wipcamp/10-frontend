import react from 'react'
import Bg from '../Bg'
import Content from '../OurCamp/ContentOurCamp'
import NavOurCamp from '../OurCamp/NavOurCamp'
import Button from '../OurCamp/ButtonCon'
import RegisBut from '../OurCamp/RegisBut'


const HomeOurCamp = () => (
    <Bg>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <NavOurCamp />
                    <Content />
                </div>
            </div>
        </div>
        <Button />
        <RegisBut />        
    </Bg>
)
export default HomeOurCamp