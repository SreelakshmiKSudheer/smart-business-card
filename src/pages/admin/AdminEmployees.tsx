import { useState } from "react";
import FilterDropdown from "../../components/molecules/FilterDropdown";
import ApprovalGroup from '../../components/organisms/Approvals/ApprovalGroup'
import type { ApprovalGroupsProps } from '../../components/organisms/Approvals/ApprovalGroup';
import profileImage from '../../assets/images/profile.png'
import Input from '../../components/atoms/Input';
import { AlertCircle, ListFilter, Search, TrendingUp, Users } from 'lucide-react';
import Button from '../../components/atoms/buttons';
import MetricCard from '../../components/molecules/MetricCard';
import EmployeeAdminCard from "../../components/molecules/EmployeeAdminCard";
import Pagination from "../../components/organisms/Pagination";



const approvalGroups: ApprovalGroupsProps = {
    name: "Pending Requests",
    approvalRequests: [
        {
            name:"John Doe",
            subject:"Updates Expertise Section",
            description:"Added CI/CD and DevOps to the expertise section of the profile.",
            time:"2 hours ago",
            image: profileImage,
            imgAlt:"John Doe",
        },
        {
            name:"John Doe",
            subject:"Updates Expertise Section",
            description:"Added CI/CD and DevOps to the expertise section of the profile.",
            time:"2 hours ago",
            image: profileImage,
            imgAlt:"John Doe",
        },
        {
            name:"John Doe",
            subject:"Updates Expertise Section",
            description:"Added CI/CD and DevOps to the expertise section of the profile.",
            time:"2 hours ago",
            image: profileImage,
            imgAlt:"John Doe",
        }
    ]
};

const departments = [
  "All Departments",
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Human Resources",
  "Finance",
  "Operations",
];



const AdminEmployees = () => {

  const [showFilter, setShowFilter] = useState(false);
  const [department, setDepartment] = useState("All Departments");
  const [page, setPage] = useState(1);


  return (
    <div className='flex h-full w-full flex-col gap-4 bg-(--background)'>
      <div className='flex flex-wrap items-center justify-between gap-3 rounded-md bg-(--card) p-4 shadow-lg'>
        <div>
          <h1 className="w-fit text-2xl font-bold text-(--text)">Employees</h1>
          <p className="text-sm text-(--text-light)">Manage your employees and their profiles.</p>
        </div>
        <div className='flex flex-wrap justify-end gap-3'>
          <Input icon={<Search className="h-5 w-5" />} placeholder="Search employees by name, email..." />
          <div className="relative">
            <Button
              icon={<ListFilter className="h-5 w-5" />}
              variant="outline"
              size="sm"
              onClick={() => setShowFilter((prev) => !prev)}
            />

            <FilterDropdown
              open={showFilter}
              options={departments}
              selected={department}
              onSelect={setDepartment}
              onClose={() => setShowFilter(false)}
            />
          </div>
        </div>
      </div>

      <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        <MetricCard
          title="Total Employees"
          value="1,284"
          icon={<Users className="h-5 w-5" />}
          iconBg="bg-[#ccfbf1]"
          iconColor="text-[#0d9488]"
        />
        <MetricCard
          title="Review Required"
          value="12"
          icon={<AlertCircle className="h-5 w-5" />}
          iconBg="bg-[#fee2e2]"
          iconColor="text-[#ef4444]"
        />
        <MetricCard
          title="Weekly Scans"
          value="+12.5%"
          icon={<TrendingUp className="h-5 w-5" />}
          iconBg="bg-[#dbeafe]"
          iconColor="text-[#2563eb]"
        />
      </div>

      <div className='grid w-full grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)]'>
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            <EmployeeAdminCard
              name="Alex Stratos"
              role="Product Design"
              designation="Senior UX Researcher"
              image={profileImage}
            />
            <EmployeeAdminCard
              name="Alex Stratos"
              role="Product Design"
              designation="Senior UX Researcher"
              image={profileImage}
            />
            <EmployeeAdminCard
              name="Alex Stratos"
              role="Product Design"
              designation="Senior UX Researcher"
              image={profileImage}
            />
            <EmployeeAdminCard
              name="Alex Stratos"
              role="Product Design"
              designation="Senior UX Researcher"
              image={profileImage}
            />
          </div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            <EmployeeAdminCard
              name="Alex Stratos"
              role="Product Design"
              designation="Senior UX Researcher"
              image={profileImage}
            />
            <EmployeeAdminCard
              name="Alex Stratos"
              role="Product Design"
              designation="Senior UX Researcher"
              image={profileImage}
            />
            <EmployeeAdminCard
              name="Alex Stratos"
              role="Product Design"
              designation="Senior UX Researcher"
              image={profileImage}
            />
            <EmployeeAdminCard
              name="Alex Stratos"
              role="Product Design"
              designation="Senior UX Researcher"
              image={profileImage}
            />
          </div>
          <Pagination
            currentPage={page}
            pageSize={6}
            totalItems={1284}
            onPageChange={setPage}
          />
        </div>
        <div className='w-full lg:justify-self-end'>
          <ApprovalGroup {...approvalGroups} />
        </div>
      </div>
    </div>
  )
}

export default AdminEmployees
