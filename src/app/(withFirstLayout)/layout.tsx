import Providers from "@/lib/providers/Providers";
import { Toaster } from "sonner";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <div className="min-h-screen" >
     
        <Toaster position="top-center" richColors />

        {children}
      </div>
    </Providers>
  );
};

export default layout;
