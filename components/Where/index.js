import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'
import {compose,lifecycle,withState} from 'recompose'

const Local = styled.img`
  width:55%;
  margin-top : 3%;
  margin-bottom: 5%; 
  filter: drop-shadow( 2px 3px 3px rgba(0,0,0,0.75) );
  @media (min-width:320px) {
    width:100%;
  }
  @media (min-width:412px) {
    width:100%;
    margin-top : 6%;
    margin-bottom: 0%; 
  }
`

const Mobile = styled.div`
    margin-top : 15%;
  @media (min-width:412px) {
    margin-top : 5%;
  }
  @media (max-width:720px) {
    text-align:center;
  }
`

const Font1 = styled.p`
  font-size : 1em;
  @media (min-width:320px) {
    font-size: 1.1em;
  }
  @media (min-width:412px) {
    font-size: 1.2em;
  }
  @media (min-width:576px) {
    font-size: 1.3em;
  }
  @media (min-width:768px) {
    font-size: 1.4em;
  }
  @media (min-width:1024px) {
    font-size: 1.6em;
  }
`

const Font2 = styled.p`
  font-size : 0.9em;
  @media (min-width:320px) {
    font-size: 1em;
  }
  @media (min-width:412px) {
    font-size: 1.1em;
  }
  @media (min-width:576px) {
    font-size: 1.2em;
  }
  @media (min-width:768px) {
    font-size: 1.3em;
  }
  @media (min-width:1024px) {
    font-size: 1.5em;
  }
`

const Font3 = styled.p`
  font-size : 0.7em;
  @media (min-width:320px) {
    font-size: 0.8em;
  }
  @media (min-width:412px) {
    font-size: 0.9em;
  }
  @media (min-width:576px) {
    font-size: 1em;
  }
  @media (min-width:768px) {
    font-size: 1.1em;
  }
  @media (min-width:1024px) {
    font-size: 1.3em;
  }
`

const Space = styled.div`
  margin-top: 6%;
  margin-bottom: 10%;
  top:0vw;
  @media (min-width:320px) {
    margin-top: 5%;
    margin-bottom: 17%;
  }
  @media (min-width:412px) {
    margin-top: 10%;
    margin-bottom: 10%;
  }
  @media (min-width: 1024px) {
    margin-top: 5%;
  }
`

const Bgmountain = styled.img`
  position: absolute;
  z-index: 1;
  bottom : 0vh;
  width : 100%;
  bottom: 0;
  @media (min-width:320px) {
    margin-top : -90%;
  }
  @media (min-width:375px) {
    margin-top : -68%;
  }
  @media (min-width:412px) {
    margin-top : -80%;
  }
  @media (min-width:768px) {
    margin-top : -90%;
  }
`

const Zindex = styled.div`
  position: relative;
  z-index : 2;
`

const Hidden = styled.div`
  @media(max-width:720px) {
    display: none;
  }
`
const Mountain = styled.img`
  position: absolute;
  z-index: 0;
  height: 200vh;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%, 0%);
  @media(min-width:412px) {
    height: 230vh;
  }
  @media(min-width:576px) {
    height: 180vh;
  }
  @media(min-width:576px) {
    height: 180vh;
  }
  @media(min-width:1024px) {
    height: 280vh;
  }
`

const index = props => (
  <Bg bgColor={Color.mongkey.where} where className="">
    <Zindex className="container">
      <div className="row">
        <Hidden className="col-4"></Hidden>
        <Space className="col-md-8">
          <Mobile className="text-center">
              <H1>WHERE</H1>
              <H2>ค่ายนี้จัดที่ไหน ?</H2>
          </Mobile>
          <div className="text-center">
            <a href="https://goo.gl/j6GJ21" target="_blank" >
              <Local className="mb-1" src="/static/image/Map22.png" alt="คณะเทคโนโลยีสารสนเทศ"/>
            </a>
            {/* <p className="">คลิกที่รูปภาพเพื่อดูแผนที่</p> */}
            <Font3 className="text-muted">คลิกที่รูปภาพเพื่อดูแผนที่</Font3>
            <Font1>คณะเทคโนโลยีสารสนเทศ</Font1>
            <Font2>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</Font2>
          </div>
        </Space>
      </div>
    </Zindex>
    {/* <Mountain src='/static/image/Who.png'/> */}
    <Bgmountain src ={props.check.bgwhere}/>

  </Bg>
)

export default compose(
  withState('check','setCheck',''),
  lifecycle({
    componentDidMount() {
      let theme = JSON.parse(window.localStorage.getItem("color"))
      this.props.setCheck(theme)
    }
  })
)(index)
