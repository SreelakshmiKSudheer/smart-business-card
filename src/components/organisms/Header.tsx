import { User } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "../atoms/buttons";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full h-[8%] bg-(--card) border-b border-slate-200 shadow-sm flex justify-end">
      <Button
        icon={<User size={22} />}
        variant="none"
        onClick={() => navigate("/admin/profile")}
      />
    </header>
  );
}