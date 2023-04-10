'use client'
import { useState } from 'react'
import Wrapper from 'components/Wrapper'
import Range from 'components/Range'

export default function Page () {
  const [percentage, setPercentage] = useState<number>(0)

  const handleOnChangeBlurRadius = (value: number) => {
    setPercentage(value)
  }

  return (
    <Wrapper
      childrenPreview={<h1>Preview</h1>}
    >
      <Range
        title="Blur radius"
        measurer="px"
        value={percentage}
        min={0}
        max={20}
        onChange={handleOnChangeBlurRadius}
      />
    </Wrapper>
  )
}
