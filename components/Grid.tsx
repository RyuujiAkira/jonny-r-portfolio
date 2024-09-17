import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { heroGridItems1, heroGridItems2 } from '@/data'

const Grid = () => {
  return (
    <section id='about' className='h-screen flex justify-center align-middle flex-col gap-4'>
        <BentoGrid>
            { heroGridItems1.map(({ id, title, descriptionTop, descriptionBottom, className, img, imgClassName, titleClassName, spareImg, pillTitle, pillClassName }) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    descriptionTop={descriptionTop}
                    descriptionBottom={descriptionBottom}
                    className={className}
                    titleClassName={titleClassName}
                    pillTitle={pillTitle}
                    pillClassName={pillClassName}
                    img={img}
                    imgClassName={imgClassName}
                />
            ))}
        </BentoGrid>

        <BentoGrid className='md:auto-rows-auto'>
            { heroGridItems2.map(({ id, title, descriptionTop, descriptionBottom, className, img, imgClassName, titleClassName, spareImg, pillTitle, pillClassName }) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    descriptionTop={descriptionTop}
                    descriptionBottom={descriptionBottom}
                    className={className}
                    titleClassName={titleClassName}
                    pillTitle={pillTitle}
                    pillClassName={pillClassName}
                    img={img}
                    imgClassName={imgClassName}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid