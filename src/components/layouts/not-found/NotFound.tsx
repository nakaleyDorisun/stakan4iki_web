import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Страница не найдена</h1>
      <Button
        variant="default"
        onClick={() => {
          navigate("/app");
        }}
      >
        На главную
      </Button>
    </div>
  );
};
