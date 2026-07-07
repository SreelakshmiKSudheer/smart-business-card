import React from 'react'
import type { ApprovalProps } from '../../molecules/Approval/Approval';
import Approval from '../../molecules/Approval/Approval';
import { SaveCheck } from 'lucide-react';
import Button from '../../atoms/buttons';

export type ApprovalGroupsProps = {
    name?: string;
    approvalRequests: ApprovalProps[];
}

const ApprovalGroup = ({ name, approvalRequests }: ApprovalGroupsProps) => {
  return (
    <div className='flex flex-col gap-1 bg-(--card) shadow-lg rounded-md min-w-55 md:max-w-87.5'>
      <div className='w-full flex justify-start items-center m-4 gap-2'>
        <SaveCheck className='text-red-700' />
        {name && <h3 className=' text-lg text-(--text) font-bold w-fit'>{name}</h3>}
      </div>
        {approvalRequests.map((request, index) => (
          <div key={index} className='rounded-md'>
            <Approval {...request} />
          </div>
        ))}
        <Button text='View All' variant="none" />
    </div>
  )
}

export default ApprovalGroup
