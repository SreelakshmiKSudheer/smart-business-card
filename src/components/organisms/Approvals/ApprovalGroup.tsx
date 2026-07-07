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
    <div className='flex w-full flex-col gap-1 rounded-md bg-(--card) shadow-lg'>
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
