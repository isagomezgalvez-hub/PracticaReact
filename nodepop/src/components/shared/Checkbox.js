import React, { Children } from 'react'

const Checkbox = ({label, ...props})=>{
	return(
		<div>
		
			<label className="checkbox">
				<input type="checkbox" {...props} ></input>
				<span>{label}</span>
				</label>
		</div>
	)
}

export default Checkbox