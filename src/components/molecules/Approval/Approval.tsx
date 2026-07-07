import React from 'react'
import Avatar from '../../atoms/avatar'
import type { ButtonProps } from '../../atoms/buttons';
import Button from '../../atoms/buttons';

export type ApprovalProps = {
    name?: string;
    subject?: string;
    description?: string;
    time?: string;
    image?: string;
    imgAlt?: string;
}

const Approval = ({ name, subject, description, time, image, imgAlt }: ApprovalProps) => {
    const buttons: ButtonProps[] = [
        {
            text: "Decline",
            variant: "outline",
            color: "primary",
            onClick: () => console.log("Decline clicked")
          },
          {
            text: "Accept",
            variant: "filled",
            color: "primary",
            onClick: () => console.log("Accept clicked")
          }
    ]
  return (
    <div className='w-full flex flex-col gap-2 p-5 bg-(--card)  shadow-lg rounded-md'>
      <div className='w-full flex gap-4 justify-around '>
        <div className='flex gap-4 items-center justify-center'>
            <img src={image} alt={imgAlt} className='w-10 h-10 rounded-full' />
            <div className=" flex flex-col justify-center">
            <h3 className='text-md font-bold'>{name}</h3>
            <p className='text-sm font-light text-(--text-light)'>{subject}</p>
            </div>
        </div>
        <p className='text-xs text-(--text-light)'>{time}</p>
      </div>
      <div className='w-full flex flex-col gap-4 justify-around '>
        <p className='text-xs text-(--text-light)'>{description}</p>
        <div className='w-full flex gap-3 justify-between'>
            {buttons && buttons.map((button, index) => (
                <Button key={index} text={button.text} variant={button.variant} color={button.color} fullWidth={true} size="sm" onClick={button.onClick} />
            ))}
        </div>
      </div>  
    </div>
  )
}

export default Approval
