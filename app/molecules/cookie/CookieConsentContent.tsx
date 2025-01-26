import { Button } from "@/app/atoms/cookie/Button";

interface CookieConsentContentProps {
  onAccept: () => void;
  onReject: () => void;
}

export const CookieConsentContent: React.FC<CookieConsentContentProps> = ({
  onAccept,
  onReject,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2 text-gray-600 ">
        クッキーポリシー
      </h2>
      <p className="text-sm text-gray-600">
        私たちはコンテンツをパーソナライズし、ソーシャルメディアの機能を提供し、そしてトラフィックを分析するためにクッキーを使用しています。承諾することで、私たちのクッキー利用に同意したことになります。
      </p>
      <div className="mt-4 flex gap-2">
        <Button variety="primary" onClick={onAccept}>
          承諾
        </Button>
        <Button variety="secondary" onClick={onReject}>
          拒否
        </Button>
      </div>
    </div>
  );
};
