'use client'
import type { ChangeEvent } from 'react'
import { useState, useEffect } from 'react'
import Wrapper from 'components/Wrapper'
import Range, { type IOnChangePayload } from 'components/Range'
import Input from 'components/Input'
import Switch from 'components/Switch'
import { useTheme } from 'hooks'

const MEASURER = 'px'
const MIN = -100
const MAX = 100
const LIGHT_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)'
const DARK_SHADOW_COLOR = 'rgba(255, 255, 255, 0.7)'

export default function Page () {
  const { theme } = useTheme()

  const [values, setValues] = useState({
    inset: false,
    horizontal_offset: '0',
    vertical_offset: '0',
    blur_radius: '50',
    spread_radius: '50',
    color: DARK_SHADOW_COLOR
  })

  useEffect(() => {
    if (
      (theme === 'dark' && values.color !== LIGHT_SHADOW_COLOR) ||
      (theme === 'light' && values.color !== DARK_SHADOW_COLOR)
    ) return

    setValues((prev) => ({
      ...prev,
      color: theme === 'dark' ? DARK_SHADOW_COLOR : LIGHT_SHADOW_COLOR
    }))
  }, [theme])

  const handleOnClickSwitch = () => {
    setValues((prev) => ({
      ...prev,
      inset: !prev.inset
    }))
  }

  const handleOnChangeRange = ({ name, value }: IOnChangePayload) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleOnChangeInputColor = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

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
            className="h-56 w-56 md:h-80 md:w-80 bg-gray-300 dark:bg-stone-700"
            style={{
              boxShadow: `${values.inset ? 'inset ' : ''}${values.horizontal_offset}${MEASURER} ${values.vertical_offset}${MEASURER} ${values.blur_radius}${MEASURER} ${values.spread_radius}${MEASURER} ${values.color}`
            }}
          ></div>
        </div>
      }
    >
      <Switch
        title="Inset"
        active={values.inset}
        onClick={handleOnClickSwitch}
      />

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

      <Input
        labelTitle="Color"
        placeholder="Ex. rgba(255, 255, 255, 0.7), #FFFFFF"
        name="color"
        value={values.color}
        onChange={handleOnChangeInputColor}
      />
    </Wrapper>
  )
}
