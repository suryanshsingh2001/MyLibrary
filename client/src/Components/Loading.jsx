import { useI18nProContext } from "@marchintosh94/i18n-pro-react";
import React from "react";

const Loading = () => {
  const { t } = useI18nProContext();
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="animate-fade-in text-white text-3xl font-semibold">
        {t("loading")}
      </div>
    </div>
  );
};

export default Loading;
