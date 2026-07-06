import React from 'react'
import HeroSection from '../HeroSection'
import CompanyCard from '../../organisms/CompanyCard'
import LocationCard from '../../organisms/LocationCard'
import { company } from '../../../data/company'
import { employee } from '../../../data/employee'

const BusinessCard = () => {
  return (
    <div>
        <HeroSection employee={employee} />

<CompanyCard company={company} />

          <LocationCard company={company} />
    </div>
  )
}

export default BusinessCard