'use client'
import { useState } from 'react'
import Wrapper from 'components/Wrapper'
import Range, { type IOnChangePayload } from 'components/Range'

const MEASURER = 'px'
const MIN = -100
const MAX = 100

export default function Page () {
  const [values, setValues] = useState({
    horizontal_offset: '0',
    vertical_offset: '0',
    blur_radius: '50',
    spread_radius: '50'
  })

  const handleOnChangeRange = ({ name, value }: IOnChangePayload) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Wrapper
      className="flex flex-col gap-8"
      childrenPreview={
        <div className="h-full grid place-items-center">
          <div
            className="h-80 w-80 bg-stone-700"
            style={{
              boxShadow: `${values.horizontal_offset}${MEASURER} ${values.vertical_offset}${MEASURER} ${values.blur_radius}${MEASURER} ${values.spread_radius}${MEASURER} rgba(255, 255, 255, 0.7)`
            }}
          ></div>
        </div>
      }
    >
      <Range
        title="Horizontal offset"
        measurer={MEASURER}
        value={values.horizontal_offset}
        min={MIN}
        max={MAX}
        onChange={handleOnChangeRange}
        name="horizontal_offset"
      />
      <Range
        title="Vertical offset"
        measurer={MEASURER}
        value={values.vertical_offset}
        min={MIN}
        max={MAX}
        onChange={handleOnChangeRange}
        name="vertical_offset"
      />

      <Range
        title="Blur radius"
        measurer={MEASURER}
        value={values.blur_radius}
        min={0}
        max={MAX}
        onChange={handleOnChangeRange}
        name="blur_radius"
      />

      <Range
        title="Spread radius"
        measurer={MEASURER}
        value={values.spread_radius}
        min={MIN}
        max={MAX}
        onChange={handleOnChangeRange}
        name="spread_radius"
      />
    </Wrapper>
  )
}
