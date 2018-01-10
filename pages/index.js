// นี่คือหน้า Home นะ
import React from 'react'
import Intro from '../components/Intro/'

import What from '../components/What/index'
import Who from '../components/Who/index'
import ITdetails from '../components/ITdetails/index'
import RegisBut from '../components/Core/RegisBut'
import GameBut from '../components/Core/GameBut'

const index = () => (
	<div>
        <GameBut/>
        <RegisBut/>        
		<section>
			<Intro />
		</section>
		<section>
        	
			<What />
		</section>
		<section>
			<Who />
		</section>
		<section>
			<ITdetails />
		</section>
	</div>
)

export default index
