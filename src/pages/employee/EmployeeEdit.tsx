import EmployeeHeader from "../../components/organisms/EmployeeHeader";

<EmployeeHeader
  showBack
  title="Edit Profile"
  rightContent={
    <button
      className="
        rounded-xl
        bg-[var(--dominant)]
        px-4
        py-2
        text-white
      "
    >
      Save
    </button>
  }
/>
function EmployeeEdit() {
  return (
    <div>
      Employee Edit
    </div>
  );
}

export default EmployeeEdit;