import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'

const DivWhere = styled.div`
top:200px;
text-align: center;    
width: 100%;  

`
const Img = styled.img`
width:50%;
`

const index = () => (
<DivWhere>    
    <Bg>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <p className="display-4">FAQs</p>
                <div className="row">
                <div className="col-md-12">
                <div className>คลิกที่รูปภาพเพื่อดูแผนที่</div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </Bg>
</DivWhere>        
)
export default index