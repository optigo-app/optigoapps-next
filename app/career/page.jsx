
import Careerinfo from '@/components/CareerInfo/CareerInfo'
import React from 'react'
import { generatePageMetadata } from '@/utils/HeadMeta';
import { pages } from '@/utils/pages';

export const metadata = generatePageMetadata(pages["/career"])

const page = () => {
  return (
    // <Career />
    <Careerinfo />
  )
}

export default page
