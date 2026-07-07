import React from 'react'
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
    <div className='w-full h-full flex flex-col gap-4 bg-(--background)'>
      {/* top heading and filter */}
      <div className='flex flex-wrap gap-1 p-4 bg-(--card) justify-between items-center rounded-md shadow-lg'>
        <div>
          <h1 className="text-2xl font-bold text-(--text) w-fit">Employees</h1>
          <p className="text-sm text-(--text-light)">Manage your employees and their profiles.</p>
        </div>
        <div className='flex justify-end  gap-4'>
          <Input icon={<Search />} placeholder="Search employees by name, email..." />
          <div className="relative">
            <Button
              icon={<ListFilter size={20} />}
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
      {/* metric cards */}
      <div className='flex flex-wrap w-full justify-between items-center gap-4'>
            <MetricCard 
              title="Total Employees" 
              value="1,284" 
              icon={<Users size={20} />} 
              iconBg="bg-[#ccfbf1]" 
              iconColor="text-[#0d9488]" 
            />
            <MetricCard 
              title="Review Required" 
              value="12" 
              icon={<AlertCircle size={20} />} 
              iconBg="bg-[#fee2e2]" 
              iconColor="text-[#ef4444]" 
            />
            <MetricCard 
              title="Weekly Scans" 
              value="+12.5%" 
              icon={<TrendingUp size={20} />} 
              iconBg="bg-[#dbeafe]" 
              iconColor="text-[#2563eb]" 
            />
      </div>
      {/* employees and approval requests */}
      <div className='flex flex-wrap md:flex-no-wrap gap-4 justify-between items-start'>
        <div className='flex flex-col gap-4 w-fit'>
          <div className='flex flex-wrap  gap-4 justify-around items-start'>
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
          <div className='flex flex-wrap  gap-4 justify-around items-start'>
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
        <ApprovalGroup {...approvalGroups} />
      </div>
    </div>
  )
}

export default AdminEmployees
