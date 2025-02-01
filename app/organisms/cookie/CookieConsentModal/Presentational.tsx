import { Card } from "@/app/atoms/cookie/Card";
import { CardContent } from "@/app/atoms/cookie/CardContent";
import { CookieConsentContent } from "@/app/molecules/cookie/CookieConsentContent";

interface CookieConsentModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onReject: () => void;
}

export const Presentational: React.FC<CookieConsentModalProps> = ({
  isOpen,
  onAccept,
  onReject,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card className="max-w-md w-full m-4">
        <CardContent>
          <CookieConsentContent onAccept={onAccept} onReject={onReject} />
        </CardContent>
      </Card>
    </div>
  );
};
