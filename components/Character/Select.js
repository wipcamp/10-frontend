import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { compose, withState } from 'recompose';
import ReactTimeOut from 'react-timeout'
import Router from 'next/router'

import Selectling from './Selectling'
import Selectyak from './Selectyak'
import RightToLeft from '../PageTransition/RightToLeft'
import Scorebar from './Scorebar'
import Bg from '../Bg'
import MoveDown from '../PageTransition/MoveDown'
import MoveUp from '../PageTransition/MoveUp'


const Div = styled.div`
  width: 100vw;
  height: 100vh;
`
const Fit = styled.div`
  padding-right: 0px;
  padding-left: 0px;
`
const go = withState('go', 'setGo', false)

const setGo = (callback, data) => (
  callback(!data),
  setTimeout( () => Router.push('/what-l'), 300)
)

const Select = props => (

  <Bg>
    <MoveDown go={props.go}>
        <RightToLeft check={!props.check}>
          <Scorebar />
          <div className="container-fluid">
            <Div className="row">
              <Fit onClick={() => setGo(props.setGo, props.go)} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Selectling />
              </Fit>
              <Fit className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Selectyak />
              </Fit>
            </Div>

          </div>
        </RightToLeft>
    </MoveDown>
  </Bg>

)

const selectcompose = compose(go)(Select)

export default selectcompose