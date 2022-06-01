import { NavSection } from '@carbonplan/layouts'
import { contents } from './contents'

const Section = ({ children, name }) => {
  return (
    <NavSection
      name={name}
      menu={{ contents }}
      title={`${name[0].toUpperCase() + name.slice(1)} – CarbonPlan`}
      description={'TK'}
    >
      {children}
    </NavSection>
  )
}

export default Section
