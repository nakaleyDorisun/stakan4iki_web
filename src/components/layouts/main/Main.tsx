import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div>
      Main Menu
      <Button
        variant="outline"
        onClick={() => {
          dispatch(logout());
          navigate("/");
        }}
      >
        Log out
      </Button>
    </div>
  );
};
